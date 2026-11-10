const express = require('express');
const { handleContactSubmit, getContactMessages } = require('../controllers/contactController');
const { contactLimiter } = require('../middleware/rateLimiter');
const { validateContactInput } = require('../middleware/validation');

const router = express.Router();

/**
 * @route POST /api/contact
 * @desc  Submit contact inquiry, preserve to inbox, and relay via SMTP
 * @access Public (Rate-limited)
 */
router.post('/contact', contactLimiter, validateContactInput, handleContactSubmit);

/**
 * @route GET /api/contact/messages
 * @desc  Retrieve received inquiries
 * @access Internal/Owner
 */
router.get('/contact/messages', getContactMessages);

module.exports = router;
