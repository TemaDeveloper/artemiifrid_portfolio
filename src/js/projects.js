/**
 * Projects module
 * Handles projects display with terminal-style cards and filtering
 */

function initProjects() {
  const projectsContainer = document.querySelector(".projects-grid");
  const filterButtons = document.querySelectorAll(".filter-cmd");

  if (!projectsContainer) return;

  const placeholderImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAwFBMVEUAAABKh8FGgsJKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8F5rwCEAAAAP3RSTlMAAQMFBgcICgwOEBETFRcaHB4gIiQoMDI0Njg6PD5AQkRITlBSVFpcXmJmcHJ0d3p8f4KIjpSaoqqwvMTM2OTgjoBNAAAEFUlEQVR42uzXQWrCQBjG8W9COk1a2sVsCiIuuuqmq4qubL3/qcqQTQsiFMxMmIH3/xtIePhgHiYCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICJWVp6sWBq7pdqdW9QT7dXqssbs5p5plY5aNSdg9rmaMas5qVanTOoH6pLZVZzV6lVPdS62bwys1lYdFq1fnx59R6ddvfGzOZWYVjjW1iGZnbbKn0YR/+XiKrVvKrTD4WY+kq9zE3Hrw/jyV/3VPOmu0QitTvrblV3Qy1lt8+6ezaLOpz0d6tJoEiUaX79G6ljqmdXC72anJFaJnpWZaRW8/+5Xf8geha1P99/JHpqD8OPf/31ZNKz+bD/iOh5oGdET+Njt/9I9PTUFwzreJf/Rj2n9XXA1S6rnrOCfttF9JyqQP+LiJ5nPdOIni966kT0vOuZlfXUZzXbi+ipLurZWdFNLaJnzNcw5Gu4vqr51FuhZ9TTczqRnopHz46enkdPT8+jp+fR0/PoCcCg02q2SktpUG0qnkfv2zNe70j/5XT4u56tXY+ed0XPl6X/t+eZnglLacdTpN12PD2vGz20HU+RH5i246mmPbc9V9ZT2/P07LXtebqMoO15imzA2/HU8bXteXoO2vF0vZTanqfnsW3P0/UZats7yTOdK+vpefS8K3rGtUmfnNKTpkee9/3oPfqmMT2dflNKg55uny6lKT2bHnN6Mt95Ok9S+dLzXHp6Hj09j56eR0/Po+c5PY+ez+n5nJ5nFPSM6Rnpuarn+UDPBz3P6HlGz+f0fE7PM3o+p+dzes7pOafnczqaTE/PuDyfJ6vdcpee1iOi5zd6fqPnYsz3cDFu6bkY0xOAUau+qlttbhtvVnclUFqu7+qW20bdltvcIlCaFe0tN23VrV0kJQUK1Wrz8nG9TZt1lbRMoFxu9frSaWt8UMppkoDQMi0+OvXjZp0WaVo3TaA8mc2TenOXxI+70zpdxcvVLF7Mk3SWJxAoLmdpnqf1y/Jj+zGqj+Wo3tyvdm+SawAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAaXkDlCoqJ8x0pAMAAAAASUVORK5CYII=";

  const projects = [
    {
      id: 1,
      title: "Reflectif",
      description:
        "A Gen AI application featuring a custom \"Backboard\" RAG system for storing long-term conversational memory and enabling context-aware responses. Includes data pipelines linking user memory to inference, Gemini API integration for automated onboarding, and a chat system between users and AI for continuous, personalized interaction.",
      image: "assets/reflectif.png",
      category: "backend",
      technologies: [
        "RAG",
        "Gemini API",
        "LLM",
        "Python",
        "Data Pipelines",
        "AI/ML",
      ],
      liveLink: "https://reflectif.org/",
      sourceLink: "https://github.com/kechprog/cxc",
    },
    {
      id: 2,
      title: "AI Financial Company",
      description:
        "Developed backend and frontend features for a Toronto-based financial company that helps clients apply for loans and manage investments. Built and deployed services in a containerized CI/CD pipeline, implemented JUnit and Mockito test suites reducing post-release defects by 30%, and collaborated in an Agile team of 13 developers.",
      image: "assets/ai-financial-logo.jpg",
      category: "web",
      technologies: [
        "Spring Boot",
        "JavaScript",
        "Docker",
        "Azure",
        "CI/CD",
        "JUnit",
        "Mockito",
        "REST API",
        "Agile/Scrum",
      ],
      liveLink: "https://aifinancial.ca/",
      sourceLink: "",
    },
    {
      id: 3,
      title: "SparkEyes",
      description:
        "Led development of a cross-platform mobile app using Flutter and BLoC for both iOS and Android, enhancing social connectivity through innovative features. Designed backend integrations with Spring Boot and REST APIs, integrated Firebase for real-time data and authentication, and contributed to UI design using Figma in an Agile/Scrum environment.",
      image: "assets/logo.jpg",
      category: "mobile",
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
      liveLink: "https://spark-eyes.com/",
      sourceLink: "",
    },
    {
      id: 4,
      title: "Donutly (Open-Source)",
      description:
        "An open-source personal library where users can add and share books they have read. The project is designed to be a collaborative platform, encouraging community contributions to improve its features and resolve issues under an open-source license.",
      image: "assets/donutly-logo.png",
      category: "web",
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
      liveLink: "",
      sourceLink: "https://github.com/TemaDeveloper/library_proj",
    },
    {
      id: 5,
      title: "Modern Portfolio",
      description:
        "A website for a construction company to automatically manage, update, and share projects with clients. Features include filtering by date and location, and a clean, modern user interface.",
      image: "assets/portfolio.png",
      category: "web",
      technologies: [
        "Rust - Axum",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Flutter",
        "AWS",
        "Docker",
        "Amazon S3",
      ],
      liveLink: "",
      sourceLink:
        "https://github.com/TemaDeveloper/portfolio_volodymyr_constructor_company",
    },
    {
      id: 6,
      title: "Spectra (Pet Project)",
      description:
        "An end-to-end encrypted chat application where users can communicate privately within groups and one-on-one. The project focuses on robust security and real-time messaging.",
      image: "assets/spectra.png",
      category: "backend",
      technologies: [
        "RSA encryption",
        "Rust - Axum",
        "JWT",
        "WebSockets - Socketioxide",
        "Amazon S3",
        "Redis",
        "PostgreSQL",
      ],
      liveLink: "",
      sourceLink: "https://github.com/TemaDeveloper/spectra",
    },
    {
      id: 7,
      title: "Blog Project (Pet Project)",
      description:
        "A backend project focused on establishing secure authentication and authorization services using OAuth 2.0. It serves as a foundational service for a blogging platform.",
      image: "assets/auth.png",
      category: "backend",
      technologies: [
        "OAuth 2.0",
        "Rust - Axum",
        "Amazon S3",
        "Docker",
        "PostgreSQL",
        "Redis",
      ],
      liveLink: "",
      sourceLink: "https://github.com/TemaDeveloper/blog_proj",
    },
    {
      id: 8,
      title: "BusTourApp",
      description:
        "Developed a demo guide app as a freelance project for a startup. The application provides tour information and leverages a robust backend for data management.",
      image: "assets/bustourapp.png",
      category: "mobile",
      technologies: [
        "Java - Android",
        "Rust",
        "REST API",
        "JWT",
        "Docker",
        "PostgreSQL",
      ],
      liveLink: "",
      sourceLink: "",
    },
    {
      id: 9,
      title: "CookeryDays",
      description:
        "A cooking application where users can upload, share, like, and save their favorite recipes. The app features a beautiful UI and a robust backend to attract and retain users.",
      image: "assets/cookery-days.png",
      category: "mobile",
      technologies: [
        "Flutter",
        "PocketBase",
        "Android",
        "iOS",
        "REST API",
        "Material Design",
        "UI/UX",
      ],
      liveLink: "",
      sourceLink: "https://github.com/TemaDeveloper/flutter_demo",
    },
    {
      id: 10,
      title: "NightCaps",
      description:
        "A startup project to help people improve their sleep. The application includes features for contacting psychologists and taking surveys, as part of its comprehensive suite of wellness services.",
      image: "assets/nightcaps_logo.png",
      category: "web",
      technologies: ["Flutter", "iOS", "Web", "Firebase", "Jira"],
      liveLink: "",
      sourceLink: "",
    },
  ];

  // Render all projects initially
  renderProjects(projects, projectsContainer);

  // Add filter functionality
  if (filterButtons.length > 0) {
    addFilterFunctionality(filterButtons, projects, projectsContainer);
  }
}

