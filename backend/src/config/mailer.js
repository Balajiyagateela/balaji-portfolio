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
 * @returns {nodemailer.Transporter | null}
 */
const getTransporter = () => {
  if (!isMailerConfigured()) {
    return null;
  }

  if (!cachedTransporter) {
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;

    cachedTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return cachedTransporter;
};

module.exports = {
  isMailerConfigured,
  getTransporter,
  receiverEmail: process.env.CONTACT_RECEIVER_EMAIL || 'rajbalajiyagateela@gmail.com',
};

