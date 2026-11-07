const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const { ensureBrochurePDF, getBrochurePath, BROCHURE_PATH } = require('./services/brochure');
const { sendLeadNotificationEmail } = require('./services/email');
const { sendWhatsAppBrochureAutomation } = require('./services/whatsapp');
const { initBaileys, getWhatsAppStatus, isBaileysConnected } = require('./services/baileys');

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

// Start WhatsApp Linked Device bridge
initBaileys().catch(err => console.error('[Baileys] Init error:', err));

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
    whatsappLinked: isBaileysConnected(),
    whatsappAutomated: Boolean(isBaileysConnected() || process.env.WHATSAPP_CLOUD_API_TOKEN || process.env.TWILIO_ACCOUNT_SID || process.env.WHATSAPP_WEBHOOK_URL)
  });
});

// Live WhatsApp Status API
app.get('/api/whatsapp-status', (req, res) => {
  res.json(getWhatsAppStatus());
});

// Test WhatsApp Dispatch to specified phone number (e.g. /api/test-whatsapp?phone=9007385793)
app.get('/api/test-whatsapp', async (req, res) => {
  const phone = req.query.phone || '9007385793';
  const testLead = {
    id: `TEST-${Date.now().toString().slice(-4)}`,
    firmName: 'Savera Live Test',
    personName: 'Test Client',
    mobileNumber: phone,
    cityState: 'Kolkata, West Bengal',
    categories: ['Sarees (Cotton, Silk, Designer & Partywear)'],
    message: 'Testing automated brochure delivery'
  };
  const host = req.get('host') || `localhost:${PORT}`;
  const protocol = req.protocol === 'https' || req.get('x-forwarded-proto') === 'https' ? 'https' : 'http';
  const serverBaseUrl = process.env.PUBLIC_APP_URL || `${protocol}://${host}`;

  const result = await sendWhatsAppBrochureAutomation(testLead, serverBaseUrl);
  res.json({
    phone,
    isLinked: isBaileysConnected(),
    result
  });
});

// WhatsApp Link Web Interface (Scan QR to link +91 9477665429)
app.get(['/whatsapp-link', '/whatsapp-qr'], (req, res) => {
  const status = getWhatsAppStatus();
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Link WhatsApp — Savera Tex Solution LLP</title>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Plus Jakarta Sans', Arial, sans-serif;
          background: #FAF8F5;
          color: #0F1318;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          margin: 0;
          padding: 20px;
          box-sizing: border-box;
        }
        .card {
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(241, 103, 1, 0.08);
          border: 1px solid #F8B47D;
          max-width: 480px;
          width: 100%;
          padding: 36px 32px;
          text-align: center;
        }
        .logo {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #F16701;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        h1 {
          font-size: 24px;
          font-weight: 800;
          margin: 0 0 12px 0;
        }
        p {
          font-size: 14px;
          color: #4A5568;
          line-height: 1.6;
          margin: 0 0 24px 0;
        }
        .qr-box {
          background: #FFF9F3;
          border: 2px dashed #F8B47D;
          border-radius: 20px;
          padding: 24px;
          display: inline-block;
          margin-bottom: 24px;
        }
        .qr-box img {
          display: block;
          width: 260px;
          height: 260px;
          border-radius: 12px;
        }
        .connected-badge {
          background: #ECFDF5;
          border: 2px solid #10B981;
          border-radius: 20px;
          padding: 32px 24px;
          margin-bottom: 24px;
        }
        .connected-badge h2 {
          color: #065F46;
          margin: 12px 0 6px 0;
          font-size: 20px;
          font-weight: 800;
        }
        .connected-badge p {
          color: #047857;
          font-size: 13px;
          margin: 0;
        }
        ol {
          text-align: left;
          font-size: 13px;
          color: #2D3748;
          line-height: 1.8;
          margin: 0 auto;
          max-width: 380px;
          padding-left: 20px;
        }
        .footer-note {
          margin-top: 24px;
          font-size: 12px;
          color: #718096;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="logo">Savera Tex Solution LLP</div>
        <h1>Automated WhatsApp Delivery</h1>
        <p>Link your WhatsApp account (<strong>+91 9477665429</strong>) so clients automatically receive the Thank You message and official 12-page PDF brochure on their phone upon submitting the website form.</p>

        <div id="content">
          ${status.connected ? `
            <div class="connected-badge">
              <div style="font-size: 48px;">✅</div>
              <h2>WhatsApp Connected!</h2>
              <p>Your WhatsApp account is active. When any client submits the inquiry form, they will automatically receive the thank-you message and brochure PDF directly on their phone!</p>
            </div>
          ` : status.qrDataUrl ? `
            <div class="qr-box">
              <img src="${status.qrDataUrl}" alt="Scan QR Code to Link WhatsApp">
            </div>
            <ol>
              <li>Open <strong>WhatsApp</strong> on your phone (<strong>+91 9477665429</strong>).</li>
              <li>Tap <strong>Settings</strong> (iOS) or <strong>⋮ Menu</strong> (Android).</li>
              <li>Select <strong>Linked Devices</strong> &rarr; <strong>Link a Device</strong>.</li>
              <li>Scan the QR code above.</li>
            </ol>
          ` : `
            <div class="qr-box" style="padding: 40px 20px;">
              <p style="margin: 0; font-weight: 700; color: #F16701;">Initializing WhatsApp Bridge...</p>
              <p style="margin: 8px 0 0 0; font-size: 12px;">The QR code will appear in a moment.</p>
            </div>
          `}
        </div>

        <div class="footer-note">
          Automatic refresh active • <a href="/" style="color: #F16701; text-decoration: none; font-weight: 700;">Back to Portal</a>
        </div>
      </div>

      <script>
        setInterval(async () => {
          try {
            const res = await fetch('/api/whatsapp-status');
            const data = await res.json();
            if (data.connected && !document.querySelector('.connected-badge')) {
              window.location.reload();
            } else if (!data.connected && data.qrDataUrl) {
              const img = document.querySelector('.qr-box img');
              if (img && img.src !== data.qrDataUrl) {
                img.src = data.qrDataUrl;
              } else if (!img) {
                window.location.reload();
              }
            }
          } catch (e) {}
        }, 2500);
      </script>
    </body>
    </html>
  `);
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