/**
 * Renders projects as terminal-style cards
 */
function renderProjects(projects, container) {
  container.innerHTML = "";

  if (projects.length === 0) {
    container.innerHTML =
      '<p class="no-projects">No files found matching the selected filter.</p>';
    return;
  }

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.setAttribute("data-category", project.category);

    const linksHTML =
      project.liveLink || project.sourceLink
        ? `
            <div class="project-overlay">
                <div class="project-links">
                    ${project.liveLink
                      ? `<a href="${project.liveLink}" class="project-link" target="_blank" title="View Live">
                        <i class="fas fa-external-link-alt"></i>
                    </a>`
                      : ""}
                    ${project.sourceLink
                      ? `<a href="${project.sourceLink}" class="project-link" target="_blank" title="View Source">
                        <i class="fab fa-github"></i>
                    </a>`
                      : ""}
                </div>
            </div>
        `
        : "";

    const fileName = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');

    projectCard.innerHTML = `
            <div class="project-card-header">
                <span class="project-file-icon">-rw-r--r--</span>
                <span class="project-file-name">${fileName}/</span>
            </div>
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                ${linksHTML}
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies
                      .map((tech) => `<span class="tech-tag">${tech}</span>`)
                      .join("")}
                </div>
            </div>
        `;

    container.appendChild(projectCard);
  });
}

/**
 * Adds filtering functionality to category buttons
 */
function addFilterFunctionality(buttons, projects, container) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");
      const filteredProjects =
        filter === "all"
          ? projects
          : projects.filter((project) => project.category === filter);

      renderProjects(filteredProjects, container);
    });
  });
}
