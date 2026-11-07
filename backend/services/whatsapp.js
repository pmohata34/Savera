const path = require('path');
const fs = require('fs');

/**
 * Sends an automated WhatsApp Thank You message with the Brochure PDF to the client's number.
 * Supports:
 * 1. Meta WhatsApp Cloud API (Official WhatsApp Business API)
 * 2. Twilio WhatsApp API
 * 3. Custom Webhook / Provider (WATI, Gupshup, UltraMsg, GreenAPI)
 * 4. Simulation Mode (Logs payload and provides prefilled direct WhatsApp URL)
 */
async function sendWhatsAppBrochureAutomation(lead, serverBaseUrl = 'http://localhost:5000') {
  const brochureUrl = `${serverBaseUrl}/brochure.pdf`;
  const cleanPhone = String(lead.mobileNumber).replace(/\D/g, '');
  const recipientNumber = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;

  // Exact user-provided Thank You message
  const thankYouText = 
`Hello! Thank you for connecting with Savera Tex Solution LLP.
We have received your business enquiry and appreciate your interest in our textile trade services.
Our team will review your requirements and get in touch with you shortly.

Regards,
Savera Tex Solution LLP`;

  const messageWithLink = 
`Hello! Thank you for connecting with Savera Tex Solution LLP.
We have received your business enquiry and appreciate your interest in our textile trade services.
Our team will review your requirements and get in touch with you shortly.

📄 View / Download Company Brochure:
${brochureUrl}

Regards,
Savera Tex Solution LLP`;

  // ── Provider 0: Linked WhatsApp Device (Baileys session) ──
  try {
    const { isBaileysConnected, sendWhatsAppDocument } = require('./baileys');
    const { getBrochurePath, BROCHURE_PATH } = require('./brochure');

    if (isBaileysConnected()) {
      const brochurePath = getBrochurePath() || BROCHURE_PATH;
      const baileysResult = await sendWhatsAppDocument(recipientNumber, brochurePath, thankYouText);
      if (baileysResult.success) {
        console.log(`[WhatsApp Automation: SENT] Message + PDF successfully sent to ${recipientNumber} via Linked Device!`);
        return { success: true, provider: 'WHATSAPP_LINKED_DEVICE', data: baileysResult, brochureUrl };
      }
    }
  } catch (baileysErr) {
    console.error('[WhatsApp Automation: BAILEYS ERROR]', baileysErr.message);
  }

  // ── Provider 1: Meta WhatsApp Cloud API ──
  const cloudToken = process.env.WHATSAPP_CLOUD_API_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (cloudToken && phoneNumberId) {
    try {
      console.log(`[WhatsApp Automation: CLOUD API] Dispatching message with brochure PDF to +${recipientNumber}...`);

      // 1. Attempt sending document message with PDF attachment
      let response = await fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${cloudToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: recipientNumber,
          type: 'document',
          document: {
            link: brochureUrl,
            caption: thankYouText,
            filename: 'Savera_Tex_Solution_Brochure.pdf'
          }
        })
      });

      let data = await response.json();

      // Fallback: If Meta cannot download media (e.g. testing on localhost), send direct text message
      if (!response.ok && (data.error?.code === 100 || data.error?.message?.toLowerCase().includes('media') || data.error?.message?.toLowerCase().includes('url'))) {
        console.warn('[WhatsApp Automation: CLOUD API] Media URL unreachable by Meta (likely localhost). Falling back to direct text message...');
        response = await fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${cloudToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: recipientNumber,
            type: 'text',
            text: {
              preview_url: true,
              body: `${thankYouText}\n\n📄 Official Brochure: ${brochureUrl}`
            }
          })
        });
        data = await response.json();
      }

      if (response.ok) {
        console.log(`[WhatsApp Automation: SENT] Message successfully delivered via Meta Cloud API. Message ID:`, data.messages?.[0]?.id);
        return { success: true, provider: 'META_CLOUD_API', data, brochureUrl };
      } else {
        console.error('[WhatsApp Automation: META ERROR]', JSON.stringify(data, null, 2));
      }
    } catch (err) {
      console.error('[WhatsApp Automation: META EXCEPTION]', err.message);
    }
  }

  // ── Provider 2: Twilio WhatsApp API ──
  const twilioSid = process.env.TWILIO_ACCOUNT_SID;
  const twilioToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886';

  if (twilioSid && twilioToken) {
    try {
      console.log(`[WhatsApp Automation: TWILIO] Dispatching message with brochure PDF to whatsapp:+${recipientNumber}...`);
      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`;
      const params = new URLSearchParams();
      params.append('From', twilioFrom.startsWith('whatsapp:') ? twilioFrom : `whatsapp:${twilioFrom}`);
      params.append('To', `whatsapp:+${recipientNumber}`);
      params.append('Body', thankYouText);
      params.append('MediaUrl', brochureUrl);

      const response = await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      });

      const data = await response.json();
      if (response.ok) {
        console.log(`[WhatsApp Automation: SENT] Message successfully delivered via Twilio. SID:`, data.sid);
        return { success: true, provider: 'TWILIO', sid: data.sid, brochureUrl };
      } else {
        console.error('[WhatsApp Automation: TWILIO ERROR]', data);
      }
    } catch (err) {
      console.error('[WhatsApp Automation: TWILIO EXCEPTION]', err.message);
    }
  }

  // ── Provider 3: Custom Webhook (WATI / Gupshup / UltraMsg / GreenAPI) ──
  const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      console.log(`[WhatsApp Automation: WEBHOOK] Posting to ${webhookUrl}...`);
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient: recipientNumber,
          message: thankYouText,
          brochureUrl,
          lead
        })
      });
      const data = await response.json().catch(() => ({}));
      console.log(`[WhatsApp Automation: SENT] Webhook responded with status ${response.status}`);
      return { success: true, provider: 'WEBHOOK', data, brochureUrl };
    } catch (err) {
      console.error('[WhatsApp Automation: WEBHOOK ERROR]', err.message);
    }
  }

  // ── Fallback: Local Simulation & Click-to-Chat URL ──
  const clientDirectWhatsAppUrl = `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(messageWithLink)}`;

  console.log('\n============================================================');
  console.log('[WhatsApp Automation: SIMULATED MODE]');
  console.log(`To Client Number: +${recipientNumber} (${lead.personName})`);
  console.log(`Brochure URL: ${brochureUrl}`);
  console.log(`Message Preview:\n${thankYouText}`);
  console.log('Notice: Configure WHATSAPP_CLOUD_API_TOKEN, TWILIO_ACCOUNT_SID, or WHATSAPP_WEBHOOK_URL in backend/.env for autonomous background delivery.');
  console.log('============================================================\n');

  return {
    success: true,
    mode: 'SIMULATED',
    brochureUrl,
    clientDirectWhatsAppUrl,
    message: 'WhatsApp automation prepared (running in simulation mode until WhatsApp provider credentials are set in .env).'
  };
}

module.exports = {
  sendWhatsAppBrochureAutomation
};

