const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const { ensureBrochurePDF, getBrochurePath, BROCHURE_PATH } = require('./services/brochure');
const { sendLeadNotificationEmail } = require('./services/email');
const { sendWhatsAppBrochureAutomation, sendAdminWhatsAppLeadAlert } = require('./services/whatsapp');
const { initBaileys, getWhatsAppStatus, isBaileysConnected, resetWhatsAppSession } = require('./services/baileys');

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
const rawCors = process.env.CORS_ORIGIN;
const corsOrigins = rawCors
  ? (rawCors.includes(',') ? rawCors.split(',').map(s => s.trim()) : rawCors)
  : '*';

app.use(cors({
  origin: corsOrigins,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the brochure PDF publicly
app.get([
  '/brochure.pdf',
  '/assets/Savera_Brochure.pdf',
  '/assets/Savera%20Tex%20Solution%20LLP%20Brochure.pdf',
  '/assets/Savera%20Tex%20Solution%20LLP%20Website%20Brochure.pdf',
  '/Savera%20Tex%20Solution%20LLP%20Brochure.pdf',
  '/api/brochure'
], (req, res) => {
  const file = getBrochurePath() || BROCHURE_PATH;
  if (fs.existsSync(file)) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="Savera Tex Solution LLP Brochure.pdf"');
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
    databaseConfigured: Boolean(process.env.DATABASE_URL),
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

// Reset WhatsApp session / generate fresh QR
app.get('/api/whatsapp-reset', async (req, res) => {
  try {
    await resetWhatsAppSession();
  } catch (e) {
    console.error('Reset error:', e);
  }
  res.redirect('/whatsapp-link');
});

// Request 8-digit Pairing Code (no camera / no QR scan needed)
app.all('/api/whatsapp-pairing-code', async (req, res) => {
  try {
    const phone = req.query.phone || req.body?.phone || '9477665429';
    const { getPairingCode } = require('./services/baileys');
    const result = await getPairingCode(phone);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Live Debug Endpoint
app.get('/api/whatsapp-debug', (req, res) => {
  const { getWhatsAppStatus, getLogs } = require('./services/baileys');
  res.json({
    status: getWhatsAppStatus(),
    databaseConfigured: Boolean(process.env.DATABASE_URL),
    logs: getLogs ? getLogs() : []
  });
});

// WhatsApp Link Web Interface (Scan QR or Enter Pairing Code)
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
        * { box-sizing: border-box; }
        body {
          font-family: 'Plus Jakarta Sans', Arial, sans-serif;
          background: #FAF8F5;
          color: #0F1318;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          margin: 0;
          padding: 24px 16px;
        }
        .card {
          background: #ffffff;
          border-radius: 28px;
          box-shadow: 0 20px 50px rgba(241, 103, 1, 0.09);
          border: 1px solid #F8B47D;
          max-width: 520px;
          width: 100%;
          padding: 36px 28px;
          text-align: center;
        }
        .logo {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #F16701;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        h1 {
          font-size: 24px;
          font-weight: 800;
          margin: 0 0 10px 0;
          color: #0F1318;
        }
        p.subtitle {
          font-size: 13.5px;
          color: #4A5568;
          line-height: 1.5;
          margin: 0 0 20px 0;
        }
        .tabs {
          display: flex;
          background: #F4EFEB;
          padding: 4px;
          border-radius: 12px;
          margin-bottom: 24px;
          gap: 4px;
        }
        .tab-btn {
          flex: 1;
          padding: 10px 14px;
          border: none;
          background: transparent;
          font-weight: 700;
          font-size: 13px;
          color: #718096;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .tab-btn.active {
          background: #FFFFFF;
          color: #F16701;
          box-shadow: 0 2px 6px rgba(0,0,0,0.06);
        }
        .tab-content {
          display: none;
        }
        .tab-content.active {
          display: block;
        }
        .qr-box {
          background: #FFF9F3;
          border: 2px dashed #F8B47D;
          border-radius: 20px;
          padding: 20px;
          display: inline-block;
          margin-bottom: 20px;
        }
        .qr-box img {
          display: block;
          width: 250px;
          height: 250px;
          border-radius: 12px;
        }
        .code-display {
          background: #0F1318;
          color: #F16701;
          font-family: monospace;
          font-size: 32px;
          font-weight: 800;
          letter-spacing: 4px;
          padding: 16px 20px;
          border-radius: 14px;
          margin: 16px 0;
          border: 2px solid #F8B47D;
          user-select: all;
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
          max-width: 420px;
          padding-left: 20px;
        }
        .input-group {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }
        .input-group input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #CBD5E0;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          font-family: inherit;
        }
        .btn-primary {
          background: #F16701;
          color: #FFFFFF;
          border: none;
          padding: 12px 20px;
          font-weight: 700;
          font-size: 13px;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-primary:hover {
          background: #D45500;
        }
        .btn-primary:disabled {
          background: #A0AEC0;
          cursor: not-allowed;
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
        <div style="margin-bottom: 16px; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 9999px; display: inline-block; background: ${process.env.DATABASE_URL ? '#ECFDF5' : '#FFFBEB'}; color: ${process.env.DATABASE_URL ? '#047857' : '#B45309'}; border: 1px solid ${process.env.DATABASE_URL ? '#A7F3D0' : '#FDE68A'};">
          ${process.env.DATABASE_URL ? '🔒 Permanent Session: PostgreSQL Active' : '⚠️ Session: Ephemeral Disk (Connect DATABASE_URL in Render to persist)'}
        </div>
        <p class="subtitle">Link WhatsApp account (<strong>+91 94776 65429</strong>) to deliver the official brochure and thank-you message to clients automatically.</p>

        <div id="content">
          ${status.connected ? `
            <div class="connected-badge">
              <div style="font-size: 48px;">✅</div>
              <h2>WhatsApp Connected!</h2>
              <p>Your WhatsApp account is active. When any client submits the inquiry form, they will automatically receive the thank-you message and brochure PDF directly on their phone!</p>
            </div>
          ` : `
            <div class="tabs">
              <button class="tab-btn active" onclick="switchTab('qr')">📷 Option 1: Scan QR</button>
              <button class="tab-btn" onclick="switchTab('code')">🔢 Option 2: Pairing Code (No Camera)</button>
            </div>

            <!-- Tab 1: QR Code -->
            <div id="tab-qr" class="tab-content active">
              ${status.qrDataUrl ? `
                <div class="qr-box">
                  <img src="${status.qrDataUrl}" alt="Scan QR Code to Link WhatsApp">
                </div>
              ` : `
                <div class="qr-box" style="padding: 40px 20px;">
                  <p style="margin: 0; font-weight: 700; color: #F16701;">Initializing WhatsApp Bridge...</p>
                  <p style="margin: 8px 0 0 0; font-size: 12px;">QR code will appear in a moment.</p>
                </div>
              `}
              <ol>
                <li>Open <strong>WhatsApp</strong> on your phone (<strong>+91 9477665429</strong>).</li>
                <li>Tap <strong>Settings</strong> (iOS) or <strong>⋮ Menu</strong> (Android).</li>
                <li>Select <strong>Linked Devices</strong> &rarr; <strong>Link a Device</strong>.</li>
                <li>Point your camera at the QR code above.</li>
              </ol>
            </div>

            <!-- Tab 2: Pairing Code -->
            <div id="tab-code" class="tab-content">
              <p style="font-size: 13px; color: #4A5568; margin-top: 0;">Enter your WhatsApp phone number to generate an 8-character code. Enter it inside WhatsApp to link instantly without needing your camera.</p>
              
              <div class="input-group">
                <input type="text" id="phoneInput" value="9477665429" placeholder="Enter 10-digit phone number">
                <button class="btn-primary" id="btnGetCode" onclick="fetchPairingCode()">Get Code</button>
              </div>

              <div id="pairingCodeResult" style="display: none;">
                <div style="font-size: 12px; font-weight: 700; color: #4A5568; text-transform: uppercase; letter-spacing: 1px;">Your 8-Digit Pairing Code:</div>
                <div class="code-display" id="codeDisplay">----</div>
                <ol>
                  <li>Open <strong>WhatsApp</strong> on your phone.</li>
                  <li>Go to <strong>Linked Devices</strong> &rarr; <strong>Link a Device</strong>.</li>
                  <li>Tap <strong>"Link with phone number instead"</strong> at the bottom.</li>
                  <li>Type the 8-digit code shown above.</li>
                </ol>
              </div>
              <div id="pairingError" style="display: none; color: #DC2626; font-size: 13px; font-weight: 600; margin-top: 12px;"></div>
            </div>
          `}
        </div>

        <div style="margin-top: 20px;">
          <a href="/api/whatsapp-reset" style="display: inline-block; padding: 8px 18px; border-radius: 9999px; background: #FFF3E8; color: #F16701; border: 1px solid #F8B47D; font-size: 11px; font-weight: 700; text-decoration: none; transition: background 0.2s;">
            🔄 Refresh / Reset Session
          </a>
        </div>

        <div class="footer-note">
          Automatic status sync active • <a href="/" style="color: #F16701; text-decoration: none; font-weight: 700;">Back to Portal</a> • <a href="/api/whatsapp-debug" target="_blank" style="color: #718096; text-decoration: none;">View Logs</a>
        </div>
      </div>

      <script>
        function switchTab(tab) {
          document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
          if (tab === 'qr') {
            document.querySelectorAll('.tab-btn')[0].classList.add('active');
            document.getElementById('tab-qr').classList.add('active');
          } else {
            document.querySelectorAll('.tab-btn')[1].classList.add('active');
            document.getElementById('tab-code').classList.add('active');
          }
        }

        async function fetchPairingCode() {
          const btn = document.getElementById('btnGetCode');
          const phoneInput = document.getElementById('phoneInput');
          const resultBox = document.getElementById('pairingCodeResult');
          const codeDisplay = document.getElementById('codeDisplay');
          const errBox = document.getElementById('pairingError');

          btn.disabled = true;
          btn.innerText = 'Generating...';
          errBox.style.display = 'none';

          try {
            const res = await fetch('/api/whatsapp-pairing-code?phone=' + encodeURIComponent(phoneInput.value.trim()));
            const data = await res.json();
            if (data.success && data.formatted) {
              codeDisplay.innerText = data.formatted;
              resultBox.style.display = 'block';
            } else {
              errBox.innerText = data.error || 'Failed to generate code. Please try refreshing.';
              errBox.style.display = 'block';
            }
          } catch (e) {
            errBox.innerText = 'Network error: ' + e.message;
            errBox.style.display = 'block';
          } finally {
            btn.disabled = false;
            btn.innerText = 'Get Code';
          }
        }

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
              }
            }
          } catch (e) {}
        }, 2500);
      </script>
    </body>
    </html>
  `);
});
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

  // 4b. Trigger WhatsApp Lead Alert to Owner
  try {
    await sendAdminWhatsAppLeadAlert(newLead);
  } catch (err) {
    console.error('[Inquire: Admin WhatsApp Alert Failed]', err.message);
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
