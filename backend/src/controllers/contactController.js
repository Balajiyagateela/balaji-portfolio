const { isMailerConfigured, getTransporter, receiverEmail } = require('../config/mailer');

/**
 * Handles contact form submission.
 * Validates configuration, constructs email, and delivers via SMTP.
 */
const handleContactSubmit = async (req, res) => {
  const { name, email, subject, message } = req.sanitizedBody;

  // 1. Check if SMTP configuration is available
  if (!isMailerConfigured()) {
    // Log server-side warning without leaking credentials
    console.warn('[Contact Service] SMTP credentials not configured in server environment. Rejecting mail dispatch.');
    
    return res.status(503).json({
      success: false,
      code: 'SERVICE_UNAVAILABLE',
      error: 'Contact service is temporarily unavailable.',
      message: 'Thank you for reaching out. The contact form is temporarily unavailable. Please contact me directly using the email address below.',
      directEmail: receiverEmail,
    });
  }

  // 2. Deliver message via Nodemailer
  try {
    const transporter = getTransporter();

    const mailOptions = {
      from: `"${name} (Portfolio Inquiry)" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `[Portfolio Inquiry] ${subject}`,
      text: `You have received a new contact submission from your portfolio website:\n\n` +
            `From: ${name}\n` +
            `Email: ${email}\n` +
            `Subject: ${subject}\n\n` +
            `Message:\n${message}\n\n` +
            `---\nTimestamp: ${new Date().toISOString()}\nSender IP: ${req.ip}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff; color: #1e293b;">
          <h2 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #10b981; padding-bottom: 12px;">New Portfolio Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 120px; color: #64748b;">Sender:</td>
              <td style="padding: 8px 0; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Email:</td>
              <td style="padding: 8px 0; color: #10b981;"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Subject:</td>
              <td style="padding: 8px 0; color: #0f172a;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Time:</td>
              <td style="padding: 8px 0; color: #64748b;">${new Date().toUTCString()}</td>
            </tr>
          </table>
          <div style="background-color: #f8fafc; border-left: 4px solid #10b981; padding: 16px; border-radius: 4px; margin-top: 12px;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #334155;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px;">
            This email was sent via the Portfolio contact form for Balaji Yagateela (Python Backend Developer).
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been sent successfully.',
      messageId: info.messageId,
    });
  } catch (error) {
    // Log error message server-side only without credentials
    console.error('[Contact Service] SMTP relay dispatch error:', error.message);
    
    return res.status(502).json({
      success: false,
      code: 'SERVICE_UNAVAILABLE',
      error: 'Message delivery temporarily unavailable.',
      message: 'Thank you for reaching out. The contact form is temporarily unavailable. Please contact me directly using the email address below.',
      directEmail: receiverEmail,
    });
  }
};

module.exports = {
  handleContactSubmit,
};
