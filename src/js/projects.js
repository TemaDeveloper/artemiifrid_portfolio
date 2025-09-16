/**
 * Projects module
 * Handles projects display, filtering, and interactions
 */

function initProjects() {
  // Get the projects container
  const projectsContainer = document.querySelector(".projects-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!projectsContainer) {
    console.error("Projects container not found");
    return;
  }

  console.log("Initializing projects module");

  // Base64 encoded placeholder image (blue gradient square)
  const placeholderImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAwFBMVEUAAABKh8FGgsJKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8FKh8F5rwCEAAAAP3RSTlMAAQMFBgcICgwOEBETFRcaHB4gIiQoMDI0Njg6PD5AQkRITlBSVFpcXmJmcHJ0d3p8f4KIjpSaoqqwvMTM2OTgjoBNAAAEFUlEQVR42uzXQWrCQBjG8W9COk1a2sVsCiIuuuqmq4qubL3/qcqQTQsiFMxMmIH3/xtIePhgHiYCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICJWVp6sWBq7pdqdW9QT7dXqssbs5p5plY5aNSdg9rmaMas5qVanTOoH6pLZVZzV6lVPdS62bwys1lYdFq1fnx59R6ddvfGzOZWYVjjW1iGZnbbKn0YR/+XiKrVvKrTD4WY+kq9zE3Hrw/jyV/3VPOmu0QitTvrblV3Qy1lt8+6ezaLOpz0d6tJoEiUaX79G6ljqmdXC72anJFaJnpWZaRW8/+5Xf8geha1P99/JHpqD8OPf/31ZNKz+bD/iOh5oGdET+Njt/9I9PTUFwzreJf/Rj2n9XXA1S6rnrOCfttF9JyqQP+LiJ5nPdOIni966kT0vOuZlfXUZzXbi+ipLurZWdFNLaJnzNcw5Gu4vqr51FuhZ9TTczqRnopHz46enkdPT8+jp+fR0/PoCcCg02q2SktpUG0qnkfv2zNe70j/5XT4u56tXY+ed0XPl6X/t+eZnglLacdTpN12PD2vGz20HU+RH5i246mmPbc9V9ZT2/P07LXtebqMoO15imzA2/HU8bXteXoO2vF0vZTanqfnsW3P0/UZats7yTOdK+vpefS8K3rGtUmfnNKTpkee9/3oPfqmMT2dflNKg55uny6lKT2bHnN6Mt95Ok9S+dLzXHp6Hj09j56eR0/Po+c5PY+ez+n5nJ5nFPSM6Rnpuarn+UDPBz3P6HlGz+f0fE7PM3o+p+dzes7pOafnczqaTE/PuDyfJ6vdcpee1iOi5zd6fqPnYsz3cDFu6bkY0xOAUau+qlttbhtvVnclUFqu7+qW20bdltvcIlCaFe0tN23VrV0kJQUK1Wrz8nG9TZt1lbRMoFxu9frSaWt8UMppkoDQMi0+OvXjZp0WaVo3TaA8mc2TenOXxI+70zpdxcvVLF7Mk3SWJxAoLmdpnqf1y/Jj+zGqj+Wo3tyvdm+SawAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAaXkDlCoqJ8x0pAMAAAAASUVORK5CYII=";

  const projects = [
    {
      id: 1,
      title: "AI Financial Company",
      description:
        "Developed and maintained the core banking platform for a Toronto-based financial company. This platform helps clients apply for loans and manage investments with minimal risk. I focused on building and integrating secure, scalable financial services.",
      image: "src/assets/images/ai-financial-logo.jpg", 
      category: "web",
      technologies: [
        "Spring Boot",
        "TypeScript",
        "Azure Cloud DB",
        "SQL Local DB",
        "Docker",
        "Devcontainers",
        "Microservices",
        "REST API",
        "Agile/Scrum",
      ],
      liveLink: "https://aifinancial.ca/",
      sourceLink: "",
    },
    {
      id: 2,
      title: "SparkEyes",
      description:
        "Spearheaded the development of a cross-platform mobile application for both iOS and Android, enhancing social connectivity through innovative features. Collaborated with a team of developers and designers, managing project workflows in Jira. The app helps people find new friends, work colleagues, and connect for business or social purposes within a cohesive migrant community.",
      image: "src/assets/images/sparkeyes-logo.png",
      category: "mobile",
      technologies: [
        "Flutter",
        "Android",
        "iOS",
        "Firebase",
        "Jira",
        "REST API",
        "BLOC",
        "Git",
        "Agile",
      ],
      liveLink: "",
      sourceLink: "",
    },
    {
      id: 3,
      title: "Donutly (Open-Source)",
      description:
        "An open-source personal library where users can add and share books they have read. The project is designed to be a collaborative platform, encouraging community contributions to improve its features and resolve issues under an open-source license.",
      image: "src/assets/images/donutly-logo.png",
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
      id: 4,
      title: "Modern Portfolio",
      description:
        "A website for a construction company to automatically manage, update, and share projects with clients. Features include filtering by date and location, and a clean, modern user interface.",
      image: "src/assets/images/portfolio.png",
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
      id: 5,
      title: "Spectra (Pet Project)",
      description:
        "An end-to-end encrypted chat application where users can communicate privately within groups and one-on-one. The project focuses on robust security and real-time messaging.",
      image: "src/assets/images/spectra.png",
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
      id: 6,
      title: "Blog Pr (Pet Project)",
      description:
        "A backend project focused on establishing secure authentication and authorization services using OAuth 2.0. It serves as a foundational service for a blogging platform.",
      image: "src/assets/images/auth.png",
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
      id: 7,
      title: "BusTourApp",
      description:
        "Developed a demo guide app as a freelance project for a startup. The application provides tour information and leverages a robust backend for data management.",
      image: "src/assets/images/bustourapp.png",
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
      id: 8,
      title: "CookeryDays",
      description:
        "A cooking application where users can upload, share, like, and save their favorite recipes. The app features a beautiful UI and a robust backend to attract and retain users.",
      image: "src/assets/images/cookery-days.png",
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
      id: 9,
      title: "NightCaps",
      description:
        "A startup project to help people improve their sleep. The application includes features for contacting psychologists and taking surveys, as part of its comprehensive suite of wellness services.",
      image: "src/assets/images/nightcaps_logo.png",
      category: "web",
      technologies: ["Flutter", "iOS", "Web", "Firebase", "Jira"],
      liveLink: "",
      sourceLink: "",
    },
  ];

  // Log filter buttons
  filterButtons.forEach((btn) => {
    console.log(
      "Filter button:",
      btn.textContent.trim(),
      "with data-filter =",
      btn.getAttribute("data-filter")
    );
  });

  // Log projects
  console.log("Total projects:", projects.length);
  projects.forEach((project) => {
    console.log("Project:", project.title, "Category:", project.category);
  });

  // Render all projects initially
  renderProjects(projects, projectsContainer);

  // Add filter functionality
  if (filterButtons.length > 0) {
    addFilterFunctionality(filterButtons, projects, projectsContainer);
  }

  // Add project click handlers for modal/details view
  addProjectInteractions();
}

