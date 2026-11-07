const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const { ensureBrochurePDF, getBrochurePath, BROCHURE_PATH } = require('./services/brochure');
const { sendLeadNotificationEmail } = require('./services/email');
const { sendWhatsAppBrochureAutomation } = require('./services/whatsapp');

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'data', 'leads.json');

// Ensure data directory and file exist
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
}
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Generate / ensure PDF brochure exists safely
Promise.resolve(ensureBrochurePDF()).catch(err => console.error('[Brochure] Init error:', err));

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the brochure PDF publicly
app.get(['/brochure.pdf', '/assets/Savera_Brochure.pdf', '/api/brochure'], (req, res) => {
  const file = getBrochurePath() || BROCHURE_PATH;
  if (fs.existsSync(file)) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="Savera_Tex_Solution_Brochure.pdf"');
    const stream = fs.createReadStream(file);
    stream.pipe(res);
  } else {
    res.status(404).json({ error: 'Brochure PDF not found.' });
  }
});

// Helper to read leads
function getLeads() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading leads file:', err);
    return [];
  }
}

// Helper to save leads
function saveLeads(leads) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving leads file:', err);
    return false;
  }
}

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'Savera Tex Solution LLP Backend API',
    timestamp: new Date().toISOString(),
    brochureAvailable: fs.existsSync(getBrochurePath() || BROCHURE_PATH),
    emailConfigured: Boolean(process.env.GMAIL_APP_PASSWORD),
    whatsappAutomated: Boolean(process.env.WHATSAPP_CLOUD_API_TOKEN || process.env.TWILIO_ACCOUNT_SID || process.env.WHATSAPP_WEBHOOK_URL)
  });
});

// Root Info
app.get('/', (req, res) => {
  res.json({
    name: 'Savera Tex Solution LLP API',
    version: '1.0.0',
    established: 1995,
    endpoints: {
      health: 'GET /api/health',
      inquire: 'POST /api/inquire',
      leads: 'GET /api/leads',
      brochure: 'GET /brochure.pdf'
    }
  });
});

// Inquire / Lead Submission Endpoint with WhatsApp & Gmail Automations
app.post('/api/inquire', async (req, res) => {
  const { firmName, personName, mobileNumber, cityState, categories, message } = req.body;

  // Validation
  if (!firmName || !personName || !mobileNumber || !cityState) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: firmName, personName, mobileNumber, and cityState are required.'
    });
  }

  const cleanPhone = String(mobileNumber).replace(/\D/g, '');
  if (cleanPhone.length < 10) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid 10-digit mobile number.'
    });
  }

  const leadId = `ST-${Date.now().toString().slice(-6)}`;
  const newLead = {
    id: leadId,
    firmName: String(firmName).trim(),
    personName: String(personName).trim(),
    mobileNumber: cleanPhone.slice(-10),
    cityState: String(cityState).trim(),
    categories: Array.isArray(categories) ? categories : (categories ? [categories] : []),
    message: String(message || '').trim(),
    submittedAt: new Date().toISOString(),
    status: 'NEW'
  };

  // 1. Persist lead to database / leads.json
  const leads = getLeads();
  leads.unshift(newLead);
  saveLeads(leads);

  // 2. Determine base URL for publicly serving brochure
  const host = req.get('host') || `localhost:${PORT}`;
  const protocol = req.protocol === 'https' || req.get('x-forwarded-proto') === 'https' ? 'https' : 'http';
  const serverBaseUrl = process.env.PUBLIC_APP_URL || `${protocol}://${host}`;
  const brochureUrl = `${serverBaseUrl}/brochure.pdf`;

  // 3. Trigger Gmail notification to owner (saveratexsolutionllp@gmail.com)
  let emailResult = { success: false };
  try {
    emailResult = await sendLeadNotificationEmail(newLead);
  } catch (err) {
    console.error('[Inquire: Email Trigger Failed]', err.message);
  }

  // 4. Trigger WhatsApp automation with Brochure PDF to client
  let whatsappResult = { success: false };
  try {
    whatsappResult = await sendWhatsAppBrochureAutomation(newLead, serverBaseUrl);
  } catch (err) {
    console.error('[Inquire: WhatsApp Trigger Failed]', err.message);
  }

  // 5. Generate direct fallback WhatsApp chat URL
  const saveraWhatsApp = process.env.WHATSAPP_NUMBER || '919477665429';
  const catText = newLead.categories.length > 0 ? newLead.categories.join(', ') : 'All Collections';
  const waText = encodeURIComponent(
    `Hello Savera Tex Solution LLP,\n\nI have submitted a sourcing inquiry on your portal (Ref: ${leadId}):\n- Firm: ${newLead.firmName}\n- Contact: ${newLead.personName} (${newLead.mobileNumber})\n- Location: ${newLead.cityState}\n- Product Interest: ${catText}\n\nPlease share your current catalogs and mill rate cards.`
  );
  const whatsappUrl = `https://wa.me/${saveraWhatsApp}?text=${waText}`;

  res.status(201).json({
    success: true,
    message: 'Your sourcing inquiry has been registered successfully. Our representative will contact you within 24 hours.',
    leadId,
    brochureUrl,
    whatsappUrl,
    emailStatus: emailResult.mode || (emailResult.success ? 'SENT' : 'FAILED'),
    whatsappStatus: whatsappResult.mode || (whatsappResult.success ? 'SENT' : 'FAILED')
  });
});

// Get Leads (For internal tracking / dashboard)
app.get('/api/leads', (req, res) => {
  const leads = getLeads();
  res.json({
    success: true,
    count: leads.length,
    leads
  });
});

app.listen(PORT, () => {
  console.log(`Savera Tex Solution API server running on port ${PORT}`);
  console.log(`Brochure available at http://localhost:${PORT}/brochure.pdf`);
});
