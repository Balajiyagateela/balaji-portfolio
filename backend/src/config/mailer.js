const nodemailer = require('nodemailer');

/**
 * Checks whether SMTP environment variables are properly provided.
 * @returns {boolean}
 */
const isMailerConfigured = () => {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  return Boolean(
    host &&
    user &&
    pass &&
    !host.includes('your_smtp_host') &&
    !user.includes('your_email') &&
    !pass.includes('your_app_password')
  );
};

let cachedTransporter = null;

/**
 * Creates or returns the cached Nodemailer transporter instance.
 * Optimized for Gmail SMTP with STARTTLS and App Passwords.
 * @returns {nodemailer.Transporter | null}
 */
const getTransporter = () => {
  if (!isMailerConfigured()) {
    return null;
  }

  if (!cachedTransporter) {
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;

    // Clean Gmail App Password by stripping whitespace/spaces commonly copied from Google Account
    const cleanUser = (process.env.SMTP_USER || '').trim();
    const cleanPass = (process.env.SMTP_PASS || '').trim().replace(/\s+/g, '');

    const transportConfig = {
      host,
      port,
      secure,
      auth: {
        user: cleanUser,
        pass: cleanPass,
      },
      tls: {
        // Required for cloud container environments like Render to avoid self-signed or proxy TLS issues
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000, // 10 second connection timeout
      greetingTimeout: 10000,   // 10 second handshake timeout
      socketTimeout: 15000,     // 15 second socket timeout
    };

    // If host is explicitly Gmail, utilize nodemailer's built-in gmail service defaults
    if (host.includes('gmail.com')) {
      transportConfig.service = 'gmail';
    }

    cachedTransporter = nodemailer.createTransport(transportConfig);
  }

  return cachedTransporter;
};

/**
 * Safely verify SMTP connection and authentication without leaking credentials
 * @returns {Promise<{ ok: boolean, message: string }>}
 */
const verifySmtpConnection = async () => {
  if (!isMailerConfigured()) {
    return {
      ok: false,
      message: 'SMTP credentials (SMTP_HOST, SMTP_USER, SMTP_PASS) are not configured in environment variables.',
    };
  }

  try {
    const transporter = getTransporter();
    await transporter.verify();
    return {
      ok: true,
      message: 'SMTP connection and authentication verified successfully with mail server.',
    };
  } catch (error) {
    let cleanMsg = error.message;
    if (error.code === 'EAUTH' || error.responseCode === 535) {
      cleanMsg = 'Authentication failed (535): Invalid SMTP_USER or Gmail App Password.';
    } else if (error.code === 'ESOCKET' || error.code === 'ETIMEDOUT') {
      cleanMsg = 'Connection timed out while reaching SMTP server.';
    }
    return {
      ok: false,
      message: cleanMsg,
      code: error.code || 'UNKNOWN',
    };
  }
};

module.exports = {
  isMailerConfigured,
  getTransporter,
  verifySmtpConnection,
  receiverEmail: process.env.CONTACT_RECEIVER_EMAIL || 'yagateelabalaji@gmail.com',
};
