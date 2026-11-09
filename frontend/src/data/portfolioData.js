/**
 * Portfolio Data Configuration for Balaji Yagateela
 * Professional Identity: Python Backend Developer
 * 
 * Verifiable details directly from resume & project contributions.
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
  phone: "+91 63024 35600",
  location: "Hyderabad, Telangana, India",
  github: "https://github.com/Balajiyagateela",
  linkedin: "https://linkedin.com/in/balaji-yagateela-059922253",
  photoUrl: "/balaji-photo.jpg",
  resumeUrl: "/Balaji_Yagateela_Resume.pdf",
};

export const heroContent = {
  headline: "Python Backend Developer",
  subtitle: "Specializing in scalable REST APIs, event-driven architectures using Kafka, and reliable PostgreSQL data persistence.",
  supportingText: "Committed to building clean, maintainable backend services with robust testing, structured database modeling, and production-ready architectures.",
};

export const aboutContent = {
  headline: "Engineering Focus & Background",
  summary: "Backend developer with professional experience building and testing REST APIs, database schemas, and distributed messaging pipelines. Focused on engineering reliable software systems through modular service architecture, clean database normalization, and automated test-driven practices.",
  corePillars: [
    {
      title: "Backend & API Architecture",
      desc: "Designing modular, stateless RESTful APIs using Python and FastAPI with strict Pydantic contract validation, structured response schemas, and clean error boundaries.",
    },
    {
      title: "Database Modeling & Consistency",
      desc: "Modeling normalized PostgreSQL relational schemas, managing schema versions with Alembic migrations, and enforcing transactional ACID consistency with concurrency control.",
    },
    {
      title: "Testing, Debugging & Reliability",
      desc: "Writing comprehensive automated test suites using Pytest to prevent regressions, systematically debugging API contracts, and ensuring dependable software delivery.",
    },
  ],
};

export const skillsData = [
  {
    category: "Backend Development",
    description: "Core frameworks and runtimes used to build scalable, high-throughput REST APIs.",
    skills: [
      { name: "Python", isCore: true },
      { name: "FastAPI", isCore: true },
      { name: "REST APIs", isCore: true },
      { name: "Node.js", isCore: false },
      { name: "Express.js", isCore: false },
    ],
  },
  {
    category: "Databases",
    description: "Relational and document storage engines supporting transactional integrity.",
    skills: [
      { name: "PostgreSQL", isCore: true },
      { name: "MongoDB", isCore: false },
    ],
  },
  {
    category: "Event-Driven & Infrastructure",
    description: "Asynchronous messaging, in-memory caching layers, and container runtimes.",
    skills: [
      { name: "Apache Kafka", isCore: true },
      { name: "Redis", isCore: true },
      { name: "Docker", isCore: true },
    ],
  },
  {
    category: "Frontend",
    description: "Supporting frontend competencies applied for integration and full-stack development.",
    skills: [
      { name: "JavaScript", isCore: false },
      { name: "React.js", isCore: false },
      { name: "HTML", isCore: false },
      { name: "CSS", isCore: false },
    ],
  },
  {
    category: "Tools",
    description: "Developer tooling for version control, collaborative workflows, and environment management.",
    skills: [
      { name: "Git", isCore: true },
      { name: "GitHub", isCore: true },
      { name: "VS Code", isCore: true },
    ],
  },
];

export const projectsData = [
  {
    id: "eaicsp-inventory-service",
    title: "EAICSP – Inventory Management Service",
    module: "Backend Microservice Contribution",
    type: "Enterprise Inventory Service",
    badge: "Core Backend Project",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Apache Kafka", "Docker", "Pytest"],
    description: "A production-oriented backend service managing inventory operations, multi-level warehouse hierarchies, purchase order workflows, and event-driven service communication.",
    github: "https://github.com/Balajiyagateela",
    highlights: [
      {
        category: "Architecture",
        points: [
          "Developed multi-level warehouse inventory architecture across central, regional, and local tiers.",
          "Implemented PostgreSQL relational data modeling and managed database migrations with Alembic.",
        ],
      },
      {
        category: "Concurrency and Valuation",
        points: [
          "Applied optimistic locking to prevent race conditions during concurrent stock updates.",
          "Implemented FIFO and weighted-average inventory valuation methods for precise cost tracking.",
        ],
      },
      {
        category: "Event-Driven Processing and Testing",
        points: [
          "Built Kafka consumers to ingest and react to supplier compliance status events asynchronously.",
          "Wrote automated Pytest test suites covering API contracts and business logic to prevent regressions.",
        ],
      },
    ],
  },
  {
    id: "ecommerce-mern-app",
    title: "E-Commerce Web Application",
    module: "Full-Stack Web Project",
    type: "Secondary Full-Stack Application",
    badge: "Full-Stack Project",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
    description: "A full-stack e-commerce web application featuring user catalog browsing, shopping cart state management, and Express.js REST API endpoints.",
    github: "https://github.com/Balajiyagateela",
    highlights: [
      {
        category: "Backend API",
        points: [
          "Built RESTful API endpoints with Express.js to handle product catalog queries and cart operations.",
        ],
      },
      {
        category: "Database & Models",
        points: [
          "Structured MongoDB document collections for products, users, carts, and order entries.",
        ],
      },
      {
        category: "Client Integration",
        points: [
          "Connected a responsive React.js frontend to backend API routes for end-to-end cart checkout flow.",
        ],
      },
    ],
  },
];

export const experienceData = [
  {
    company: "Speshway Solutions Pvt. Ltd.",
    role: "Python Backend Developer",
    period: "Dec 2025 – Present",
    location: "Hyderabad, India",
    type: "Professional Experience",
    isCurrent: true,
    responsibilities: [
      "Developed and maintained RESTful APIs using Python, FastAPI, and Pydantic validation.",
      "Designed and integrated PostgreSQL database models using SQLAlchemy ORM, managing schema migrations with Alembic.",
      "Implemented Redis caching to optimize database query performance on frequently requested endpoints.",
      "Configured Apache Kafka consumer services to enable decoupled asynchronous communication across microservices.",
      "Wrote automated unit and integration tests using Pytest to ensure consistent contract reliability across development cycles.",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Apache Kafka", "Redis", "Docker", "Pytest", "SQLAlchemy", "Alembic", "Git"],
  },
  {
    company: "CSEdge",
    role: "Web Development Intern",
    period: "Oct 2024 – Nov 2024",
    location: "Remote",
    type: "Internship",
    isCurrent: false,
    responsibilities: [
      "Built responsive web components with HTML5, CSS3, and JavaScript, practicing DOM manipulation techniques.",
      "Gained hands-on exposure to team development workflows and version control with Git and GitHub.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
  },
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Narayana Engineering College, Gudur, Andhra Pradesh",
    year: "2020 – 2024",
    grade: "CGPA: 8.1 / 10",
    coursework: "Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks.",
  },
  {
    degree: "Intermediate – MPC (Mathematics, Physics, Chemistry)",
    institution: "LVR Junior College, Nellore, Andhra Pradesh",
    year: "2018 – 2020",
    grade: "CGPA: 9.1 / 10",
    coursework: "Mathematics, Physics, Chemistry with academic distinction.",
  },
];

export const achievementsData = [
  {
    title: "Project Expo Award",
    organization: "College-Level Technical Project Exhibition",
    description: "Awarded a prize at the college-level Project Expo for demonstrating a technically resilient software engineering solution.",
    badge: "Prize Winner",
  },
  {
    title: "NIPUNA Technical Skill Programme",
    organization: "AP State Technical Skill Development",
    description: "Participated in the state-level technical development initiative focused on industry-standard backend and software practices.",
    badge: "State-Level",
  },
];
