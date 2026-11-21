const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, Browsers } = require('@whiskeysockets/baileys');
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
let authClearFunc = null;

const connectionLogs = [];
function logEvent(msg, extra = null) {
  const entry = { time: new Date().toISOString(), msg, extra: extra ? String(extra) : null };
  connectionLogs.unshift(entry);
  if (connectionLogs.length > 50) connectionLogs.pop();
  console.log(`[WhatsApp Bridge] ${msg}`, extra || '');
}

// Ensure auth dir exists
if (!fs.existsSync(AUTH_DIR)) {
  fs.mkdirSync(AUTH_DIR, { recursive: true });
}

async function initBaileys() {
  if (isInitializing) return;
  isInitializing = true;

  if (sock) {
    try {
      sock.ev.removeAllListeners();
      sock.end();
    } catch (e) {}
    sock = null;
  }

  try {
    let state, saveCreds;

    if (process.env.DATABASE_URL) {
      logEvent('Initializing PostgreSQL PERSISTENT session storage...');
      try {
        const { usePostgresAuthState } = require('./pgAuthState');
        const pgAuth = await usePostgresAuthState(process.env.DATABASE_URL);
        state = pgAuth.state;
        saveCreds = pgAuth.saveCreds;
        authClearFunc = pgAuth.clearAllData;
        logEvent('PostgreSQL session storage ready.');
      } catch (pgErr) {
        logEvent('Failed to connect to PostgreSQL, falling back to local files', pgErr.message);
        const localAuth = await useMultiFileAuthState(AUTH_DIR);
        state = localAuth.state;
        saveCreds = localAuth.saveCreds;
      }
    } else {
      logEvent('Using local file system for session storage.');
      const localAuth = await useMultiFileAuthState(AUTH_DIR);
      state = localAuth.state;
      saveCreds = localAuth.saveCreds;
    }

    const { version } = await fetchLatestBaileysVersion().catch(() => ({ version: [2, 3000, 1015901307] }));

    sock = makeWASocket({
      version,
      auth: state,
      logger: pino({ level: 'silent' }),
      printQRInTerminal: false,
      browser: Browsers.ubuntu('Chrome'),
      connectTimeoutMs: 60000,
      defaultQueryTimeoutMs: 60000,
      keepAliveIntervalMs: 15000,
      emitOwnEvents: true,
      retryRequestDelayMs: 250
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        currentRawQR = qr;
        try {
          currentQRDataUrl = await qrcode.toDataURL(qr, { width: 300, margin: 2 });
          logEvent('New QR Code generated for scanning.');
        } catch (err) {
          logEvent('Error generating QR Data URL', err.message);
        }
      }

      if (connection === 'close') {
        isConnected = false;
        currentQRDataUrl = null;
        currentRawQR = null;
        const statusCode = lastDisconnect?.error?.output?.statusCode;
        const errMsg = lastDisconnect?.error?.message || String(lastDisconnect?.error || '');

        logEvent(`Connection closed (status: ${statusCode})`, errMsg);

        if (statusCode === DisconnectReason.loggedOut) {
          logEvent('Logged out by user. Resetting session credentials.');
          if (authClearFunc) {
            try { await authClearFunc(); } catch (e) {}
          }
          try {
            fs.rmSync(AUTH_DIR, { recursive: true, force: true });
            fs.mkdirSync(AUTH_DIR, { recursive: true });
          } catch (e) {}
        }

        // Reconnect after brief pause
        const delay = statusCode === DisconnectReason.restartRequired ? 500 : 2000;
        setTimeout(() => {
          isInitializing = false;
          initBaileys();
        }, delay);
      } else if (connection === 'open') {
        isConnected = true;
        currentQRDataUrl = null;
        currentRawQR = null;
        isInitializing = false;
        logEvent('CONNECTED! WhatsApp linked successfully! Automated brochure delivery is LIVE.');
      }
    });
  } catch (err) {
    logEvent('Init error', err.message);
    isInitializing = false;
  }
}

async function getPairingCode(phoneNumber) {
  if (!sock) {
    throw new Error('WhatsApp service initializing. Please wait a few seconds and try again.');
  }
  if (isConnected) {
    throw new Error('WhatsApp is already linked and connected.');
  }

  const cleanDigits = String(phoneNumber).replace(/\D/g, '');
  const phone10 = cleanDigits.slice(-10);
  const phoneNum = `91${phone10}`;

  logEvent(`Requesting pairing code for ${phoneNum}...`);
  try {
    const rawCode = await sock.requestPairingCode(phoneNum);
    const formatted = rawCode?.match(/.{1,4}/g)?.join('-') || rawCode;
    logEvent(`Pairing code received successfully: ${formatted}`);
    return {
      raw: rawCode,
      formatted,
      phone: phoneNum
    };
  } catch (err) {
    logEvent(`Pairing code error: ${err.message}`);
    throw err;
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
      fileName: 'Savera Tex Solution LLP Brochure.pdf',
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

async function sendWhatsAppText(recipientPhone, messageText) {
  if (!isConnected || !sock) {
    return {
      success: false,
      error: 'WhatsApp is not linked.'
    };
  }

  const cleanDigits = String(recipientPhone).replace(/\D/g, '');
  const phone10 = cleanDigits.slice(-10);
  const jid = `91${phone10}@s.whatsapp.net`;

  try {
    console.log(`[WhatsApp Bridge] Sending automated text alert to ${jid}...`);
    const result = await sock.sendMessage(jid, { text: messageText });
    console.log(`[WhatsApp Bridge: SENT] Successfully delivered text alert to ${jid}. Message ID: ${result?.key?.id}`);
    return {
      success: true,
      messageId: result?.key?.id,
      recipient: jid
    };
  } catch (err) {
    console.error(`[WhatsApp Bridge: ERROR] Failed to send text message to ${jid}:`, err.message);
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
  if (authClearFunc) {
    try { await authClearFunc(); } catch (e) {}
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
  getPairingCode,
  getLogs: () => connectionLogs,
  sendWhatsAppDocument,
  sendWhatsAppText,
  resetWhatsAppSession,
  isBaileysConnected: () => isConnected
};

