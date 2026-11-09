# Portfolio Backend API Service

Stateless REST API backend for Balaji Yagateela's professional portfolio.

## Architecture & Guarantees
- **Runtime:** Node.js (v18+)
- **Framework:** Express.js
- **Database:** **None** (Stateless by design — absolutely no database dependencies are installed or used).
- **Communication:** Nodemailer (SMTP relay) for contact inquiries.
- **Security:** Rate limiting (`express-rate-limit`), CORS whitelist, input sanitization and validation (`validator`).

## API Endpoints

### 1. `GET /api/health`
Health check and environment status.
- **Response:**
  ```json
  {
    "status": "ok",
    "service": "Balaji Yagateela - Portfolio Backend API",
    "role": "Python Backend Developer Portfolio Service",
    "uptimeSeconds": 142,
    "timestamp": "2026-11-09T09:00:00.000Z",
    "mailerReady": false,
    "database": "none (stateless architecture as specified)"
  }
  ```

### 2. `POST /api/contact`
Receives contact inquiry and dispatches an email via SMTP.
- **Rate Limit:** 5 requests per 15 minutes per IP.
- **Payload Schema:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Python Backend Developer Inquiry",
    "message": "Hello Balaji, we'd like to discuss an opportunity."
  }
  ```
- **Responses:**
  - `200 OK`: Delivered via SMTP successfully (`{ "success": true, "message": "..." }`)
  - `400 Bad Request`: Field validation error (`{ "success": false, "errors": { ... } }`)
  - `429 Too Many Requests`: Rate limit exceeded
  - `503 Service Unavailable`: Honest unconfigured SMTP status. When SMTP environment variables are not supplied or left as placeholders, returns structured guidance to email directly at `rajbalajiyagateela@gmail.com`.

## Local Setup

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Copy environment file:
   ```bash
   cp .env.example .env
   ```
3. Set your SMTP credentials in `.env` (optional for local testing; without credentials, the API will honestly return 503 unconfigured message):
   ```env
   PORT=5000
   CONTACT_RECEIVER_EMAIL=rajbalajiyagateela@gmail.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_gmail_app_password
   ```
4. Start backend:
   ```bash
   npm run dev
   # Server will start on http://localhost:5000
   ```

