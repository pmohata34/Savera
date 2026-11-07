const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
const pino = require('pino');
const qrcode = require('qrcode');
const path = require('path');
const fs = require('fs');

const AUTH_DIR = path.join(__dirname, '..', 'data', 'baileys_auth');
let sock = null;
let isConnected = false;
let currentQRDataUrl = null;
let currentRawQR = null;
let isInitializing = false;

// Ensure auth dir exists
if (!fs.existsSync(AUTH_DIR)) {
  fs.mkdirSync(AUTH_DIR, { recursive: true });
}

async function initBaileys() {
  if (isInitializing) return;
  isInitializing = true;

  try {
    const { state, saveCreds } = await useMultiFileAuthState(AUTH_DIR);
    const { version } = await fetchLatestBaileysVersion().catch(() => ({ version: [2, 3000, 1015901307] }));

    sock = makeWASocket({
      version,
      auth: state,
      logger: pino({ level: 'silent' }),
      printQRInTerminal: false,
      browser: ['Savera Tex Solution', 'Chrome', '1.0.0']
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        currentRawQR = qr;
        try {
          currentQRDataUrl = await qrcode.toDataURL(qr, { width: 300, margin: 2 });
          console.log('\n[WhatsApp Bridge] New QR Code generated! Open http://localhost:5000/whatsapp-link to scan.');
        } catch (err) {
          console.error('[WhatsApp Bridge] Error generating QR Data URL:', err);
        }
      }

      if (connection === 'close') {
        isConnected = false;
        currentQRDataUrl = null;
        currentRawQR = null;
        const statusCode = lastDisconnect?.error?.output?.statusCode;

        console.log(`[WhatsApp Bridge] Connection closed (status: ${statusCode})`);

        if (statusCode === DisconnectReason.loggedOut) {
          console.log('[WhatsApp Bridge] Logged out. Resetting auth directory for a fresh scan.');
          try {
            fs.rmSync(AUTH_DIR, { recursive: true, force: true });
            fs.mkdirSync(AUTH_DIR, { recursive: true });
          } catch (e) {}
        }

        // Always restart to generate a fresh QR code for the next scan
        setTimeout(() => {
          isInitializing = false;
          initBaileys();
        }, 1500);
      } else if (connection === 'open') {
        isConnected = true;
        currentQRDataUrl = null;
        currentRawQR = null;
        isInitializing = false;
        console.log('\n============================================================');
        console.log('[WhatsApp Bridge: CONNECTED]');
        console.log('WhatsApp linked successfully! Automated brochure delivery is LIVE.');
        console.log('============================================================\n');
      }
    });
  } catch (err) {
    console.error('[WhatsApp Bridge] Init error:', err.message);
    isInitializing = false;
  }
}

function getWhatsAppStatus() {
  return {
    connected: isConnected,
    hasQR: Boolean(currentQRDataUrl),
    qrDataUrl: currentQRDataUrl
  };
}

async function sendWhatsAppDocument(recipientPhone, pdfPath, captionText) {
  if (!isConnected || !sock) {
    return {
      success: false,
      error: 'WhatsApp is not linked. Open http://localhost:5000/whatsapp-link to scan QR code.'
    };
  }

  if (!fs.existsSync(pdfPath)) {
    return {
      success: false,
      error: `Brochure PDF file not found at ${pdfPath}`
    };
  }

  const cleanDigits = String(recipientPhone).replace(/\D/g, '');
  const phone10 = cleanDigits.slice(-10);
  const jid = `91${phone10}@s.whatsapp.net`;

  try {
    console.log(`[WhatsApp Bridge] Sending automated brochure to ${jid}...`);
    const fileBuffer = fs.readFileSync(pdfPath);

    const result = await sock.sendMessage(jid, {
      document: fileBuffer,
      mimetype: 'application/pdf',
      fileName: 'Savera_Tex_Solution_Brochure.pdf',
      caption: captionText
    });

    console.log(`[WhatsApp Bridge: SENT] Successfully delivered brochure to ${jid}. Message ID: ${result?.key?.id}`);
    return {
      success: true,
      messageId: result?.key?.id,
      recipient: jid
    };
  } catch (err) {
    console.error(`[WhatsApp Bridge: ERROR] Failed to send message to ${jid}:`, err.message);
    return {
      success: false,
      error: err.message
    };
  }
}

async function resetWhatsAppSession() {
  isConnected = false;
  currentQRDataUrl = null;
  currentRawQR = null;
  if (sock) {
    try {
      sock.end();
    } catch (e) {}
    sock = null;
  }
  try {
    fs.rmSync(AUTH_DIR, { recursive: true, force: true });
    fs.mkdirSync(AUTH_DIR, { recursive: true });
  } catch (e) {}
  isInitializing = false;
  return initBaileys();
}

module.exports = {
  initBaileys,
  getWhatsAppStatus,
  sendWhatsAppDocument,
  resetWhatsAppSession,
  isBaileysConnected: () => isConnected
};