/**
 * Renders projects to the specified container
 * @param {Array} projects - Array of project objects
 * @param {HTMLElement} container - The container element
 */
function renderProjects(projects, container) {
  // Clear the container
  container.innerHTML = "";

  console.log("Rendering", projects.length, "projects");

  // Check if there are projects to display
  if (projects.length === 0) {
    container.innerHTML =
      '<p class="no-projects">No projects found matching the selected category.</p>';
    return;
  }

  // Render each project
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.setAttribute("data-category", project.category);
    projectCard.style.opacity = 1; // Force visibility

    // Remove hover darkening effect for SmartSign project (ID 8)
    if (project.id === 8) {
      projectCard.classList.add("no-hover-effect");
    }

    // Create links section only if links are available
    const linksHTML =
      project.liveLink || project.sourceLink
        ? `
            <div class="project-overlay">
                <div class="project-links">
                    ${
                      project.liveLink
                        ? `<a href="${project.liveLink}" class="project-link" target="_blank" title="View Live">
                        <i class="fas fa-external-link-alt"></i>
                    </a>`
                        : ""
                    }
                    ${
                      project.sourceLink
                        ? `<a href="${project.sourceLink}" class="project-link" target="_blank" title="View Source">
                        <i class="fab fa-github"></i>
                    </a>`
                        : ""
                    }
                </div>
            </div>
        `
        : "";

    projectCard.innerHTML = `
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

  console.log("Project cards rendered:", container.children.length);
}

/**
 * Adds filtering functionality to category buttons
 * @param {NodeList} buttons - Filter buttons
 * @param {Array} projects - Array of project objects
 * @param {HTMLElement} container - Projects container
 */
function addFilterFunctionality(buttons, projects, container) {
  // Set the "All" button as active by default
  const allButton = document.querySelector('.filter-btn[data-filter="all"]');
  if (allButton) {
    allButton.classList.add("active");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active class
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Get the filter category
      const filter = button.getAttribute("data-filter");
      console.log("Filter clicked:", filter);

      // Filter projects
      const filteredProjects =
        filter === "all"
          ? projects
          : projects.filter((project) => project.category === filter);

      console.log("Filtered projects:", filteredProjects.length);

      // Render filtered projects
      renderProjects(filteredProjects, container);

      // Reinitialize project interactions
      addProjectInteractions();
    });
  });
}

/**
 * Adds interactive behaviors to project cards
 */
function addProjectInteractions() {
  // Get all project cards
  const projectCards = document.querySelectorAll(".project-card");

  console.log("Adding interactions to", projectCards.length, "project cards");

  projectCards.forEach((card) => {
    // Add hover effects or click handlers as needed
    // This can be expanded to add modals, details pages, etc.

    // Example: Add animation classes when projects come into view
    card.classList.add("animate-on-scroll", "fade-in-up");
  });
}

// Force re-render projects when page is fully loaded
window.addEventListener("load", () => {
  setTimeout(() => {
    const projectsContainer = document.querySelector(".projects-grid");
    if (projectsContainer && projectsContainer.children.length === 0) {
      console.log("Force re-rendering projects after page load");
      initProjects();
    }
  }, 1500);
});
