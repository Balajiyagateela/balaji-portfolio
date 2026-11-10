/**
 * Portfolio Data Configuration for Balaji Yagateela
 * Professional Python Backend Developer
 */

export const personalDetails = {
  name: "Balaji Yagateela",
  fullName: "Balaji Yagateela",
  role: "Python Backend Developer",
  company: "Speshway Solutions Pvt. Ltd.",
  companyRole: "Python Backend Developer",
  companyPeriod: "Dec 2025 – Present",
  email: "yagateelabalaji@gmail.com",
  phone: "+91 63024 35600",
  location: "Hyderabad, India",
  github: "https://github.com/Balajiyagateela",
  linkedin: "https://linkedin.com/in/balaji-yagateela-059922253",
  photoUrl: "/balaji-photo.jpg",
  resumeUrl: "/Balaji_Yagateela_Resume.pdf",
};

export const heroContent = {
  name: "Balaji Yagateela",
  role: "Python Backend Developer",
  tagline: "I build backend applications with Python, FastAPI, and PostgreSQL, focusing on reliable APIs, data management, and event-driven services.",
  availability: "Available for backend opportunities",
};

export const aboutContent = {
  description: "I am a Python Backend Developer focused on architecting resilient API services, relational data models, and event-driven microservices. With hands-on engineering experience across Python, FastAPI, PostgreSQL, and Apache Kafka, I build production-grade server architectures prioritized around performance, data integrity, and strict API contracts.",
  highlights: [
    {
      title: "Backend Architecture",
      desc: "Constructing modular, asynchronous microservices and service layers using Python and FastAPI for high-throughput workloads.",
    },
    {
      title: "API Design & Integration",
      desc: "Designing type-safe, contract-driven RESTful APIs with Pydantic schemas, comprehensive input validation, and structured error responses.",
    },
    {
      title: "Database Modeling & ORM",
      desc: "Architecting normalized PostgreSQL relational schemas, managing migrations, and optimizing database queries using SQLAlchemy ORM.",
    },
    {
      title: "Event-Driven Processing",
      desc: "Implementing scalable message streaming pipelines, decoupled producers, and fault-tolerant consumer workflows with Apache Kafka.",
    },
    {
      title: "Automated Testing & Reliability",
      desc: "Building automated test suites using Pytest to validate endpoints, edge cases, and business logic for continuous system reliability.",
    },
  ],
};

export const skillsCategories = [
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database and ORM",
    skills: ["PostgreSQL", "MongoDB", "SQLAlchemy"],
  },
  {
    category: "Event-Driven and Infrastructure",
    skills: ["Apache Kafka", "Redis", "Docker"],
  },
  {
    category: "Validation and Data",
    skills: ["Pydantic", "Pytest"],
  },
  {
    category: "Frontend",
    skills: ["JavaScript", "React.js", "HTML", "CSS"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export const experienceData = [
  {
    company: "Speshway Solutions Pvt. Ltd.",
    role: "Python Backend Developer",
    period: "Dec 2025 – Present",
    location: "Hyderabad, India",
    type: "Full-Time",
    responsibilities: [
      "Engineered and maintained production RESTful APIs using Python and FastAPI, implementing strict request validation and standardized response contracts.",
      "Modeled relational database schemas and integrated SQLAlchemy ORM with PostgreSQL, optimizing connection pooling and complex query execution.",
      "Architected asynchronous event handling workflows and service-to-service communication pipelines using Apache Kafka producers and consumers.",
      "Developed comprehensive unit and integration test suites using Pytest to ensure high code coverage, endpoint stability, and regression resistance.",
      "Collaborated in team code reviews, Git pull-request workflows, and authored clear OpenAPI/Swagger documentation for client teams.",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Apache Kafka", "Pytest", "REST APIs", "Git"],
  },
  {
    company: "CSEdge",
    role: "Web Development Intern",
    period: "Oct 2024 – Nov 2024",
    location: "Remote",
    type: "Internship",
    responsibilities: [
      "Developed responsive frontend modules and UI components using modern JavaScript, HTML5, and CSS3 across cross-browser environments.",
      "Collaborated in an Agile team structure, managing version-controlled branches, resolving code conflicts, and participating in Git workflows.",
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "Git", "GitHub"],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "Narayana Engineering College, Gudur",
    period: "2021 – 2025",
    description: "Core curriculum in Data Structures and Algorithms, Database Management Systems (DBMS), Operating Systems, and Computer Networks.",
  },
  {
    degree: "Intermediate",
    field: "MPC (Mathematics, Physics, Chemistry)",
    institution: "LVR Junior College, Nellore",
    period: "2019 – 2021",
    description: "Foundational training in advanced mathematics, physical sciences, and analytical problem-solving.",
  },
];

export const projectsData = [
  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    description: "Enterprise backend system for multi-level warehouse inventory tracking, real-time stock allocation, automated replenishment workflows, and asynchronous service event handling.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Apache Kafka", "REST APIs", "Pytest"],
    github: "https://github.com/Balajiyagateela",
    demo: null,
    highlights: [
      "Multi-Tier Warehouse Architecture: Engineered modular RESTful APIs for real-time warehouse inventory tracking, item categorization, and automated threshold alerts.",
      "Concurrency & Optimistic Locking: Modeled PostgreSQL schemas with SQLAlchemy ORM, employing transactional integrity and optimistic locking to prevent race conditions during concurrent stock updates.",
      "Event-Driven Replenishment: Integrated Kafka message consumers to orchestrate asynchronous stock replenishment triggers, verified through automated Pytest test suites.",
    ],
  },
  {
    id: "ecommerce-application",
    title: "E-Commerce Application",
    description: "Full-stack web application featuring interactive product discovery, stateful cart management, authenticated checkout workflows, and modular API endpoints.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
    github: "https://github.com/Balajiyagateela",
    demo: null,
    highlights: [
      "Modular Server Architecture: Implemented RESTful Express.js and Node.js routes for product catalog browsing, cart operations, and session verification.",
      "Document-Oriented Data Modeling: Designed structured MongoDB document collections with schema validation for product catalogs, customer profiles, and order histories.",
      "Reactive Client Interface: Built dynamic React.js frontend components for category filtering, shopping cart state synchronisation, and responsive UI.",
    ],
  },
];
