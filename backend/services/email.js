const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const { getBrochurePath } = require('./brochure');

/**
 * Sends an email notification to the company's Gmail whenever a new lead is submitted.
 * Uses Nodemailer with Gmail SMTP.
 */
async function sendLeadNotificationEmail(lead) {
  const gmailUser = process.env.GMAIL_USER || 'saveratexsolutionllp@gmail.com';
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const receiverEmail = process.env.NOTIFICATION_RECEIVER || 'saveratexsolutionllp@gmail.com';

  const catList = lead.categories && lead.categories.length > 0
    ? lead.categories.map(c => `<li style="margin-bottom: 4px; color: #0F1318; font-weight: 600;">• ${c}</li>`).join('')
    : '<li style="color: #718096;">General Inquiry / All Collections</li>';

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Sourcing Inquiry</title>
    </head>
    <body style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; background-color: #FAF8F5; margin: 0; padding: 24px; color: #0F1318;">
      <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #FBD7B4; box-shadow: 0 10px 25px rgba(241, 103, 1, 0.08);">
        <!-- Header -->
        <tr>
          <td style="background: linear-gradient(135deg, #F16701 0%, #F48129 50%, #F79A52 100%); padding: 28px 32px; color: #ffffff;">
            <p style="margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; color: #FFE2CC;">SAVERA TEX SOLUTION LLP • PORTAL INQUIRY</p>
            <h1 style="margin: 6px 0 0 0; font-size: 22px; font-weight: 800;">⚡ New Client Sourcing Inquiry</h1>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #FFF0E5;">Reference ID: <strong>${lead.id}</strong></p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding: 32px;">
            <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.5; color: #4A5568;">
              A potential client has just submitted a sourcing inquiry on your web portal. Here are their verified contact and business details:
            </p>

            <!-- Details Card -->
            <table width="100%" cellpadding="10" cellspacing="0" style="background: #FFF9F3; border: 1px solid #F8B47D; border-radius: 12px; margin-bottom: 24px;">
              <tr>
                <td width="38%" style="font-size: 12px; font-weight: 700; color: #F16701; text-transform: uppercase;">Firm / Company:</td>
                <td style="font-size: 14px; font-weight: 800; color: #0F1318;">${lead.firmName}</td>
              </tr>
              <tr>
                <td style="font-size: 12px; font-weight: 700; color: #F16701; text-transform: uppercase;">Contact Person:</td>
                <td style="font-size: 14px; font-weight: 700; color: #0F1318;">${lead.personName}</td>
              </tr>
              <tr>
                <td style="font-size: 12px; font-weight: 700; color: #F16701; text-transform: uppercase;">Mobile / WhatsApp:</td>
                <td style="font-size: 14px; font-weight: 800; color: #0F1318;">
                  <a href="tel:+91${lead.mobileNumber}" style="color: #0F1318; text-decoration: none;">+91 ${lead.mobileNumber}</a>
                  &nbsp;•&nbsp;
                  <a href="https://wa.me/91${lead.mobileNumber}?text=Hello%20${encodeURIComponent(lead.personName)},%20thank%20you%20for%20contacting%20Savera%20Tex%20Solution%20LLP." target="_blank" style="color: #25D366; font-weight: 700; text-decoration: none;">[Chat on WhatsApp]</a>
                </td>
              </tr>
              <tr>
                <td style="font-size: 12px; font-weight: 700; color: #F16701; text-transform: uppercase;">City & State:</td>
                <td style="font-size: 13px; font-weight: 600; color: #0F1318;">${lead.cityState}</td>
              </tr>
              <tr>
                <td style="font-size: 12px; font-weight: 700; color: #F16701; text-transform: uppercase; vertical-align: top;">Product Categories:</td>
                <td style="font-size: 13px;">
                  <ul style="margin: 0; padding-left: 16px;">
                    ${catList}
                  </ul>
                </td>
              </tr>
              <tr>
                <td style="font-size: 12px; font-weight: 700; color: #F16701; text-transform: uppercase; vertical-align: top;">Requirements / Message:</td>
                <td style="font-size: 13px; color: #2D3748; line-height: 1.5; font-style: italic;">
                  "${lead.message || 'No additional message provided.'}"
                </td>
              </tr>
              <tr>
                <td style="font-size: 12px; font-weight: 700; color: #718096; text-transform: uppercase;">Submitted At:</td>
                <td style="font-size: 12px; color: #718096;">${new Date(lead.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td>
              </tr>
            </table>

            <!-- Quick Action Buttons -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center" style="padding-top: 10px;">
                  <a href="https://wa.me/91${lead.mobileNumber}?text=Hello%20${encodeURIComponent(lead.personName)},%20we%20received%20your%20sourcing%20inquiry%20(Ref:%20${lead.id})%20at%20Savera%20Tex%20Solution%20LLP." target="_blank" style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; margin-right: 8px;">
                    💬 Open WhatsApp Chat
                  </a>
                  <a href="tel:+91${lead.mobileNumber}" style="display: inline-block; background: #F16701; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">
                    📞 Call Client
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background: #FAF8F5; padding: 18px 32px; border-top: 1px solid #FBD7B4; text-align: center; font-size: 11px; color: #718096;">
            Savera Tex Solution LLP • 1/C Burman Street, 3rd Floor, Room No. 312, Kolkata - 700007<br/>
            Automated lead notification engine.
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  // Check if live credentials exist
  if (!gmailAppPassword) {
    console.log('\n============================================================');
    console.log('[Email Notification: SIMULATED MODE]');
    console.log(`To: ${receiverEmail}`);
    console.log(`Subject: ⚡ New Sourcing Inquiry: ${lead.firmName} (${lead.cityState}) — Ref: ${lead.id}`);
    console.log(`Client: ${lead.personName} (+91 ${lead.mobileNumber})`);
    console.log(`Notice: To receive live Gmails, configure GMAIL_APP_PASSWORD in backend/.env`);
    console.log('============================================================\n');

    return {
      success: true,
      mode: 'SIMULATED',
      message: 'Email notification prepared (running in simulation mode until GMAIL_APP_PASSWORD is set in .env).'
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword
      }
    });

    const attachments = [];
    const brochurePath = getBrochurePath();
    if (brochurePath && fs.existsSync(brochurePath)) {
      attachments.push({
        filename: 'Savera_Tex_Solution_Brochure.pdf',
        path: brochurePath
      });
    }

    const info = await transporter.sendMail({
      from: `"Savera Sourcing Portal" <${gmailUser}>`,
      to: receiverEmail,
      subject: `⚡ New Sourcing Inquiry: ${lead.firmName} (${lead.cityState}) — Ref: ${lead.id}`,
      html: htmlContent,
      attachments
    });

    console.log(`[Email Notification: SENT] Successfully delivered to ${receiverEmail}. MessageId: ${info.messageId}`);
    return {
      success: true,
      mode: 'LIVE',
      messageId: info.messageId
    };
  } catch (err) {
    console.error('[Email Notification: ERROR] Failed to send email via Gmail SMTP:', err.message);
    return {
      success: false,
      error: err.message
    };
  }
}

module.exports = {
  sendLeadNotificationEmail
};

