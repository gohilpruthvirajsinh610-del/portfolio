/*
 * =========================================
 *  PORTFOLIO CONFIGURATION
 * =========================================
 * This file contains all editable portfolio
 * content: personal information, skills,
 * projects, social links, journey, and more.
 *
 * You can update this file without changing
 * the main HTML structure.
 * =========================================
 */

const CONFIG = {
  // ========================================
  // PERSONAL INFORMATION
  // ========================================

  name: "Gohil Pruthvirajsinh",

  role: "BCA Graduate | Web Developer | IT Enthusiast",

  email: "gohilpruthvirajsinh610@gmail.com",

  heroIntro:
    "I enjoy building practical digital experiences, exploring modern technologies, and turning ideas into real-world projects.",

  // Optional short status displayed by some layouts
  availability: "Open to opportunities",

  // ========================================
  // ABOUT SECTION
  // ========================================

  about: {
    intro:
      "I'm a BCA graduate with a strong interest in web development, programming, databases, and modern technology. I enjoy understanding how applications work and turning ideas into practical projects.",

    enjoys:
      "I enjoy learning by building. Instead of only studying concepts theoretically, I prefer creating projects, experimenting with different technologies, solving problems, and improving my work step by step.",

    learning:
      "I'm continuously expanding my technical knowledge by working with technologies such as JavaScript, PHP, Python, React, MySQL, and MongoDB while strengthening my understanding of software development fundamentals.",

    exploring:
      "I'm currently exploring different areas of IT while building practical projects and developing the skills needed to grow into a professional software and technology career.",
  },

  // ========================================
  // CURRENTLY EXPLORING
  // ========================================

  currentlyExploring: [
    "React JS",
    "JavaScript",
    "Python",
    "MongoDB",
    "Web Development",
    "AI-Assisted Development",
    "Building Practical Projects",
  ],

  // ========================================
  // SOCIAL LINKS
  // ========================================
  // Replace "#" with your actual profile
  // URLs when your accounts are ready.

  social: {
    github: "https://github.com/gohilpruthvirajsinh610-del",
    linkedin: "https://www.linkedin.com/in/pruthvirajsinh-gohil-547a07276?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/pruthvirajsinh_3110?stkn=ZHd4ZThsdjBmOW9h",
  },

  // GitHub username
  // Leave empty until your GitHub account
  // and profile are ready.

  githubUsername: "https://github.com/gohilpruthvirajsinh610-del",

  // ========================================
  // RESUME
  // ========================================

  resumePath: "assets/resume.pdf",

  // ========================================
  // SKILLS
  // ========================================

  skills: {
    programming: [
      "JavaScript",
      "PHP",
      "Python",
    ],

    web: [
      "HTML5",
      "CSS3",
      "React JS",
      "jQuery",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Web Design",
      "Web Development",
    ],

    database: [
      "MySQL",
      "MongoDB",
    ],

    tools: [
      "CodeIgniter",
      "Git & GitHub",
      "VS Code",
      "AI-Assisted Development",
      "Debugging & Troubleshooting",
      "Problem-Solving",
      "Communication",
    ],
  },

  // ========================================
  // PROJECTS
  // ========================================

  projects: [
    {
      id: 1,

      title: "Portfolio Website",

      description:
      "A full-stack personal portfolio website built to showcase my technical skills, projects, learning journey, and professional interests, with a React-based frontend and MongoDB-powered backend.",

      image: "assets/images/portfolio.png",

      technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      ],

      features: [
      "Responsive modern UI with dark / light theme",
      "Dynamic content rendering with React.js",
      "MongoDB-powered portfolio data management",
      "Functional contact form with backend integration",
      "Interactive projects, skills, and journey sections",
      "Node.js and Express.js REST API integration",
      ],

      github: "#",

      live: "#",

      category: "web",

      isPlaceholder: false,
    },

    {
      id: 2,

      title: "BoozeHub",

      description:
      "A full-stack PHP e-commerce web application for browsing and purchasing products, featuring user authentication, category-based shopping, session-based cart management, checkout, order processing, inventory tracking, and a dedicated admin management system.",

      image: "assets/images/boozehub.png",

      technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      ],

      features: [
      "User authentication with secure password hashing",
      "Product browsing and category-based filtering",
      "Session-based shopping cart with stock management",
      "Checkout, order processing, and receipt generation",
      "Automatic inventory and stock management",
      "Admin dashboard with product, customer, and order management",
      ],

      github: "#",

      live: "#",

      category: "web",

      isPlaceholder: false,
    },

    {
      id: 3,

      title: "Cafforia",

      description:
      "A café website project concept combining a vintage-inspired visual identity with modern web design, planned as a full-stack application using React.js and MongoDB.",

      image: "assets/images/project-placeholder-1.svg",

      technologies: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "Tailwind CSS",
      ],

      features: [
      "Vintage-meets-modern visual design",
      "Responsive multi-page architecture",
      "Interactive café menu",
      "Dynamic content architecture",
      "MongoDB database integration",
      "Modern React-based user interface",
      ],

      github: "#",

      live: "#",

      category: "react",

      isPlaceholder: true,
    },
  ],

  // ========================================
  // JOURNEY / TIMELINE
  // ========================================

  journey: [
    {
      title: "BCA Graduate",

      description:
        "Completed Bachelor of Computer Applications and developed a foundation in programming, computer applications, databases, and web technologies.",
    },

    {
      title: "Building Technical Skills",

      description:
        "Developed practical knowledge of HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, Tailwind CSS, jQuery, and CodeIgniter through learning and project work.",
    },

    {
      title: "Building Personal Projects",

      description:
        "Started creating practical projects to apply technical concepts, experiment with different technologies, understand application architecture, and improve problem-solving skills.",
    },

    {
      title: "Exploring Modern Development",

      description:
        "Expanding into React JS, MongoDB, Python, and modern development workflows while learning how different technologies can be combined to build useful applications.",
    },

    {
      title: "Exploring Different Areas of IT",

      description:
        "Learning about different areas of the IT industry and developing a broader understanding of software development, data, AI, and other technology-related career paths.",
    },

    {
      title: "Looking Ahead",

      description:
        "Looking for opportunities to gain professional experience, contribute to real-world projects, learn from experienced people, and continue developing as a technology professional.",
    },
  ],

  // ========================================
  // PORTFOLIO STATS
  // ========================================
  // These can be connected to the UI later.
  // Keep the values realistic and update them
  // as your portfolio grows.

  stats: {
    projects: 4,
    technologies: 15,
    certifications: 3,
    experience: "Learning & Building",
  },

  // ========================================
  // CONTACT SECTION
  // ========================================

  contact: {
    title: "Let's Connect",

    description:
      "Have a project idea, opportunity, or simply want to connect? Feel free to reach out.",

    responseNote:
      "I'm always open to learning, collaborating, and discussing interesting ideas.",
  },

  // ========================================
  // FOOTER
  // ========================================

  footer: {
    text: "Built with curiosity, creativity, and continuous learning.",

    copyrightName: "Gohil Pruthvirajsinh",
  },
};