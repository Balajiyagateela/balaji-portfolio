const express = require('express');
const { handleContactSubmit } = require('../controllers/contactController');
const { contactLimiter } = require('../middleware/rateLimiter');
const { validateContactInput } = require('../middleware/validation');

const router = express.Router();

/**
 * @route POST /api/contact
 * @desc  Submit contact inquiry and relay via SMTP
 * @access Public (Rate-limited)
 */
router.post('/contact', contactLimiter, validateContactInput, handleContactSubmit);

module.exports = router;

