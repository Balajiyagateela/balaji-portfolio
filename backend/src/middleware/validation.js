const validator = require('validator');

/**
 * Validates and sanitizes contact form request payload.
 */
const validateContactInput = (req, res, next) => {
  const { name, email, subject, message } = req.body || {};
  const errors = {};

  // Validate Name
  if (!name || typeof name !== 'string') {
    errors.name = 'Full name is required.';
  } else {
    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    } else if (trimmedName.length > 100) {
      errors.name = 'Name cannot exceed 100 characters.';
    }
  }

  // Validate Email
  if (!email || typeof email !== 'string') {
    errors.email = 'A valid email address is required.';
  } else {
    const trimmedEmail = email.trim();
    if (!validator.isEmail(trimmedEmail)) {
      errors.email = 'Please provide a valid email format (e.g., user@example.com).';
    } else if (trimmedEmail.length > 255) {
      errors.email = 'Email address is too long.';
    }
  }

  // Validate Subject
  if (!subject || typeof subject !== 'string') {
    errors.subject = 'Subject line is required.';
  } else {
    const trimmedSubject = subject.trim();
    if (trimmedSubject.length < 2) {
      errors.subject = 'Subject must be at least 2 characters.';
    } else if (trimmedSubject.length > 200) {
      errors.subject = 'Subject cannot exceed 200 characters.';
    }
  }

  // Validate Message
  if (!message || typeof message !== 'string') {
    errors.message = 'Message body is required.';
  } else {
    const trimmedMessage = message.trim();
    if (trimmedMessage.length < 10) {
      errors.message = 'Message must be at least 10 characters so I can understand your inquiry.';
    } else if (trimmedMessage.length > 5000) {
      errors.message = 'Message cannot exceed 5000 characters.';
    }
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed. Please correct the highlighted errors.',
      errors,
      code: 'VALIDATION_ERROR',
    });
  }

  // Sanitized payload assignment
  req.sanitizedBody = {
    name: validator.escape(name.trim()),
    email: validator.normalizeEmail(email.trim()),
    subject: validator.escape(subject.trim()),
    message: message.trim(), // Keep raw newlines in message text for email reading
  };

  next();
};

module.exports = {
  validateContactInput,
};

