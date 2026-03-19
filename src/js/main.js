/**
 * Main JavaScript file for portfolio website
 * Handles initialization of all components
 */

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loading');

    try {
        initNavigation();
        initAnimation();
        initComponents();

        document.body.classList.remove('loading');
        document.body.classList.add('loaded');

        // Initialize content sections after a short delay for DOM readiness
        setTimeout(() => {
            try {
                initExperience();
                initProjects();
                initSkills();
                initContact();

                document.body.classList.remove('loading');
                document.body.classList.add('loaded');
            } catch (error) {
                console.error('Error in delayed initialization:', error);
                document.body.classList.remove('loading');
            }
        }, 300);
    } catch (error) {
        console.error('Error initializing portfolio:', error);
        document.body.classList.remove('loading');
    }
});

// Handle page loading - force refresh sections
window.addEventListener('load', () => {
    const sections = ['experience', 'projects', 'skills'];
    sections.forEach(section => {
        const container = document.querySelector(`#${section} .container`);
        if (container) {
            container.style.opacity = 0.99;
            setTimeout(() => {
                container.style.opacity = 1;
            }, 10);
        }
    });
});

/**
 * Initialize all components
 */
function initComponents() {
    const containers = [
        { selector: '.git-log-entries', init: initExperience },
        { selector: '.projects-grid', init: initProjects },
        { selector: '.skills-container', init: initSkills },
        { selector: '.contact-terminal', init: initContact },
    ];

    containers.forEach(({ selector, init }) => {
        if (document.querySelector(selector)) {
            try { init(); } catch (e) { console.error(`Error initializing ${selector}:`, e); }
        }
    });
}
