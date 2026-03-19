/**
 * Animation module
 * Handles scroll reveal and typing animations
 */

function initAnimation() {
    // Reveal sections on scroll
    initSectionReveal();

    // Typing animation for hero role
    initTypingAnimation();
}

/**
 * Reveals terminal windows as they scroll into view
 */
function initSectionReveal() {
    const sections = document.querySelectorAll('.terminal-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Immediately reveal hero
    const hero = document.querySelector('.hero-section');
    if (hero) {
        hero.classList.add('revealed');
    }
}

/**
 * Typing animation for the hero subtitle with multiple rotating titles
 */
function initTypingAnimation() {
    const roleElement = document.getElementById('typed-role');
    if (!roleElement) return;

    const titles = [
        'Full-Stack Developer',
        'Backend Engineer',
        'LLM Trainer',
        'Mobile App Developer',
        'AI/ML Enthusiast',
        'Software Developer',
    ];

    let currentTitleIndex = -1;
    let currentText = '';
    let isDeleting = false;
    const typingSpeed = 80;

    function getNextTitle() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * titles.length);
        } while (randomIndex === currentTitleIndex && titles.length > 1);
        currentTitleIndex = randomIndex;
        return titles[currentTitleIndex];
    }

    function typeEffect() {
        const fullTitle = currentTitleIndex === -1 ? getNextTitle() : titles[currentTitleIndex];
        let speed = typingSpeed;

        if (isDeleting) {
            speed = typingSpeed / 2;
            currentText = fullTitle.substring(0, currentText.length - 1);
        } else {
            currentText = fullTitle.substring(0, currentText.length + 1);
        }

        roleElement.textContent = currentText;

        if (!isDeleting && currentText === fullTitle) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentTitleIndex = -1;
            speed = 400;
        }

        setTimeout(typeEffect, speed + Math.random() * 40);
    }

    // Start after boot sequence finishes
    setTimeout(typeEffect, 1800);
}
