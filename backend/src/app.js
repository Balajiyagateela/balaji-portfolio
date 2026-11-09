const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const healthRoutes = require('./routes/healthRoutes');
const contactRoutes = require('./routes/contactRoutes');
const { generalLimiter } = require('./middleware/rateLimiter');

const app = express();

// Trust proxy for rate-limiting behind reverse proxies like Render / Vercel / Nginx
app.set('trust proxy', 1);

// Configure CORS
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
  : ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes('*') || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    return callback(new Error('Cross-Origin Request Blocked by CORS policy.'));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Body parsers
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Apply general rate limiter
app.use('/api', generalLimiter);

// Mount API routes
app.use('/api', healthRoutes);
app.use('/api', contactRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Balaji Yagateela - Portfolio Backend API',
    role: 'Python Backend Developer',
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact',
    },
    note: 'Stateless backend service. No database storage is utilized.',
  });
});

// 404 Handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    requestedUrl: req.originalUrl,
  });
});

// Centralized Error Handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error('[Backend Error]:', err.message || err);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    error: err.message || 'Internal Server Error',
    code: err.code || 'SERVER_ERROR',
  });
});

module.exports = app;
