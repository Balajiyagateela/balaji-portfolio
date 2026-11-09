/**
 * Portfolio Data Configuration for Balaji Yagateela
 * Professional Identity: Python Backend Developer
 * 
 * Verifiable details directly from resume & projects.
 */

export const personalDetails = {
  name: "Balaji Yagateela",
  fullName: "Yagateela Balaji",
  role: "Python Backend Developer",
  experience: "Approximately 1 year",
  company: "Speshway Solutions Pvt. Ltd.",
  companyRole: "Python Backend Developer",
  companyPeriod: "Dec 2025 – Present",
  email: "yagateelabalaji@gmail.com",
  secondaryEmail: "rajbalajiyagateela@gmail.com",
  phone: "+91 63024 35600",
  location: "Hyderabad, Telangana, India",
  github: "https://github.com/Balajiyagateela",
  linkedin: "https://linkedin.com/in/balaji-yagateela-059922253",
  status: "Available for Python & Backend Engineering Roles",
  photoUrl: "/balaji-photo.jpg",
  metrics: [
    { label: "API Endpoints Built", value: "30+" },
    { label: "Automated Pytest Tests", value: "280+" },
    { label: "Database Tables Modeled", value: "15+" },
    { label: "Regression Test Failures", value: "0" },
  ]
};

export const introduction = {
  headline: "Python Backend Developer",
  supportingHeadline: "Building Reliable, High-Performance Microservices with Python and FastAPI.",
  summary: "Backend developer with approximately 1 year of professional experience building RESTful APIs and microservices using Python and FastAPI. Skilled in designing PostgreSQL-backed services with 30+ API endpoints, writing 280+ automated tests with Pytest, and integrating Apache Kafka, Redis, and Docker into production-ready microservice architectures. Experienced in JWT authentication, role-based access control (RBAC), and OpenAPI contract-driven development.",
  animatedKeywords: [
    "FastAPI Microservices",
    "PostgreSQL & SQLAlchemy",
    "Kafka Event Streaming",
    "Redis Caching Layers",
    "Docker Containerization",
    "Pytest CI Pipelines",
    "RESTful API Architecture",
  ],
  focusPillars: [
    { title: "FastAPI & REST APIs", desc: "OpenAPI contract-driven design with strict Pydantic schemas and error boundaries." },
    { title: "PostgreSQL & ACID", desc: "15+ normalized relational tables, Alembic migrations, and optimistic concurrency locking." },
    { title: "Event Streaming", desc: "Apache Kafka consumer groups for distributed, asynchronous message processing." },
    { title: "In-Memory Caching", desc: "Redis cache invalidation strategies minimizing expensive database query cycles." },
  ]
};

export const skillsData = [
  {
    category: "Languages",
    description: "Core languages for backend logic, system programming, and database queries.",
    skills: [
      { name: "Python", isCore: true },
      { name: "SQL", isCore: true },
      { name: "JavaScript", isCore: false },
    ],
  },
  {
    category: "Backend Development",
    description: "Frameworks, ORMs, and runtimes for scalable RESTful APIs and microservices.",
    skills: [
      { name: "FastAPI", isCore: true },
      { name: "REST APIs", isCore: true },
      { name: "Pydantic", isCore: true },
      { name: "SQLAlchemy ORM", isCore: true },
      { name: "Node.js", isCore: false },
    ],
  },
  {
    category: "Databases",
    description: "Relational and document storage engines with ACID transaction safety.",
    skills: [
      { name: "PostgreSQL", isCore: true },
      { name: "MongoDB", isCore: false },
      { name: "MySQL", isCore: false },
      { name: "SQLite", isCore: false },
    ],
  },
  {
    category: "Messaging & Caching",
    description: "Distributed pub/sub event streams and high-speed in-memory caching.",
    skills: [
      { name: "Apache Kafka", isCore: true },
      { name: "Redis", isCore: true },
    ],
  },
  {
    category: "Auth & Security",
    description: "Identity verification, token lifecycles, and access control boundaries.",
    skills: [
      { name: "JWT (JSON Web Tokens)", isCore: true },
      { name: "RBAC (Role-Based Access)", isCore: true },
      { name: "API Key Authentication", isCore: true },
    ],
  },
  {
    category: "Testing & API Tools",
    description: "Contract testing, unit testing suites, and interactive API documentation.",
    skills: [
      { name: "Pytest (280+ Tests)", isCore: true },
      { name: "Postman", isCore: true },
      { name: "Swagger / OpenAPI", isCore: true },
    ],
  },
  {
    category: "DevOps & Tools",
    description: "Version control, database migrations, containerization, and developer environments.",
    skills: [
      { name: "Docker", isCore: true },
      { name: "Git", isCore: true },
      { name: "GitHub", isCore: true },
      { name: "Alembic", isCore: true },
      { name: "Visual Studio Code", isCore: false },
    ],
  },
  {
    category: "Frontend (Supporting)",
    description: "Working frontend knowledge utilized for full-stack integration and building this portfolio.",
    skills: [
      { name: "React.js", isCore: false },
      { name: "HTML5", isCore: false },
      { name: "CSS3", isCore: false },
      { name: "Tailwind CSS", isCore: false },
    ],
  },
];

