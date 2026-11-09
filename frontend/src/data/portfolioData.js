/**
 * Portfolio Data Configuration for Balaji Yagateela
 * Professional Identity: Python Backend Developer
 * 
 * All details strictly reflect truthful experience and verifiable technical knowledge.
 * Editable fields are marked clearly for easy updates.
 */

export const personalDetails = {
  name: "Balaji Yagateela",
  role: "Python Backend Developer",
  experience: "Approximately 1 year",
  company: "Speshway Solutions Pvt. Ltd.",
  email: "rajbalajiyagateela@gmail.com",
  github: "https://github.com/Balajiyagateela",
  // EDITABLE PLACEHOLDER: Update with your active LinkedIn profile URL
  linkedin: "https://linkedin.com/in/balaji-yagateela",
  location: "India",
  status: "Available for Python & Backend Engineering Opportunities",
  resumeUrl: "#", // Can be linked to a hosted PDF or placed in public/resume.pdf
};

export const introduction = {
  headline: "Python Backend Developer",
  supportingHeadline: "Building Reliable Backend Applications with Python and FastAPI.",
  fullText: "I am a Python Backend Developer with approximately one year of professional experience, focused on developing REST APIs, backend applications, and database-driven solutions.\n\nMy primary technical focus is Python, FastAPI, and PostgreSQL. I have practical experience with API development, database integration, backend business logic, service communication, and asynchronous processing.\n\nI also have additional knowledge of JavaScript, React.js, Node.js, and Express.js.",
  focusPoints: [
    { label: "Core Specialty", value: "Python, FastAPI & PostgreSQL" },
    { label: "Event Processing", value: "Apache Kafka Consumers" },
    { label: "Architecture", value: "RESTful APIs & Service Communication" },
    { label: "Caching & Performance", value: "Redis In-Memory Key-Value Caching" },
  ],
};

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Core languages used for backend logic, data transformation, and query execution.",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    category: "Backend Development",
    description: "Frameworks, runtimes, and architectural patterns for RESTful microservices and APIs.",
    skills: ["Python", "FastAPI", "REST API Development", "Node.js", "Express.js"],
  },
  {
    category: "Databases",
    description: "Relational modeling, relational integrity, and document database structures.",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Backend Technologies",
    description: "Distributed messaging, caching, containerization, and data validation libraries.",
    skills: ["Apache Kafka", "Redis", "Docker", "SQLAlchemy", "Pydantic"],
  },
  {
    category: "Frontend",
    description: "Working knowledge used to build this portfolio and understand full-stack client-server flow.",
    skills: ["React.js", "HTML5", "CSS3"],
  },
  {
    category: "Tools",
    description: "Version control, API testing, debugging, and IDE productivity tools.",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export const experienceData = [
  {
    company: "Speshway Solutions Pvt. Ltd.",
    role: "Python Backend Developer",
    duration: "Approximately 1 year",
    // EDITABLE PLACEHOLDER: Update employment timeframe as preferred (e.g., 'July 2023 – July 2024' or '2023 – Present')
    period: "2023 – 2024 (Approx. 1 Year)",
    location: "India",
    summary: "Contributed to backend development and maintenance of production RESTful APIs and asynchronous services.",
    responsibilities: [
      "Developing backend functionality using Python.",
      "Creating REST APIs using FastAPI.",
      "Working with PostgreSQL.",
      "Implementing backend business logic.",
      "API validation and error handling.",
      "Service-to-service communication.",
      "Kafka-based asynchronous event processing.",
      "Debugging and automated testing.",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Apache Kafka", "Docker", "Git", "Postman"],
  },
];

export const projectsData = [
  {
    id: "inventory-management-service",
    title: "Inventory Management Service",
    type: "Enterprise Backend Microservice",
    badge: "Production Contributor",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Apache Kafka", "Redis"],
    description: "An enterprise inventory management backend service supporting inventory operations, purchase order workflows, database integration, and communication with other services.",
    scopeNote: "Contributed as a backend developer focusing on the core inventory operations, data workflows, and event consumers. Enterprise infrastructure was maintained collaboratively.",
    contributedAreas: [
      "REST API development for inventory item operations, stock counts, and purchase order tracking.",
      "Inventory data management and state transitions across purchase order lifecycles.",
      "Purchase order workflows with business rule validation and audit tracking.",
      "PostgreSQL integration using structured relational schemas, indexing, and session management.",
      "Kafka compliance event consumer subscribing to upstream inventory change topics.",
      "Service-to-service API communication with external warehouse and order dispatch services.",
      "API key authentication protecting sensitive admin endpoints and inter-service channels.",
      "Automated testing and error handling with pytest and structured error responses.",
    ],
    architectureHighlights: {
      apiProtocol: "RESTful JSON over HTTP/1.1",
      eventStream: "Kafka Event Consumer (Topic: inventory.events)",
      caching: "Redis for stock lookup rate optimization",
      storage: "PostgreSQL with ACID transactional integrity",
    },
    github: "https://github.com/Balajiyagateela",
    hasArchitectureModal: true,
  },
  {
    id: "e-commerce-application",
    title: "E-Commerce Application",
    type: "Full-Stack Web Application (MERN Stack)",
    badge: "Full-Stack Project",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    // EDITABLE PLACEHOLDERS
    description: "[Editable Description: A full-stack e-commerce web application featuring user catalog browsing, shopping cart state management, and Express.js REST API endpoints.]",
    scopeNote: "Implemented as a practical full-stack project demonstrating Node.js, Express.js REST API construction, and React frontend integration.",
    contributedAreas: [
      "[Editable Feature 1: Express.js REST API routing for products, orders, and authentication]",
      "[Editable Feature 2: MongoDB document data schemas for product listings and order records]",
      "[Editable Feature 3: React.js user interface with responsive product catalog and checkout views]",
      "[Editable Feature 4: Client-server communication with Axios and structured error handling]",
    ],
    architectureHighlights: {
      apiProtocol: "RESTful JSON",
      database: "MongoDB (Document-based)",
      server: "Express.js runtime on Node.js",
      client: "React.js Single Page Application",
    },
    // EDITABLE PLACEHOLDERS: Replace with your actual repository and live deployment links
    github: "https://github.com/Balajiyagateela",
    demo: "https://example.com/demo", // Editable placeholder
    hasArchitectureModal: false,
  },
];

export const backendKnowledgeData = [
  {
    id: "rest-api",
    title: "REST API Architecture",
    category: "Architecture & Design",
    summary: "Designing stateless, resource-oriented RESTful endpoints with consistent URI naming conventions and predictable payloads.",
    keyPoints: [
      "Plural noun-based URIs (e.g., /api/v1/inventory/items)",
      "Stateless request/response cycles without server-side session stickiness",
      "Consistent JSON response envelopes for data, pagination, and error metadata",
      "API versioning strategies to avoid breaking downstream consumers",
    ],
  },
  {
    id: "http-methods",
    title: "HTTP Methods & Status Codes",
    category: "Protocols & Standards",
    summary: "Strict semantic application of standard HTTP verbs and status codes for transparent client communication.",
    keyPoints: [
      "GET (safe/idempotent), POST (resource creation), PUT (full replacement), PATCH (partial update), DELETE",
      "2xx: 200 OK, 201 Created, 204 No Content",
      "4xx: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Unprocessable Entity",
      "5xx: 500 Internal Error, 502 Bad Gateway, 503 Service Unavailable",
    ],
  },
  {
    id: "request-validation",
    title: "Request Validation",
    category: "Data Integrity & Security",
    summary: "Enforcing strict schema validation at the API perimeter to prevent malformed payloads from polluting business logic.",
    keyPoints: [
      "Declarative payload models using Pydantic in FastAPI",
      "Data type casting, field constraints (min/max, regex, enum validations)",
      "Automatic generation of 422 Unprocessable Entity with detailed field error trees",
      "Sanitizing input parameters to guard against query injection and malformed formats",
    ],
  },
  {
    id: "auth",
    title: "Authentication & Authorization",
    category: "Security",
    summary: "Safeguarding backend resources and restricting service access through established security paradigms.",
    keyPoints: [
      "API Key authentication headers for service-to-service communication",
      "Bearer Token and JWT (JSON Web Token) authentication flows",
      "Role-Based Access Control (RBAC) inspecting user scopes and permissions",
      "Secure credential handling via environment variables and timing-safe comparisons",
    ],
  },
  {
    id: "sql-relationships",
    title: "SQL & Database Relationships",
    category: "Database Modeling",
    summary: "Designing relational database schemas adhering to normalization principles and relational integrity.",
    keyPoints: [
      "Primary Keys, Foreign Key constraints, and cascade delete/update rules",
      "One-to-One, One-to-Many, and Many-to-Many (junction tables) relationships",
      "Query optimization utilizing indexes on foreign keys and frequently filtered columns",
      "Preventing N+1 query problems through eager loading and joined loads in SQLAlchemy",
    ],
  },
  {
    id: "db-transactions",
    title: "Database Transactions",
    category: "Data Consistency",
    summary: "Managing atomic units of work across multiple database queries to ensure data consistency.",
    keyPoints: [
      "ACID guarantees: Atomicity, Consistency, Isolation, and Durability",
      "Explicit transaction boundaries: BEGIN, COMMIT, and ROLLBACK",
      "Context managers and session lifecycle management in SQLAlchemy/PostgreSQL",
      "Handling partial workflow failures without leaving orphaned or dirty database records",
    ],
  },
  {
    id: "exception-handling",
    title: "Exception Handling",
    category: "Reliability & Resilience",
    summary: "Implementing centralized exception handlers to intercept unexpected failures cleanly without leaking internal stack traces.",
    keyPoints: [
      "Custom domain exceptions representing business rule violations",
      "FastAPI and Express global exception interceptors / middleware",
      "Uniform JSON error response schemas across the entire API",
      "Logging error traces internally while returning sanitized, actionable messages to clients",
    ],
  },
  {
    id: "kafka-consumers",
    title: "Kafka Consumers",
    category: "Distributed Systems",
    summary: "Consuming asynchronous message streams from Kafka topics for decoupled background processing.",
    keyPoints: [
      "Subscribing to distributed event topics (e.g. inventory.updated, order.placed)",
      "Consumer groups for horizontal scaling and partition assignment",
      "Offset commit strategies (manual vs. automatic) to prevent duplicate processing",
      "Dead Letter Queue (DLQ) patterns for unparseable or poison-pill events",
    ],
  },
  {
    id: "async-processing",
    title: "Asynchronous Processing",
    category: "Performance & Concurrency",
    summary: "Leveraging Python's asyncio and FastAPI's native async def capabilities for non-blocking I/O operations.",
    keyPoints: [
      "Event loop mechanics and cooperative multitasking with async/await",
      "Non-blocking database queries and network calls",
      "FastAPI BackgroundTasks for offloading non-critical operations (emailing, metric recording)",
      "Preventing thread-blocking CPU-heavy loops from freezing the async event loop",
    ],
  },
  {
    id: "service-communication",
    title: "Service-to-Service Communication",
    category: "Distributed Architecture",
    summary: "Facilitating reliable inter-service HTTP and event-based communication across microservices.",
    keyPoints: [
      "Internal HTTP client communication with httpx / requests / axios",
      "Configuring request timeouts and retry logic with exponential backoff",
      "Correlation IDs passed via headers for end-to-end distributed tracing",
      "Handling upstream outages gracefully with fallback states and circuit breaker awareness",
    ],
  },
  {
    id: "logging-debugging",
    title: "Logging & Debugging",
    category: "Observability",
    summary: "Implementing structured application logging and systematic debugging routines for production observability.",
    keyPoints: [
      "Standard Python logging module configured with log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL)",
      "Structured JSON logs with timestamps, service names, and contextual metadata",
      "Postman collection debugging, request inspection, and cURL generation",
      "Using interactive debuggers and log aggregation for rapid root-cause analysis",
    ],
  },
  {
    id: "automated-testing",
    title: "Automated Testing",
    category: "Quality Assurance",
    summary: "Writing automated test suites to verify backend business logic, validation, and endpoint contracts.",
    keyPoints: [
      "Unit and integration testing using pytest and FastAPI TestClient",
      "Mocking external HTTP calls, database sessions, and Kafka producer/consumer dependencies",
      "Testing edge cases: boundary numbers, invalid formats, and unauthorized requests",
      "Deterministic test environments ensuring regressions are caught before code reaches production",
    ],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Technology / Engineering (or relevant degree)",
    field: "Computer Science & Engineering / Information Technology",
    institution: "University / Institute Name", // EDITABLE PLACEHOLDER
    location: "India",
    year: "2019 – 2023", // EDITABLE PLACEHOLDER
    details: "Strong coursework in Data Structures, Algorithms, Relational Database Systems, Operating Systems, Computer Networks, and Object-Oriented Software Engineering.",
  },
];

