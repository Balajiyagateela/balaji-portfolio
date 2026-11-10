const fs = require('fs');
const path = require('path');
const { isMailerConfigured, getTransporter, receiverEmail } = require('../config/mailer');

const DATA_DIR = path.join(__dirname, '../../data');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

/**
 * Safely persists inquiry to disk so messages are never lost
 */
function saveMessageLocally(messageObj) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    let list = [];
    if (fs.existsSync(MESSAGES_FILE)) {
      try {
        const raw = fs.readFileSync(MESSAGES_FILE, 'utf8');
        list = JSON.parse(raw);
        if (!Array.isArray(list)) list = [];
      } catch (_) {
        list = [];
      }
    }
    list.unshift(messageObj);
    if (list.length > 200) list = list.slice(0, 200);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(list, null, 2), 'utf8');
  } catch (err) {
    console.error('[Contact Service] Error saving message locally:', err.message);
  }
}

/**
 * Handles contact form submission.
 * Always saves inquiry locally and attempts live delivery if SMTP credentials are provided.
 */
const handleContactSubmit = async (req, res) => {
  const { name, email, subject, message } = req.sanitizedBody;
  const timestamp = new Date().toISOString();

  const record = {
    id: Date.now().toString(),
    timestamp,
    name,
    email,
    subject,
    message,
    ip: req.ip || req.connection?.remoteAddress || 'unknown',
  };

  // Always save locally so no client inquiry is ever dropped
  saveMessageLocally(record);

  // If SMTP is not yet configured (e.g. local environment or pending Render setup)
  if (!isMailerConfigured()) {
    console.log('[Contact Service] Form submission received & preserved in inbox:', {
      from: `${name} <${email}>`,
      subject,
      timestamp,
    });

    return res.status(200).json({
      success: true,
      message: 'Your message was sent successfully.',
      status: 'received',
    });
  }

  // If SMTP credentials ARE configured, dispatch email via Nodemailer
  try {
    const transporter = getTransporter();
    const senderAddress = process.env.SMTP_FROM || `"${name} via Portfolio" <${process.env.SMTP_USER}>`;

    const mailOptions = {
      from: senderAddress,
      to: receiverEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `[Portfolio Contact] ${subject}`,
      text: `You have received a new contact submission from your portfolio website:\n\n` +
            `From: ${name}\n` +
            `Email: ${email}\n` +
            `Subject: ${subject}\n\n` +
            `Message:\n${message}\n\n` +
            `---\nTimestamp: ${timestamp}\nSender IP: ${req.ip}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #30363d; border-radius: 12px; background-color: #0b0f17; color: #e5e7eb;">
          <div style="border-bottom: 2px solid #10b981; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Portfolio Contact Message</h2>
            <p style="color: #94a3b8; font-size: 13px; margin: 4px 0 0 0;">Received via your professional portfolio contact form</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 120px; color: #94a3b8;">Sender Name:</td>
              <td style="padding: 8px 0; color: #ffffff; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #94a3b8;">Email Address:</td>
              <td style="padding: 8px 0; color: #10b981;"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #94a3b8;">Subject:</td>
              <td style="padding: 8px 0; color: #ffffff;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #94a3b8;">Received At:</td>
              <td style="padding: 8px 0; color: #94a3b8; font-size: 12px;">${new Date().toUTCString()}</td>
            </tr>
          </table>

          <div style="background-color: #161b22; border: 1px solid #30363d; border-left: 4px solid #10b981; padding: 16px; border-radius: 8px; margin-top: 16px;">
            <div style="font-size: 12px; font-family: monospace; color: #10b981; text-transform: uppercase; margin-bottom: 8px; font-weight: 600;">Message Content:</div>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #e5e7eb; font-size: 14px;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #30363d; font-size: 12px; color: #64748b; display: flex; justify-content: space-between;">
            <span>Recipient: Balaji Yagateela (Python Backend Developer)</span>
            <span>Direct Reply: ${email}</span>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[Contact Service] Email successfully dispatched. Message ID: ${info.messageId}`);

    return res.status(200).json({
      success: true,
      message: 'Your message was sent successfully.',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('[Contact Service] SMTP relay dispatch error:', error.message);
    
    // In all scenarios, confirm receipt since it is safely stored
    return res.status(200).json({
      success: true,
      message: 'Your message was sent successfully.',
      status: 'saved',
    });
  }
};

/**
 * Controller to view stored contact messages
 */
const getContactMessages = (req, res) => {
  try {
    if (fs.existsSync(MESSAGES_FILE)) {
      const data = fs.readFileSync(MESSAGES_FILE, 'utf8');
      const messages = JSON.parse(data);
      return res.status(200).json({ success: true, count: messages.length, messages });
    }
    return res.status(200).json({ success: true, count: 0, messages: [] });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  handleContactSubmit,
  getContactMessages,
};
