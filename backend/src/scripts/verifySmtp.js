/**
 * Safe SMTP Diagnostics and Connection Verification Script
 * Usage: node src/scripts/verifySmtp.js
 */

const dotenv = require('dotenv');
dotenv.config();

const { isMailerConfigured, verifySmtpConnection, receiverEmail } = require('../config/mailer');

async function runDiagnostics() {
  console.log('=====================================================');
  console.log('  SMTP Configuration Diagnostics - Balaji Portfolio  ');
  console.log('=====================================================\n');

  console.log('Environment Settings:');
  console.log(`- SMTP_HOST:             ${process.env.SMTP_HOST || '(not set - defaults to smtp.gmail.com)'}`);
  console.log(`- SMTP_PORT:             ${process.env.SMTP_PORT || '587'}`);
  console.log(`- SMTP_SECURE:           ${process.env.SMTP_SECURE || 'false'}`);
  console.log(`- SMTP_USER:             ${process.env.SMTP_USER ? maskEmail(process.env.SMTP_USER) : '(not set)'}`);
  console.log(`- SMTP_PASS:             ${process.env.SMTP_PASS ? '******** (' + process.env.SMTP_PASS.trim().replace(/\s+/g, '').length + ' characters)' : '(not set)'}`);
  console.log(`- SMTP_FROM:             ${process.env.SMTP_FROM || '(defaults to SMTP_USER)'}`);
  console.log(`- CONTACT_RECEIVER_EMAIL: ${receiverEmail}`);
  console.log(`- Configured Status:     ${isMailerConfigured() ? 'YES (all required variables set)' : 'NO (missing credentials)'}\n`);

  if (!isMailerConfigured()) {
    console.log('Status: SMTP is not configured in local environment variables.');
    console.log('When running in production on Render, set:');
    console.log('  SMTP_HOST=smtp.gmail.com');
    console.log('  SMTP_PORT=587');
    console.log('  SMTP_SECURE=false');
    console.log('  SMTP_USER=your_email@gmail.com');
    console.log('  SMTP_PASS=your_16_character_app_password');
    console.log('  CONTACT_RECEIVER_EMAIL=yagateelabalaji@gmail.com\n');
    console.log('Exiting safely with code 0.');
    process.exit(0);
  }

  console.log('Testing SMTP connection with mail server...');
  const result = await verifySmtpConnection();

  if (result.ok) {
    console.log('\nSUCCESS! ' + result.message);
    console.log('Transporter is ready to send live emails.');
    process.exit(0);
  } else {
    console.error('\nFAILED: ' + result.message);
    if (result.code) console.error('Error Code: ' + result.code);
    process.exit(1);
  }
}

function maskEmail(email) {
  const parts = email.split('@');
  if (parts.length !== 2) return '***';
  const name = parts[0];
  const domain = parts[1];
  const maskedName = name.length > 3 ? name.substring(0, 3) + '***' : name + '***';
  return `${maskedName}@${domain}`;
}

runDiagnostics();

