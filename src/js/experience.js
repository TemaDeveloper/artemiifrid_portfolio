/**
 * Experience module
 * Handles the interactive timeline display of work experience
 */

function initExperience() {
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
        "Spearheaded development for a cross-platform dating app designed to help users connect for dating, friendship, and professional networking. The app's innovative features prioritize social connectivity and fostering meaningful interactions.",
      responsibilities: [
        "Led the development of a cross-platform mobile application for both iOS and Android, focusing on an intuitive user experience.",
        "Utilized Flutter for UI, BLOC for state management, Retrofit for networking, Firebase for backend services, and ObjectBox for local data storage within an MVVM/MVC architecture.",
        "Collaborated on the Spring Boot backend, establishing seamless RESTful communication for high-performance data integration.",
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

  renderExperienceTimeline(experiences, timelineContainer);
  addTimelineInteractivity();
}

/**
 * Renders the timeline and adds a "Show More" button if needed
 * @param {Array} experiences - Array of experience objects
 * @param {HTMLElement} container - The container element
 */
function renderExperienceTimeline(experiences, container) {
  container.innerHTML = "";

  experiences.forEach((exp, index) => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";
    timelineItem.setAttribute("data-id", exp.id);

    if (index >= 3) {
      timelineItem.classList.add("hidden");
    }

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
              <ul>${exp.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}</ul>
              <div class="timeline-technologies">
                  <h4>Technologies:</h4>
                  <div class="tech-tags">${exp.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}</div>
              </div>
          </div>
      </div>
    `;
    container.appendChild(timelineItem);
  });

  if (experiences.length > 3) {
    const showMoreButton = document.createElement("button");
    showMoreButton.id = "show-more-exp";
    showMoreButton.className = "btn btn-primary btn-show-more"; 
    showMoreButton.textContent = "Show More";
    container.appendChild(showMoreButton);
  }
}

/**
 * Adds interactivity to the timeline and "Show More" / "Show Less" button
 */
function addTimelineInteractivity() {
  const toggleButtons = document.querySelectorAll(".timeline-details-toggle");
  const showMoreButton = document.getElementById("show-more-exp");
  const timelineContainer = document.querySelector(".timeline");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      const icon = button.querySelector("i");
      
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

  if (showMoreButton && timelineContainer) {
    showMoreButton.addEventListener("click", () => {
      // Toggle a class on the parent container
      timelineContainer.classList.toggle('timeline-expanded');

      // Update button text based on the class
      if (timelineContainer.classList.contains('timeline-expanded')) {
        showMoreButton.textContent = "Show Less";
      } else {
        showMoreButton.textContent = "Show More";
      }
    });
  }
}