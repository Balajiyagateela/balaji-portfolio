# Balaji Yagateela — Professional Python Backend Developer Portfolio

A modern, high-performance, responsive developer portfolio for **Balaji Yagateela**, presenting authentic industry experience as a **Python Backend Developer**.

---

## 👨‍💻 Professional Profile Summary

- **Name:** Balaji Yagateela
- **Professional Role:** Python Backend Developer
- **Experience:** Approximately 1 year
- **Current / Recent Company:** Speshway Solutions Pvt. Ltd.
- **Location:** India
- **Email:** [rajbalajiyagateela@gmail.com](mailto:rajbalajiyagateela@gmail.com)
- **GitHub:** [https://github.com/Balajiyagateela](https://github.com/Balajiyagateela)
- **LinkedIn:** [Editable placeholder link](https://linkedin.com/in/balaji-yagateela)

### Primary Technical Focus
- **Languages:** Python (Primary), SQL, JavaScript
- **Backend Frameworks:** FastAPI, REST API Development, Node.js, Express.js
- **Databases:** PostgreSQL (Relational modeling, ACID transactions), MongoDB
- **Distributed Systems & Technologies:** Apache Kafka (Event Streaming / Consumers), Redis (In-Memory Caching), Docker, SQLAlchemy ORM, Pydantic (Request Validation)
- **Tools:** Git, GitHub, Postman, VS Code, pytest

> **Note on Portfolio Technology Stack:**  
> React.js, Node.js, and Express.js are used solely as the implementation stack for this portfolio web application. The professional identity and technical focus is strictly **Python Backend Developer**.

---

## 🏛️ Architectural Policy & Zero Database Design

Per strict project specifications:
- **No Database:** No MongoDB, PostgreSQL, MySQL, SQLite, or any database is utilized in this portfolio application.
- **Stateless Backend:** Contact form submissions are processed in-memory, validated against strict schemas, rate-limited, and directly dispatched via Nodemailer SMTP.
- **Honest SMTP Handling:** If SMTP relay credentials are not configured in environment variables, the backend does **not** pretend the message was delivered; it returns a transparent `503 Service Unavailable` with a direct one-click `mailto:` fallback.

---

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   │   └── python-icon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx                # Responsive header with live API health probe
│   │   │   ├── Footer.jsx                # Stateless architecture footer & links
│   │   │   ├── ArchitectureModal.jsx     # Microservice inspection modal
│   │   │   └── Toast.jsx                 # Dismissible status notification toast
│   │   ├── sections/
│   │   │   ├── Hero.jsx                  # Headline, intro, and simulated FastAPI terminal
│   │   │   ├── About.jsx                 # Verbatim professional introduction
│   │   │   ├── Skills.jsx                # Categorized technical stack cards
│   │   │   ├── BackendKnowledge.jsx      # 12 core backend engineering knowledge cards
│   │   │   ├── Projects.jsx              # Inventory Management Service & E-Commerce
│   │   │   ├── Experience.jsx            # Speshway Solutions experience & responsibilities
│   │   │   ├── Education.jsx             # Degree, coursework & background
│   │   │   └── Contact.jsx               # Functional contact form + direct email
│   │   ├── data/
│   │   │   └── portfolioData.js          # Centralized, editable portfolio data
│   │   ├── services/
│   │   │   └── api.js                    # Axios client connected to Express API
│   │   ├── App.jsx
│   │   ├── index.css                     # Tailwind styles & dark engineering theme
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── vercel.json                       # Vercel deployment rewrite rules
│   ├── .env.example
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── mailer.js                 # Nodemailer SMTP setup & validation check
│   │   ├── controllers/
│   │   │   └── contactController.js      # Contact submission & SMTP relay
│   │   ├── middleware/
│   │   │   ├── rateLimiter.js            # Express rate limiter (5 req / 15 min)
│   │   │   └── validation.js             # Input sanitization & field validation
│   │   ├── routes/
│   │   │   ├── contactRoutes.js          # POST /api/contact
│   │   │   └── healthRoutes.js           # GET /api/health
│   │   ├── app.js                        # Express middleware & error handling
│   │   └── server.js                     # HTTP server startup & graceful shutdown
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── render.yaml                           # Render Web Service blueprint
├── package.json                          # Root convenience scripts
├── .gitignore
└── README.md                             # Documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.x or v20.x LTS)
- npm (v9.x or v10.x)

### 1. Backend Setup
In a new terminal window:
```bash
cd backend

# 1. Install dependencies
npm install

# 2. Setup environment file
cp .env.example .env

# 3. Start the Express development server
npm run dev
```
The backend server will run on `http://localhost:5000`.
- Health check: `http://localhost:5000/api/health`
- Contact endpoint: `POST http://localhost:5000/api/contact`

### 2. Frontend Setup
In a second terminal window:
```bash
cd frontend

# 1. Install dependencies
npm install

# 2. Setup environment file
cp .env.example .env

# 3. Start the Vite development server
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## ⚙️ Environment Variables Reference

### Backend (`backend/.env`)
| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `PORT` | Port for Express server | `5000` |
| `NODE_ENV` | Environment mode | `development` |
| `ALLOWED_ORIGINS` | Comma-separated CORS allowed origins | `http://localhost:5173,http://localhost:3000` |
| `CONTACT_RECEIVER_EMAIL` | Destination mailbox for submissions | `rajbalajiyagateela@gmail.com` |
| `SMTP_HOST` | Outgoing SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port (`587` for STARTTLS, `465` for SSL) | `587` |
| `SMTP_SECURE` | Use SSL (`true` for 465, `false` for 587) | `false` |
| `SMTP_USER` | SMTP authentication user / email | `your_email@gmail.com` |
| `SMTP_PASS` | SMTP authentication password or App Password | `your_app_password` |
| `SMTP_FROM` | Sender address visible in recipient headers | `your_email@gmail.com` |

### Frontend (`frontend/.env`)
| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `VITE_API_BASE_URL` | Express API base URL | `http://localhost:5000/api` |

---

## 🌐 Production Deployment Guide

### Deploying Frontend to Vercel
1. Push repository to GitHub.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository and set the **Root Directory** to `frontend`.
4. Framework preset: **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Add Environment Variable:
   - `VITE_API_BASE_URL` = `https://<your-render-backend>.onrender.com/api`
8. Click **Deploy**. Single-page app routing is handled automatically by `vercel.json`.

### Deploying Backend to Render
1. Log into [Render](https://render.com) and click **"New +" → "Web Service"**.
2. Connect your repository.
3. Configure settings:
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. In the **Environment Variables** tab, add:
   - `NODE_ENV`: `production`
   - `ALLOWED_ORIGINS`: `https://<your-vercel-domain>.vercel.app`
   - `CONTACT_RECEIVER_EMAIL`: `rajbalajiyagateela@gmail.com`
   - `SMTP_HOST`: e.g. `smtp.gmail.com`
   - `SMTP_PORT`: `587`
   - `SMTP_SECURE`: `false`
   - `SMTP_USER`: `your_email@gmail.com`
   - `SMTP_PASS`: `your_app_password`
5. Click **Create Web Service**.

Alternatively, Render can deploy automatically via the included [render.yaml](file:///c:/Users/Lenovo/Desktop/portfolio/render.yaml) blueprint!

---

## 📝 Customization & Updating Details

All portfolio content is decoupled and stored in [frontend/src/data/portfolioData.js](file:///c:/Users/Lenovo/Desktop/portfolio/frontend/src/data/portfolioData.js).
You can easily update:
- LinkedIn profile link: `personalDetails.linkedin`
- Resume download link or PDF: `personalDetails.resumeUrl`
- Employment dates: `experienceData[0].period`
- E-commerce project descriptions, features, and links: `projectsData[1]`
- Education details: `educationData[0]`

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
