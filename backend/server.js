const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

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

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    timestamp: new Date().toISOString()
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
      leads: 'GET /api/leads'
    }
  });
});

// Inquire / Lead Submission Endpoint
app.post('/api/inquire', (req, res) => {
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
    mobileNumber: cleanPhone,
    cityState: String(cityState).trim(),
    categories: Array.isArray(categories) ? categories : (categories ? [categories] : []),
    message: String(message || '').trim(),
    submittedAt: new Date().toISOString(),
    status: 'NEW'
  };

  const leads = getLeads();
  leads.unshift(newLead);
  saveLeads(leads);

  // Generate WhatsApp redirection URL for direct connection
  const catText = newLead.categories.length > 0 ? newLead.categories.join(', ') : 'All Collections';
  const waText = encodeURIComponent(
    `Hello Savera Tex Solution LLP,\n\nI have submitted a sourcing inquiry on your portal (Ref: ${leadId}):\n- Firm: ${newLead.firmName}\n- Contact: ${newLead.personName} (${newLead.mobileNumber})\n- Location: ${newLead.cityState}\n- Product Interest: ${catText}\n\nPlease share your current catalogs and mill rate cards.`
  );
  const whatsappUrl = `https://wa.me/919830504850?text=${waText}`;

  res.status(201).json({
    success: true,
    message: 'Your sourcing inquiry has been registered successfully. Our representative will contact you within 24 hours.',
    leadId,
    whatsappUrl
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
});
