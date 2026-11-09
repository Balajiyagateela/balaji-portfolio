const rateLimit = require('express-rate-limit');

/**
 * Rate limiter middleware for contact form submission.
 * Limits each IP to 5 requests per 15 minutes.
 */
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    error: 'Too many messages submitted from this IP address. Please try again after 15 minutes, or email directly at rajbalajiyagateela@gmail.com.',
    code: 'RATE_LIMIT_EXCEEDED',
  },
});

/**
 * General API rate limiter for general routes.
 * 100 requests per 15 minutes.
 */
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many requests. Please slow down and try again later.',
    code: 'RATE_LIMIT_EXCEEDED',
  },
});

module.exports = {
  contactLimiter,
  generalLimiter,
};

