/**
 * Experience module
 * Renders work experience as git-log style entries
 */

function initExperience() {
  const container = document.getElementById("experience-container");
  if (!container) return;

  const experiences = [
    {
      id: 1,
      title: "LLM Trainer",
      company: "Outlier",
      period: "November 2025 - February 2026",
      description:
        "Worked as an LLM trainer in Toronto, focusing on improving large language model outputs through reinforcement learning from human feedback.",
      responsibilities: [
        "Improved LLM outputs using RLHF methodologies, focusing on reasoning accuracy and response quality.",
        "Evaluated model outputs for factual correctness, logical consistency, and linguistic precision.",
      ],
      technologies: [
        "RLHF",
        "LLM",
        "Model Evaluation",
        "AI/ML",
      ],
    },
    {
      id: 2,
      title: "Full-Stack Developer Intern",
      company: "AI Financial Company",
      period: "September 2025 - January 2026",
      description:
        "A financial technology company in Toronto that helps people apply for loans and manage investments with minimal risk.",
      responsibilities: [
        "Developed backend and frontend features using Spring Boot, JavaScript, and Docker, improving deployment consistency across Azure environments.",
        "Built and deployed services in a containerized CI/CD pipeline, reducing environment-related issues.",
        "Implemented JUnit and Mockito test suites, reducing post-release defects by 30%.",
        "Collaborated in Agile team (13 developers) using Jira and Git workflows.",
      ],
      technologies: [
        "Spring Boot",
        "JavaScript",
        "Docker",
        "Azure",
        "CI/CD",
        "JUnit",
        "Mockito",
        "Jira",
        "Git",
        "Agile/Scrum",
      ],
    },
    {
      id: 3,
      title: "Software Developer",
      company: "SparkEyes",
      period: "January 2025 - October 2025",
      description:
        "A cross-platform mobile app designed to help users connect for dating, friendship, and professional networking, prioritizing social connectivity and meaningful interactions.",
      responsibilities: [
        "Led development of a cross-platform mobile app using Flutter and BLoC, improving scalability and maintainability.",
        "Designed backend integrations with Spring Boot and REST APIs, ensuring reliable communication with mobile clients.",
        "Integrated Firebase services for real-time data and authentication.",
        "Worked in Agile/Scrum, managing tasks via Jira and contributing to UI design using Figma.",
      ],
      technologies: [
        "Flutter",
        "BLoC",
        "Spring Boot",
        "REST APIs",
        "Firebase",
        "Jira",
        "Figma",
        "Agile/Scrum",
        "Android",
        "iOS",
      ],
    },
    {
      id: 4,
      title: "Full-Stack Developer",
      company: "Falcon",
      period: "May 2024 - June 2024",
      description:
        "Developed a modern portfolio website for a company to manage and share projects with clients.",
      responsibilities: [
        "Optimized website layouts and navigation using HTML, CSS, JavaScript, and Flutter.",
        "Implemented API endpoints using Rust with the Axum framework.",
        "Deployed the project to Amazon Web Services (AWS).",
        "Containerized the project using Docker and various images.",
      ],
      technologies: [
        "Flutter",
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Sea ORM",
        "Rust - Axum",
        "AWS",
        "Docker",
      ],
    },
    {
      id: 5,
      title: "Back-end Developer (Pet Project)",
      company: "Donutly",
      period: "October 2024 - Present",
      description:
        "A personal open-source library where users can add and read books they've read. The project encourages open contributions to resolve existing issues under a specified license.",
      responsibilities: [
        "Developed backend services using Spring Boot.",
        "Built frontend components with TypeScript.",
        "Managed CI/CD pipelines with GitHub Actions.",
        "Deployed and containerized the application using Docker and Kubernetes.",
        "Implemented secure user authentication with JWT and OAuth 2.0.",
        "Managed databases and caching with PostgreSQL and Redis.",
        "Utilized AWS services like EC2 and S3 for hosting and storage.",
        "Configured Nginx as a reverse proxy.",
      ],
      technologies: [
        "Spring Boot",
        "TypeScript",
        "GitHub Actions",
        "Docker",
        "AWS (EC2, S3)",
        "JWT",
        "OAuth 2.0",
        "REST API",
        "Nginx",
        "Kubernetes",
        "Redis",
        "PostgreSQL",
      ],
    },
    {
      id: 6,
      title: "Back-end Developer (Pet Project)",
      company: "Chat Application",
      period: "August 2024 - October 2024",
      description:
        "A practice project to develop an end-to-end encrypted chat application.",
      responsibilities: [
        "Implemented JWT (JSON Web Tokens) for secure user authentication.",
        "Designed and maintained RESTful APIs to support front-end interactions.",
        "Managed data using SeaORM and PostgreSQL for efficient storage and retrieval.",
        "Developed WebSockets for smooth, real-time communication.",
      ],
      technologies: [
        "Rust-Axum",
        "RSA Encryption",
        "Socketioxide",
        "JWT",
        "Docker",
        "PostgreSQL",
      ],
    },
    {
      id: 7,
      title: "Back-end Developer (Pet Project)",
      company: "Blogging Website",
      period: "July 2024 - August 2024",
      description:
        "A practice project for a blogging website, utilizing a broad technology stack.",
      responsibilities: [
        "Built a backend system with the Rust Axum framework and Sea-ORM.",
        "Developed a modern, secure, and efficient authentication system.",
        "Managed user authentication using OAuth 2.0 and Google Authorization Services.",
      ],
      technologies: [
        "Rust-Axum",
        "OAuth 2.0",
        "Amazon S3",
        "Docker",
        "Redis",
        "PostgreSQL",
      ],
    },
  ];

  renderGitLog(experiences, container);
}

