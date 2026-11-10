/**
 * Portfolio Data Configuration for Balaji Yagateela
 * Antigravity 3.8 Refinement
 */

export const personalDetails = {
  name: "Balaji Yagateela",
  fullName: "Yagateela Balaji",
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
  tagline: "Building reliable backend applications and practical web solutions using Python, FastAPI, databases, and modern web technologies.",
  availability: "Available for backend opportunities",
};

export const aboutContent = {
  description: "I am a software developer focused on building backend applications and practical web solutions. I work with Python, FastAPI, databases, React, and the MERN stack. I enjoy understanding how applications work end to end, solving problems, and continuously improving my development skills.",
  highlights: [
    { title: "Backend Development", desc: "Constructing modular and scalable backend services with Python and FastAPI." },
    { title: "REST API Development", desc: "Designing structured, contract-driven REST APIs with clean request/response schemas." },
    { title: "Database Integration", desc: "Modeling normalized PostgreSQL databases and handling queries with SQLAlchemy." },
    { title: "Full-Stack Development", desc: "Connecting robust server-side APIs to responsive React and MERN frontend clients." },
    { title: "Continuous Learning", desc: "Exploring event streaming with Kafka, containerization, and modern architecture." },
  ],
};

export const skillsCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript"],
  },
  {
    category: "Backend Development",
    skills: ["FastAPI", "REST APIs", "API Integration", "Authentication"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Frontend Development",
    skills: ["React", "HTML", "CSS", "Bootstrap"],
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
      "Developed and maintained RESTful APIs using Python and FastAPI, handling request validation and structured endpoints.",
      "Designed and integrated PostgreSQL database models using SQLAlchemy, managing relational schemas and query optimizations.",
      "Implemented service communication workflows and asynchronous event handling logic with Apache Kafka.",
      "Conducted backend debugging and automated test validation with Pytest to guarantee consistent API reliability.",
      "Collaborated actively in team code reviews, Git pull-request workflows, and maintained clean system documentation.",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Kafka", "REST APIs", "Git"],
  },
  {
    company: "CSEdge",
    role: "Web Development Intern",
    period: "Oct 2024 – Nov 2024",
    location: "Remote",
    type: "Internship",
    responsibilities: [
      "Built responsive web components with HTML5, CSS3, and JavaScript, practicing DOM manipulation techniques.",
      "Gained hands-on experience in collaborative version control, task tracking, and team workflows using Git and GitHub.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "DOM", "Git", "GitHub"],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "Narayana Engineering College, Gudur",
    period: "2021 – 2025",
    description: "Core coursework in Data Structures, Database Systems (DBMS), Operating Systems, and Computer Networks.",
  },
  {
    degree: "Intermediate",
    field: "MPC (Mathematics, Physics, Chemistry)",
    institution: "LVR Junior College, Nellore",
    period: "2019 – 2021",
    description: "Foundational mathematics and physical sciences with high academic standing.",
  },
];

export const projectsData = [
  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    description: "Developed backend functionality for inventory management, including stock tracking, REST API integration, replenishment recommendations, and service communication.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "REST APIs", "Kafka"],
    github: "https://github.com/Balajiyagateela",
    demo: null,
    highlights: [
      "Engineered core inventory REST endpoints for multi-tier warehouse stock tracking and balance calculations.",
      "Modeled relational schemas and transactions in PostgreSQL with SQLAlchemy ORM and concurrency safeguards.",
      "Integrated Kafka event consumers to react to stock replenishment triggers and service-to-service updates.",
    ],
  },
  {
    id: "ecommerce-application",
    title: "E-Commerce Application",
    description: "Developed a full-stack e-commerce application using the MERN stack, with product management, user interactions, and database integration.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
    github: "https://github.com/Balajiyagateela",
    demo: null,
    highlights: [
      "Built RESTful server routes in Express.js and Node.js for product catalog queries, cart management, and user sessions.",
      "Structured document collections in MongoDB with schemas for catalog items, customer shopping carts, and orders.",
      "Created an interactive client-side experience with React components for dynamic catalog filtering and checkout.",
    ],
  },
];
