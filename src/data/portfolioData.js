export const portfolioData = {
  personal: {
    name: "Angel Bhagnani",
    role: "B.Tech Student",
    title: "AI & Technology Enthusiast",
    tagline: "Building Practical Solutions with Modern Tech, Artificial Intelligence & Web Development",
    college: "JECRC University",
    degree: "Bachelor of Technology (B.Tech)",
    location: "Arain (Ajmer), Rajasthan, India",
    email: "bhagnaniangel440@gmail.com",
    github: "https://github.com/angelbhagnani",
    linkedin: "https://linkedin.com/in/angelbhagnani",
    availability: "Available for Projects & Tech Internships",
    shortBio: "B.Tech student at JECRC University passionate about Artificial Intelligence, Modern Web Development, and Digital Productivity. Actively learning contemporary technologies and building practical, user-centric projects."
  },

  about: {
    heading: "Bridging Curiosity & Engineering",
    paragraphs: [
      "Hello! I am Angel Bhagnani, an aspiring engineer and tech enthusiast currently pursuing my B.Tech degree at JECRC University, coming from Arain (Ajmer), India. I am passionate about how modern software and intelligent algorithms can transform daily productivity and solve real-world challenges.",
      "My journey focuses on Artificial Intelligence, Generative AI models, Full-Stack Web Development, and Digital Productivity workflows. Rather than just understanding concepts in theory, I prioritize hands-on execution — building functional projects, refining UI/UX designs, and writing clean, scalable code.",
      "I am an enthusiastic learner who constantly explores new tech stacks, tools, and best practices. When I'm not coding or studying, I enjoy optimizing digital workflows, learning about breakthrough AI research, and collaborating with fellow developers."
    ],
    stats: [
      { label: "Degree Path", value: "B.Tech" },
      { label: "Institution", value: "JECRC Univ." },
      { label: "Tech Focus", value: "AI & Web Dev" },
      { label: "Commitment", value: "100% Practical" }
    ],
    coreValues: [
      {
        title: "Hands-on Building",
        description: "Transforming every theoretical concept into a functional, deployed software project."
      },
      {
        title: "AI & Future Tech",
        description: "Leveraging generative models and intelligent algorithms to augment human capability."
      },
      {
        title: "Clean UI/UX Design",
        description: "Crafting intuitive, accessible, and responsive user experiences with modern design principles."
      },
      {
        title: "Continuous Evolution",
        description: "Staying updated with fast-moving industry standards, frameworks, and developer tooling."
      }
    ]
  },

  education: {
    institution: "JECRC University",
    degree: "Bachelor of Technology (B.Tech)",
    timeline: "2023 - 2027 (Currently Pursuing)",
    location: "Jaipur, Rajasthan, India",
    description: "Engaged in an intensive undergraduate curriculum combining core computer science fundamentals with emerging technologies. Actively applying classroom concepts to build real-world software applications and participating in developer workshops.",
    learningAreas: [
      { name: "Artificial Intelligence & ML", level: "Core Track", icon: "Brain" },
      { name: "Full-Stack Web Development", level: "Practical Track", icon: "Globe" },
      { name: "Data Structures & Algorithms", level: "Foundational", icon: "Code" },
      { name: "Object Oriented Programming", level: "Foundational", icon: "Boxes" },
      { name: "Database Management (SQL)", level: "Foundational", icon: "Database" },
      { name: "Digital Productivity & Tooling", level: "Applied", icon: "Zap" }
    ],
    highlights: [
      "Rigorous hands-on laboratory sessions and algorithmic problem solving",
      "Active participant in technical symposiums, hackathons, and peer code reviews",
      "Specialized coursework in modern web technologies and intelligent systems"
    ]
  },

  skills: [
    {
      name: "HTML",
      category: "Frontend",
      level: 90,
      badge: "Semantic HTML5",
      description: "Clean semantic markup, SEO best practices, accessibility (a11y), and modern standards.",
      icon: "Code"
    },
    {
      name: "CSS",
      category: "Frontend",
      level: 88,
      badge: "CSS3 & Tailwind",
      description: "Responsive layouts, Flexbox/Grid, CSS custom variables, keyframe animations, and Tailwind styling.",
      icon: "Palette"
    },
    {
      name: "JavaScript",
      category: "Core Tech",
      level: 85,
      badge: "ES6+ Modern JS",
      description: "Modern ECMAScript features, async/await, DOM manipulation, promises, and modular code.",
      icon: "FileCode2"
    },
    {
      name: "Python",
      category: "Core Tech",
      level: 82,
      badge: "Python 3 & Scripting",
      description: "Data handling, algorithm design, automation scripting, and foundations for machine learning.",
      icon: "Terminal"
    },
    {
      name: "Artificial Intelligence",
      category: "AI & Future Tech",
      level: 78,
      badge: "AI Systems",
      description: "Core AI concepts, machine learning fundamentals, intelligent workflows, and data processing.",
      icon: "Cpu"
    },
    {
      name: "Generative AI",
      category: "AI & Future Tech",
      level: 84,
      badge: "LLMs & Prompts",
      description: "Prompt engineering, LLM integration, generative workflows, API usage, and AI-assisted productivity.",
      icon: "Sparkles"
    },
    {
      name: "Web Development",
      category: "Frontend",
      level: 86,
      badge: "Full-Stack Mindset",
      description: "Component-based architecture (React), SPA routing, responsive design, and deployment pipelines.",
      icon: "Globe2"
    },
    {
      name: "Digital Productivity",
      category: "Productivity",
      level: 92,
      badge: "Workflow Mastery",
      description: "Git/GitHub version control, Notion workspace management, Markdown documentation, and dev efficiency.",
      icon: "CheckSquare"
    }
  ],

  projects: [
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      tagline: "Modern, high-performance personal developer portfolio",
      shortDescription: "A complete, modern personal portfolio website built with React, Vite, and Tailwind CSS. Features dark/light themes, sleek glassmorphism, responsive navigation, and interactive project showcases.",
      fullDescription: "Designed and engineered as a showcase of modern frontend practices. Includes fluid animations, an accessible dark/light mode toggle, dynamic skill visualization, a categorized achievements section, and an interactive contact interface. Fully optimized for production deployment on Vercel.",
      technologies: ["React", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "Lucide Icons"],
      features: [
        "Fully responsive mobile-first architecture with interactive hamburger menu",
        "Dark & Light mode support with persistent state in local storage",
        "Interactive project deep-dive modals with live previews and feature breakdowns",
        "Built-in contact form with instant validation, simulated response, and direct mailto fallback",
        "Production-ready bundle with zero console errors and fast asset loading"
      ],
      category: "Web Development",
      status: "Featured Project",
      date: "2024",
      liveUrl: "#",
      githubUrl: "https://github.com/angelbhagnani/portfolio-website",
      color: "from-indigo-500 to-cyan-500"
    },
    {
      id: "ai-website-project",
      title: "AI Website Project",
      tagline: "Intelligent web application powered by Generative AI",
      shortDescription: "An intelligent web application integrating modern Artificial Intelligence and Generative AI features with a responsive, intuitive interface for prompt engineering, smart content generation, and AI-assisted workflows.",
      fullDescription: "Explores the intersection of modern frontend UI and generative intelligence. Features curated prompt libraries, structured content generation, code explanations, and natural language query processing. Designed with a clean cyber-dashboard aesthetic and quick-copy responses.",
      technologies: ["Python", "GenAI APIs", "React", "Tailwind CSS", "RESTful APIs"],
      features: [
        "Prompt engineering studio with pre-engineered templates for coding, study, and creative writing",
        "Real-time streaming simulation with syntax-highlighted code blocks",
        "Clean, distraction-free conversational UI with dark mode ergonomics",
        "Client-side caching and efficient query payload handling"
      ],
      category: "Artificial Intelligence",
      status: "Active Project",
      date: "2024",
      liveUrl: "#",
      githubUrl: "https://github.com/angelbhagnani/ai-website-project",
      color: "from-cyan-500 to-violet-500"
    },
    {
      id: "student-productivity-project",
      title: "Student Productivity Project",
      tagline: "All-in-one digital workspace & academic workflow optimizer",
      shortDescription: "A comprehensive digital productivity suite tailored for university students. Features an interactive study tracker, assignment deadline manager, Pomodoro focus timer, and digital note organizer.",
      fullDescription: "Built specifically to solve common university pain points: keeping track of academic coursework, managing study time effectively, and maintaining high focus. Combines an interactive Pomodoro timer with Kanban task tracking and daily streak metrics.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "LocalStorage API", "Productivity UI"],
      features: [
        "Customizable Pomodoro focus timer with session logs and audio cues",
        "Coursework tracker with status badges (To-Do, In Progress, Submitted)",
        "Persistent offline storage using browser LocalStorage for privacy and speed",
        "Daily focus statistics and visual streak counter"
      ],
      category: "Digital Productivity",
      status: "Featured Project",
      date: "2024",
      liveUrl: "#",
      githubUrl: "https://github.com/angelbhagnani/student-productivity-suite",
      color: "from-violet-500 to-emerald-500"
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Python for AI & Data Exploration",
      category: "Certifications",
      issuer: "Online Learning Platform",
      date: "2024",
      description: "Completed comprehensive coursework covering Python syntax, data structures, scripting, and introductory scientific libraries.",
      badge: "Certified"
    },
    {
      id: "ach-2",
      title: "Generative AI Foundations & Prompt Engineering",
      category: "Courses",
      issuer: "Tech Academy / Industry Specialization",
      date: "2024",
      description: "Mastered fundamental concepts of Large Language Models (LLMs), prompt crafting techniques, tokenization, and ethical AI deployment.",
      badge: "Coursework"
    },
    {
      id: "ach-3",
      title: "University Tech Hackathon Contender",
      category: "Hackathons",
      issuer: "JECRC University Tech Fest",
      date: "2024",
      description: "Collaborated in an intensive 24-hour sprint designing a web-based prototype addressing student academic collaboration challenges.",
      badge: "Hackathon"
    },
    {
      id: "ach-4",
      title: "Academic Excellence & Continuous Learning",
      category: "Awards",
      issuer: "Department of Computer Science & Engineering",
      date: "2023 - Present",
      description: "Consistently recognized for enthusiastic engagement in technical labs, algorithmic coursework, and peer mentoring.",
      badge: "Recognition"
    },
    {
      id: "ach-5",
      title: "Modern Frontend Web Development Sprint",
      category: "Certifications",
      issuer: "Self-Paced Specialization",
      date: "2024",
      description: "Built and deployed multiple responsive web applications utilizing modern JavaScript (ES6+), React component architecture, and Tailwind CSS.",
      badge: "Milestone"
    },
    {
      id: "ach-6",
      title: "Digital Productivity & System Architecture Workshop",
      category: "Other",
      issuer: "Student Developer Community",
      date: "2024",
      description: "Participated in specialized workshops on Git workflow, terminal mastery, Notion systems, and developer ergonomics.",
      badge: "Workshop"
    }
  ]
};
