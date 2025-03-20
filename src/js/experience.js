/**
 * Experience module
 * Handles the interactive timeline display of work experience
 */

function initExperience() {
    // Get the timeline container
    const timelineContainer = document.querySelector('.timeline');
    
    if (!timelineContainer) return;
    
    // Experience data based on Raman's resume
    const experiences = [
        {
            id: 1,
            title: 'Mobile App Developer',
            company: 'SparkEyes',
            period: 'January 2025 - Present',
            description: 'Innovative mobile application that is developed to connect people with each other for the vast variety of purposes.',
            responsibilities: [
                'Stored Logs in Firebase within QA for the mobile application, using Firebase',
                'Contributed in Jira with team members',
                'Developed a modern UI, using Flutter and Java - Android',
                'End-points implementation, communicating with back-end, using Rest API and Web Sockets'
            ],
            technologies: ['Flutter', 'Firebase', 'Rest API', 'Jira', 'Git', 'Android']
        },
        {
            id: 2,
            title: 'Full-stack Development',
            company: 'Falcon',
            period: 'May 2024 - Jun 2024',
            description: 'Modern portfolio for company to update, manage and share the projects with clients.',
            responsibilities: [
                'Optimized website layouts and navigation structures using HTML, CSS, JavaScript, Flutter',
                'End-points implementation with Rust Axum',
                'Deployed the project with AWS',
                'Containerized the project with Docker and usage of different images'
            ],
            technologies: ['Flutter', 'HTML5', 'CSS3', 'JavaScript', 'React', 'Sea ORM', 'Rust - Axum', 'AWS', 'Docker']
        },
        {
            id: 3,
            title: 'Back-end Developer',
            company: 'Pet Project',
            period: 'August 2024 - October 2024',
            description: 'The practice project to develop the end-to-end encrypted chat.',
            responsibilities: [
                "Implemented JWT authentication for secure user authorization",
                "Designed and maintained RESTful APIs to support front-end interactions",
                "Managed data using SeaORM and PostgreSQL, ensuring efficient storage and retrieval",
                "Developed the websockets to ensure with smooth communication"
            ],
            technologies: ['Rust-Axum', 'RSA Encryption', 'Socketioxide', 'JWT', 'Docker']
        },
        {
            id: 4,
            title: 'Back-end Developer',
            company: 'Pet Project',
            period: 'July 2024 - August 2024',
            description: 'The practice project to develop the blogging web site, using huge stack of technologies.',
            responsibilities: [
                'This Rust project utilizes the Axum framework and Sea-ORM',
                'Modern, secure, and efficient authentication system',
                'OAuth2 and Google Authorization Services to manage user authentication',
            ],
            technologies: ['Rust-Axum', 'Oauth2.0', 'Amazon S3', 'Docker', 'Redis', 'PostgreSQL']
        }
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
    container.innerHTML = '';
    
    experiences.forEach((exp, index) => {
        const isEven = index % 2 === 0;
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${isEven ? 'left' : 'right'}`;
        timelineItem.setAttribute('data-id', exp.id);
        
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
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                    <div class="timeline-technologies">
                        <h4>Technologies:</h4>
                        <div class="tech-tags">
                            ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
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
    const toggleButtons = document.querySelectorAll('.timeline-details-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const timelineItem = button.closest('.timeline-item');
            const details = timelineItem.querySelector('.timeline-details');
            const icon = button.querySelector('i');
            
            // Toggle visibility
            if (details.style.maxHeight) {
                details.style.maxHeight = null;
                button.querySelector('span').textContent = 'Show details';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                details.style.maxHeight = details.scrollHeight + 'px';
                button.querySelector('span').textContent = 'Hide details';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
} 