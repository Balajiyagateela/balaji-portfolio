const express = require('express');
const { isMailerConfigured } = require('../config/mailer');

const router = express.Router();

/**
 * @route GET /api/health
 * @desc  System health & readiness check
 * @access Public
 */
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'Balaji Yagateela - Portfolio Backend API',
    role: 'Python Backend Developer Portfolio Service',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    mailerReady: isMailerConfigured(),
    database: 'none (stateless architecture as specified)',
  });
});

module.exports = router;

