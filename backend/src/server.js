
const app = require('./app');

const PORT = process.env.PORT || 5000;

// Listen on all network interfaces (required for cloud deployment)
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log('====================================================');
  console.log('Portfolio Backend API Service Running');
  console.log(`Port: ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Health Check: http://localhost:${PORT}/api/health`);
  console.log(`Contact API:  http://localhost:${PORT}/api/contact`);
  console.log('====================================================');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server...');

  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server...');

  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });
});