export const experienceData = [
  {
    company: "Speshway Solutions Pvt. Ltd.",
    role: "Python Backend Developer",
    period: "Dec 2025 – Present",
    location: "Hyderabad, India",
    type: "Full-Time",
    isCurrent: true,
    summary: "Building and maintaining production-ready microservices, high-throughput REST APIs, and event-driven architectures with FastAPI and PostgreSQL.",
    responsibilities: [
      "Developed RESTful APIs using Python and FastAPI with Pydantic validation, maintaining OpenAPI (Swagger) documentation for consistent API development and service integration.",
      "Designed and integrated PostgreSQL databases using SQLAlchemy ORM, writing optimised SQL queries and managing schema migrations with Alembic to support evolving backend data requirements.",
      "Implemented JWT authentication and role-based access control (RBAC) to secure API endpoints, enforcing authorization policies across all backend services.",
      "Built Apache Kafka consumer services to enable event-driven architecture and asynchronous communication between microservices, processing domain events for service integration.",
      "Configured Redis caching for frequently accessed data, reducing redundant database queries and improving backend response performance.",
      "Automated testing with Pytest, writing unit tests, integration tests, and API contract tests to maintain a reliable CI pipeline for continuous backend development.",
      "Collaborated on backend integration using Git and GitHub pull-request workflows, conducting code reviews and resolving service integration defects across development cycles.",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Apache Kafka", "Redis", "Docker", "Pytest", "SQLAlchemy", "Alembic", "Git", "GitHub"],
  },
  {
    company: "CSEdge",
    role: "Web Development Intern",
    period: "Internship",
    location: "India",
    type: "Internship",
    isCurrent: false,
    summary: "Developed interactive, responsive web interfaces and practiced collaborative version control in a team workflow.",
    responsibilities: [
      "Developed responsive web pages using HTML5, CSS3, and JavaScript, applying DOM manipulation techniques to build interactive UI components across multiple page layouts.",
      "Gained practical exposure to front-end development workflows, DOM manipulation, and collaborative version control using Git and GitHub.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "DOM", "Git", "GitHub"],
  },
];

export const projectsData = [
  {
    id: "eaicsp-inventory-service",
    title: "EAICSP – Enterprise AI & Supply Chain Platform",
    module: "Module: Inventory Service",
    type: "Production Backend Microservice",
    badge: "Core Enterprise Project",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Apache Kafka", "Docker", "Pytest", "REST APIs"],
    description: "An enterprise inventory management backend service supporting inventory operations, purchase order workflows, database integration, and communication with other services.",
    scopeNote: "Contributed as a backend developer focusing on inventory operations, purchase order lifecycle workflows, Kafka consumers, and PostgreSQL data consistency.",
    contributedAreas: [
      "Developed 30+ RESTful inventory APIs with FastAPI and PostgreSQL, modelling a 3-tier warehouse hierarchy (central, regional, and local) with 15+ database tables.",
      "Implemented purchase-order draft-to-approval workflows with 4 role-based permission levels to enforce configurable approval policies across 5 order status transitions.",
      "Integrated supplier compliance validation into PO workflows, verifying regulatory and contractual obligations via 2 external service APIs before order confirmation.",
      "Built FIFO and weighted-average inventory valuation logic across 2 costing methods to maintain accurate cost-of-goods tracking across all stock movements.",
      "Applied optimistic locking on concurrent inventory updates to prevent race conditions, maintaining data consistency across simultaneous warehouse operations.",
      "Wrote 280+ Pytest test cases covering API contracts, integration flows, and edge cases, achieving 0 failures across the full regression suite.",
      "Implemented Kafka-driven event consumers and reorder-point recommendation logic to react to supplier compliance status-change events in real time.",
    ],
    architectureHighlights: {
      framework: "FastAPI (Python 3.10+)",
      database: "PostgreSQL (15+ Tables, 3-Tier Hierarchy)",
      eventStreaming: "Apache Kafka (inventory.events, supplier.status)",
      cache: "Redis In-Memory Key-Value",
      tests: "280+ Pytest Cases (0 Failures)",
      concurrency: "Optimistic Locking & ACID Isolation",
    },
    github: "https://github.com/Balajiyagateela",
    hasArchitectureModal: true,
  },
  {
    id: "ecommerce-mern-app",
    title: "E-Commerce Web Application",
    module: "Full-Stack MERN Project",
    type: "Full-Stack Web Application",
    badge: "Full-Stack Project",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
    description: "A full-stack e-commerce web application featuring user catalog browsing, dynamic shopping cart management, and Express.js REST API endpoints.",
    scopeNote: "Demonstrates practical full-stack proficiency with Node.js and Express.js REST API architecture, MongoDB document schemas, and React UI state management.",
    contributedAreas: [
      "Developed a responsive React.js frontend with 10+ reusable components enabling product browsing, search filtering, and dynamic cart management.",
      "Built RESTful backend APIs using Node.js and Express.js to handle product catalog operations, user authentication, and end-to-end order processing.",
      "Designed 4 MongoDB collections for products, users, carts, and orders, supporting a complete checkout and order-tracking workflow.",
      "Integrated frontend and backend components to deliver a full e-commerce purchase flow from product discovery to order confirmation.",
    ],
    architectureHighlights: {
      server: "Node.js & Express.js REST API",
      database: "MongoDB (4 Core Collections)",
      client: "React.js Component Architecture",
      auth: "Token-based Authentication Flow",
    },
    github: "https://github.com/Balajiyagateela",
    demo: "https://github.com/Balajiyagateela",
    hasArchitectureModal: false,
  },
];

export const educationData = [
  {
    degree: "B.Tech – Computer Science and Engineering",
    institution: "Narayana Engineering College, Gudur, Andhra Pradesh",
    year: "Dec 2021 – Apr 2025",
    grade: "CGPA: 8.1 / 10",
    coursework: "Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Object-Oriented Software Engineering.",
  },
  {
    degree: "Intermediate – MPC",
    institution: "LVR Junior College, Nellore, Andhra Pradesh",
    year: "Jun 2019 – May 2021",
    grade: "CGPA: 9.1 / 10",
    coursework: "Mathematics, Physics, Chemistry (MPC) with academic distinction.",
  },
];

export const achievementsData = [
  {
    title: "Project Expo Award",
    organization: "College-Level Technical Project Exhibition",
    description: "Awarded a prize at the college-level Project Expo for presenting a technically strong, resilient project demonstration.",
    badge: "Prize Winner",
  },
  {
    title: "NIPUNA State-Level Skill Programme",
    organization: "AP State Technical Skill Development",
    description: "Participated in the NIPUNA state-level technical skill development programme, gaining extensive exposure to industry-standard backend and software engineering practices.",
    badge: "State-Level",
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
      "GET (safe/idempotent), POST (creation), PUT (replacement), PATCH (partial update), DELETE",
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
      "JWT (JSON Web Token) creation, signing, and bearer verification",
      "Role-Based Access Control (RBAC) inspecting user roles across 4 permission tiers",
      "API Key authentication headers for service-to-service communication",
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
      "15+ tables modeled across a 3-tier warehouse hierarchy (central, regional, local)",
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
      "Optimistic locking on concurrent inventory updates to prevent race conditions",
      "Explicit transaction boundaries: BEGIN, COMMIT, and ROLLBACK",
      "Alembic schema migrations versioning database evolutions cleanly",
    ],
  },
  {
    id: "exception-handling",
    title: "Exception Handling",
    category: "Reliability & Resilience",
    summary: "Implementing centralized exception handlers to intercept unexpected failures cleanly without leaking internal stack traces.",
    keyPoints: [
      "Custom domain exceptions representing business rule violations",
      "FastAPI global exception handlers returning uniform JSON schemas",
      "Sanitized client-facing error messages preventing security exposure",
      "Logging error traces internally for rapid post-incident root-cause analysis",
    ],
  },
  {
    id: "kafka-consumers",
    title: "Kafka Consumers",
    category: "Distributed Systems",
    summary: "Consuming asynchronous message streams from Kafka topics for decoupled background processing.",
    keyPoints: [
      "Subscribing to distributed event topics (e.g. inventory.events, supplier.status)",
      "Consumer groups for horizontal scaling and partition assignment",
      "Manual and automatic offset commit strategies preventing duplicate processing",
      "Reorder-point recommendation logic reacting to supplier status change events in real time",
    ],
  },
  {
    id: "async-processing",
    title: "Asynchronous Processing",
    category: "Performance & Concurrency",
    summary: "Leveraging Python's asyncio and FastAPI's native async def capabilities for non-blocking I/O operations.",
    keyPoints: [
      "Event loop mechanics and cooperative multitasking with async/await",
      "Non-blocking database queries and network calls via asynchronous drivers",
      "FastAPI BackgroundTasks for offloading non-critical operations",
      "Preventing CPU-heavy loops from freezing the async event loop",
    ],
  },
  {
    id: "service-communication",
    title: "Service-to-Service Communication",
    category: "Distributed Architecture",
    summary: "Facilitating reliable inter-service HTTP and event-based communication across microservices.",
    keyPoints: [
      "Internal HTTP client communication with httpx / requests",
      "Validating supplier compliance via 2 external service APIs prior to PO approval",
      "Configuring request timeouts and retry logic with exponential backoff",
      "Passing correlation IDs via headers for end-to-end distributed tracing",
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
      "OpenAPI / Swagger interactive documentation for living contract validation",
    ],
  },
  {
    id: "automated-testing",
    title: "Automated Testing",
    category: "Quality Assurance",
    summary: "Writing automated test suites to verify backend business logic, validation, and endpoint contracts.",
    keyPoints: [
      "280+ Pytest test cases covering API contracts, integration flows, and edge cases",
      "0 failures across the complete regression suite in continuous testing",
      "FastAPI TestClient for high-speed in-process HTTP endpoint verification",
      "Mocking external HTTP calls, database sessions, and Kafka dependencies",
    ],
  },
];
