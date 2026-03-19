/**
 * Skills module
 * Renders skills as neofetch-style block character progress bars
 */

function initSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    if (!skillsContainer) return;

    const skills = [
        {
            category: 'Languages',
            items: [
                { name: 'Python', level: 80 },
                { name: 'Java', level: 85 },
                { name: 'Dart', level: 90 },
                { name: 'JavaScript', level: 80 },
                { name: 'Rust', level: 75 }
            ]
        },
        {
            category: 'Frameworks',
            items: [
                { name: 'Spring Boot', level: 85 },
                { name: 'Flutter', level: 90 },
                { name: 'TypeScript', level: 80 },
                { name: 'React', level: 75 },
                { name: 'Next.js', level: 70 },
                { name: 'Node.js (Express)', level: 75 }
            ]
        },
        {
            category: 'Cloud & DevOps',
            items: [
                { name: 'AWS', level: 90 },
                { name: 'Azure', level: 80 },
                { name: 'Docker', level: 85 },
                { name: 'GitHub Actions', level: 85 },
                { name: 'CI/CD', level: 85 }
            ]
        },
        {
            category: 'Databases',
            items: [
                { name: 'MongoDB', level: 80 },
                { name: 'Redis', level: 75 },
                { name: 'PostgreSQL', level: 85 },
                { name: 'Oracle', level: 70 }
            ]
        },
        {
            category: 'AI/ML',
            items: [
                { name: 'RAG', level: 80 },
                { name: 'LLM', level: 80 },
                { name: 'RLHF', level: 75 },
                { name: 'Model Eval', level: 75 }
            ]
        },
        {
            category: 'Testing',
            items: [
                { name: 'JUnit', level: 85 },
                { name: 'Mockito', level: 80 },
                { name: 'TDD', level: 80 }
            ]
        },
        {
            category: 'Tools',
            items: [
                { name: 'Git', level: 95 },
                { name: 'Jira', level: 90 },
                { name: 'Postman', level: 85 },
                { name: 'Firebase', level: 80 },
                { name: 'VS Code', level: 90 },
                { name: 'IntelliJ', level: 85 }
            ]
        }
    ];

    renderNeofetchSkills(skills, skillsContainer);
    initSkillBarAnimation();
}

/**
 * Renders skills in neofetch style with ASCII art and block bars
 */
function renderNeofetchSkills(skillCategories, container) {
    container.innerHTML = '';

    const asciiArt = `
    ___    ______
   /   |  / ____/
  / /| | / /_
 / ___ |/ __/
/_/  |_/_/
    `.trim();

    const output = document.createElement('div');
    output.className = 'neofetch-output';

    // ASCII art side
    const asciiDiv = document.createElement('div');
    asciiDiv.className = 'neofetch-ascii';
    asciiDiv.textContent = asciiArt;
    output.appendChild(asciiDiv);

    // Info side
    const infoDiv = document.createElement('div');
    infoDiv.className = 'neofetch-info';

    skillCategories.forEach(category => {
        const block = document.createElement('div');
        block.className = 'skill-category-block';

        const title = document.createElement('div');
        title.className = 'skill-category-title';
        title.textContent = category.category;
        block.appendChild(title);

        category.items.forEach(skill => {
            const row = document.createElement('div');
            row.className = 'skill-row';

            const maxBlocks = 20;
            const filledCount = Math.round(skill.level / 5);
            const emptyCount = maxBlocks - filledCount;

            row.innerHTML = `
                <span class="skill-name">${skill.name}</span>
                <span class="skill-bar" data-filled="${filledCount}" data-empty="${emptyCount}"></span>
                <span class="skill-pct">${skill.level}%</span>
            `;

            block.appendChild(row);
        });

        infoDiv.appendChild(block);
    });

    output.appendChild(infoDiv);
    container.appendChild(output);
}

/**
 * Animates skill bars character by character on scroll
 */
function initSkillBarAnimation() {
    const bars = document.querySelectorAll('.skill-bar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const filled = parseInt(bar.dataset.filled);
                const empty = parseInt(bar.dataset.empty);
                animateBar(bar, filled, empty);
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.1 });

    bars.forEach(bar => observer.observe(bar));
}

/**
 * Animates a single bar by adding block characters one at a time
 */
function animateBar(bar, filledCount, emptyCount) {
    bar.textContent = '';
    let i = 0;
    const total = filledCount + emptyCount;

    function addBlock() {
        if (i < total) {
            if (i < filledCount) {
                bar.innerHTML += '\u2588';
            } else {
                bar.innerHTML += '<span class="empty">\u2591</span>';
            }
            i++;
            setTimeout(addBlock, 25);
        }
    }

    addBlock();
}
