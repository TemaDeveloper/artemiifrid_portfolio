/**
 * Skills module
 * Handles display and visualization of skills
 */

function initSkills() {
    // Get the skills container
    const skillsContainer = document.querySelector('.skills-container');
    
    if (!skillsContainer) {
        console.error('Skills container not found');
        return;
    }
    
    console.log('Initializing skills module');
    
    // Skills data based on Artemii's resume
    const skills = [
        {
            category: 'Programming Languages',
            items: [
                { name: 'Flutter', level: 90 },
                { name: 'Java', level: 80 },
                { name: 'JavaScript', level: 70 },
                { name: 'Rust', level: 75 },
                { name: 'SQL', level: 75 }
            ]
        },
        {
            category: 'Tools',
            items: [
                { name: 'Git & GitHub', level: 100 },
                { name: 'GitHub Actions', level: 85 },
                { name: 'Docker', level: 70 },
                { name: 'AWS', level: 95 },
                { name: 'Jira', level: 100 }
            ]
        },
        {
            category: 'Soft Skills',
            items: [
                { name: 'Problem Solving', level: 100 },
                { name: 'Project Management', level: 100 },
                { name: 'Team Player', level: 100 },
                { name: 'Strategic Communication', level: 100 },
                { name: 'Leadership', level: 100 }
            ]
        }
    ];
    
    console.log('Skills data loaded:', skills.length, 'categories');
    
    // Render the skills
    renderSkills(skills, skillsContainer);
    
    // Initialize skill animations
    initSkillAnimations();
}

/**
 * Renders skills categories and progress bars
 * @param {Array} skillCategories - Array of skill category objects
 * @param {HTMLElement} container - The container element
 */
function renderSkills(skillCategories, container) {
    // Clear the container first
    container.innerHTML = '';
    
    console.log('Rendering', skillCategories.length, 'skill categories');
    
    skillCategories.forEach(category => {
        console.log('Rendering category:', category.category, 'with', category.items.length, 'skills');
        
        // Create category container
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category animate-on-scroll fade-in-up';
        categoryDiv.style.opacity = 1; // Force visibility
        
        // Create category header
        const categoryHeader = document.createElement('h3');
        categoryHeader.className = 'category-title';
        categoryHeader.textContent = category.category;
        categoryDiv.appendChild(categoryHeader);
        
        // Create skills list
        const skillsList = document.createElement('div');
        skillsList.className = 'skills-list';
        
        // Add each skill with progress bar
        category.items.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            
            skillItem.innerHTML = `
                <div class="skill-info">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percentage">${skill.level}%</span>
                </div>
                <div class="skill-progress">
                    <div class="skill-progress-bar" data-level="${skill.level}"></div>
                </div>
            `;
            
            skillsList.appendChild(skillItem);
        });
        
        categoryDiv.appendChild(skillsList);
        container.appendChild(categoryDiv);
    });
    
    console.log('Skill categories rendered:', container.children.length);
}

/**
 * Initializes animations for skill progress bars
 */
function initSkillAnimations() {
    // Get all progress bars
    const progressBars = document.querySelectorAll('.skill-progress-bar');
    
    console.log('Animating', progressBars.length, 'skill progress bars');
    
    // Set initial width to 0 for all bars
    progressBars.forEach(bar => {
        bar.style.width = '0%';
    });
    
    // Set up Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the skill level
                const level = entry.target.getAttribute('data-level');
                console.log('Animating skill bar to', level + '%');
                
                // Animate the progress bar
                setTimeout(() => {
                    entry.target.style.width = `${level}%`;
                }, 200);
                
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe each progress bar
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Force re-render skills when page is fully loaded
window.addEventListener('load', () => {
    setTimeout(() => {
        const skillsContainer = document.querySelector('.skills-container');
        if (skillsContainer && skillsContainer.children.length === 0) {
            console.log('Force re-rendering skills after page load');
            initSkills();
        }
    }, 1500);
}); 