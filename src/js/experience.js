/**
 * Experience module
 * Handles the interactive timeline display of work experience
 */

function initExperience() {
  // Get the timeline container
  const timelineContainer = document.querySelector(".timeline");

  if (!timelineContainer) return;

  const experiences = [
    {
      id: 1,
      title: "Software Developer",
      company: "AI Financial Company",
      period: "January 2025 - Present",
      description:
        "A financial technology company in Toronto that helps people apply for loans and manage investments without significant risk.",
      responsibilities: [
        "Implemented new features on the backend using **Spring Boot**.",
        "Developed new features for the frontend using **TypeScript**.",
        "Conducted extensive bug fixing and QA testing to ensure application stability and reliability.",
        "Managed and utilized **Azure Cloud DB** and **SQL Local DB** for data storage and management.",
        "Utilized **Docker** to containerize applications and ran development environments with **devcontainers**.",
      ],
      technologies: [
        "Spring Boot",
        "TypeScript",
        "QA Testing",
        "Azure Cloud DB",
        "SQL Local DB",
        "Docker",
        "Devcontainers",
      ],
    },
    {
      id: 2,
      title: "Mobile App Developer",
      company: "SparkEyes",
      period: "January 2025 - Present",
      description:
        "Spearheaded the development of a cross-platform mobile application for both iOS and Android platforms, enhancing social connectivity through innovative features. Utilized **Flutter** for robust UI development, **BLOC** for efficient state management, **Retrofit** for networking, **Firebase** for backend services, and **ObjectBox** for local data storage, all within an **MVVM/MVC** architectural pattern to significantly boost application maintainability and scalability. Collaborated closely on the **Spring Boot** backend development, establishing and maintaining seamless **RESTful communication** between the mobile application and the backend, which ensured high performance and smooth data integration.",
      responsibilities: [
        "Spearheaded the development of a cross-platform mobile application for both iOS and Android platforms, enhancing social connectivity through innovative features.",
        "Utilized Flutter for robust UI development, BLOC for efficient state management, Retrofit for networking, Firebase for backend services, and ObjectBox for local data storage, all within an MVVM/MVC architectural pattern to significantly boost application maintainability and scalability.",
        "Collaborated closely on the Spring Boot backend development, establishing and maintaining seamless RESTful communication between the mobile application and the backend, which ensured high performance and smooth data integration.",
      ],
      technologies: [
        "Flutter",
        "Android",
        "iOS Development",
        "Communication",
        "Android Development",
        "Back-End Web Development",
        "Jira",
        "Mobile Application Development",
        "REST APIs",
        "Teamwork",
        "BLOC",
        "Retrofit",
        "Firebase",
        "ObjectBox",
        "MVVM/MVC",
        "Spring Boot",
      ],
    },
    {
      id: 3,
      title: "Full-stack Developer",
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
      id: 4,
      title: "Back-end Developer (Pet Project)",
      company: "Donutly",
      period: "October 2025 - Present",
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
      id: 5,
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
      id: 6,
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

  // Render the timeline
  renderExperienceTimeline(experiences, timelineContainer);

  // Add click handlers for the timeline items
  addTimelineInteractivity();
}

/**
 * Renders the timeline with provided experience data
 * @param {Array} experiences - Array of experience objects
 * @param {HTMLElement} container - The container element
 */
function renderExperienceTimeline(experiences, container) {
  // Clear the container first
  container.innerHTML = "";

  experiences.forEach((exp, index) => {
    const isEven = index % 2 === 0;
    const timelineItem = document.createElement("div");
    timelineItem.className = `timeline-item ${isEven ? "left" : "right"}`;
    timelineItem.setAttribute("data-id", exp.id);

    timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${exp.period}</div>
                <h3 class="timeline-title">${exp.title}</h3>
                <h4 class="timeline-company">${exp.company}</h4>
                <p class="timeline-description">${exp.description}</p>
                <div class="timeline-details-toggle">
                    <span>Show details</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="timeline-details">
                    <h4>Responsibilities:</h4>
                    <ul>
                        ${exp.responsibilities
                          .map((resp) => `<li>${resp}</li>`)
                          .join("")}
                    </ul>
                    <div class="timeline-technologies">
                        <h4>Technologies:</h4>
                        <div class="tech-tags">
                            ${exp.technologies
                              .map(
                                (tech) =>
                                  `<span class="tech-tag">${tech}</span>`
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            </div>
        `;

    container.appendChild(timelineItem);
  });
}

/**
 * Adds interactivity to the timeline items
 */
function addTimelineInteractivity() {
  // Get all timeline toggle buttons
  const toggleButtons = document.querySelectorAll(".timeline-details-toggle");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const timelineItem = button.closest(".timeline-item");
      const details = timelineItem.querySelector(".timeline-details");
      const icon = button.querySelector("i");

      // Toggle visibility
      if (details.style.maxHeight) {
        details.style.maxHeight = null;
        button.querySelector("span").textContent = "Show details";
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      } else {
        details.style.maxHeight = details.scrollHeight + "px";
        button.querySelector("span").textContent = "Hide details";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    });
  });
}