/**
 * Renders experiences as git-log style entries
 */
function renderGitLog(experiences, container) {
  container.innerHTML = "";

  const hashes = ["f4a2c1d", "b7e3d9a", "c1f8e2b", "a9d4f7c", "e6b1a3d", "d2c9e5f", "8a7b6c1"];

  experiences.forEach((exp, index) => {
    const entry = document.createElement("div");
    entry.className = "git-log-entry";
    if (index >= 3) entry.classList.add("hidden-entry");

    const hash = hashes[index] || ("x" + exp.id + "a3b2c").substring(0, 7);
    const branchName = exp.company.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");

    entry.innerHTML = `
      <div class="git-log-header">
        <span class="git-hash">${hash}</span>
        <span class="git-branch">(${branchName})</span>
        <span class="git-msg">${exp.title} @ ${exp.company}</span>
        <span class="git-date">${exp.period}</span>
      </div>
      <div class="git-log-details" id="exp-details-${exp.id}">
        <p>${exp.description}</p>
        <div class="git-diff">
          ${exp.responsibilities.map(r => `<div class="diff-line">${r}</div>`).join("")}
        </div>
        <div class="tech-tags">${exp.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}</div>
      </div>
    `;

    // Click header to expand/collapse details
    const header = entry.querySelector(".git-log-header");
    header.addEventListener("click", (e) => {
      e.stopPropagation();
      const details = entry.querySelector(".git-log-details");
      details.classList.toggle("expanded");
    });

    container.appendChild(entry);
  });

  // Show More / Show Less button
  if (experiences.length > 3) {
    const showMoreBtn = document.createElement("button");
    showMoreBtn.className = "btn-show-more";
    showMoreBtn.textContent = "-- press ENTER for more --";
    container.appendChild(showMoreBtn);

    showMoreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      container.classList.toggle("timeline-expanded");
      if (container.classList.contains("timeline-expanded")) {
        showMoreBtn.textContent = "-- show less --";
      } else {
        showMoreBtn.textContent = "-- press ENTER for more --";
      }
    });
  }
}
