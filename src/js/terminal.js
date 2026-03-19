/**
 * Terminal effects module
 * Handles boot sequence, ASCII art filling animation, and terminal-specific effects
 */

const ASCII_NAME = [
    "   \u2588    \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588     \u2588 \u2588\u2588\u2588 \u2588\u2588\u2588",
    "  \u2588 \u2588   \u2588     \u2588    \u2588    \u2588       \u2588\u2588   \u2588\u2588  \u2588   \u2588",
    " \u2588   \u2588  \u2588     \u2588    \u2588    \u2588       \u2588 \u2588 \u2588 \u2588  \u2588   \u2588",
    "\u2588     \u2588 \u2588\u2588\u2588\u2588\u2588\u2588     \u2588    \u2588\u2588\u2588\u2588\u2588   \u2588  \u2588  \u2588  \u2588   \u2588",
    "\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588   \u2588      \u2588    \u2588       \u2588     \u2588  \u2588   \u2588",
    "\u2588     \u2588 \u2588    \u2588     \u2588    \u2588       \u2588     \u2588  \u2588   \u2588",
    "\u2588     \u2588 \u2588     \u2588    \u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588     \u2588 \u2588\u2588\u2588 \u2588\u2588\u2588",
    "",
    "\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588 \u2588    \u2588  \u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588     \u2588",
    "\u2588       \u2588     \u2588  \u2588  \u2588     \u2588 \u2588     \u2588  \u2588  \u2588   \u2588  \u2588     \u2588 \u2588       \u2588\u2588    \u2588",
    "\u2588       \u2588     \u2588  \u2588  \u2588     \u2588 \u2588     \u2588  \u2588  \u2588  \u2588   \u2588       \u2588       \u2588 \u2588   \u2588",
    "\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588   \u2588  \u2588     \u2588 \u2588\u2588\u2588\u2588\u2588\u2588   \u2588  \u2588\u2588\u2588     \u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588  \u2588  \u2588",
    "\u2588       \u2588   \u2588    \u2588  \u2588     \u2588 \u2588   \u2588    \u2588  \u2588  \u2588         \u2588 \u2588       \u2588   \u2588 \u2588",
    "\u2588       \u2588    \u2588   \u2588  \u2588     \u2588 \u2588    \u2588   \u2588  \u2588   \u2588  \u2588     \u2588 \u2588       \u2588    \u2588\u2588",
    "\u2588       \u2588     \u2588 \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588  \u2588     \u2588 \u2588\u2588\u2588 \u2588    \u2588  \u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588     \u2588",
];

function initBootSequence() {
    const bootOverlay = document.getElementById('boot-sequence');
    const bootContent = document.getElementById('boot-content');

    if (!bootOverlay || !bootContent) return;

    const bootLines = [
        { text: 'Loading kernel modules...', status: 'ok' },
        { text: 'Mounting /dev/portfolio...', status: 'ok' },
        { text: 'Starting network services...', status: 'ok' },
        { text: 'Initializing skills engine...', status: 'ok' },
        { text: 'Loading experience data...', status: 'ok' },
        { text: 'Compiling project assets...', status: 'ok' },
        { text: 'System ready.', status: 'ok' },
    ];

    bootLines.forEach((line, index) => {
        const lineEl = document.createElement('div');
        lineEl.className = 'boot-line';
        lineEl.innerHTML = `<span class="ok">[OK]</span> ${line.text}`;
        bootContent.appendChild(lineEl);

        setTimeout(() => {
            lineEl.classList.add('visible');
        }, index * 180);
    });

    const totalBootTime = bootLines.length * 180 + 400;

    // Fade out boot sequence
    setTimeout(() => {
        bootOverlay.classList.add('fade-out');
        setTimeout(() => {
            bootOverlay.style.display = 'none';
        }, 500);
    }, totalBootTime);

    // Start ASCII filling animation after boot finishes
    setTimeout(() => {
        initAsciiFillingAnimation();
    }, totalBootTime + 300);
}

/**
 * Claude-style ASCII art filling animation
 * Characters appear progressively with a sweep effect
 */
function initAsciiFillingAnimation() {
    const container = document.getElementById('ascii-name');
    if (!container) return;

    // Build a 2D grid of characters
    const maxLen = Math.max(...ASCII_NAME.map(l => l.length));
    const grid = ASCII_NAME.map(line => line.padEnd(maxLen, ' '));
    const rows = grid.length;
    const cols = maxLen;

    // Create span elements for each character
    const spanGrid = [];
    container.textContent = '';

    for (let r = 0; r < rows; r++) {
        const rowSpans = [];
        for (let c = 0; c < cols; c++) {
            const span = document.createElement('span');
            span.textContent = grid[r][c];
            span.className = 'ascii-char';
            span.style.opacity = '0';
            container.appendChild(span);
            rowSpans.push(span);
        }
        container.appendChild(document.createTextNode('\n'));
        spanGrid.push(rowSpans);
    }

    // Animate: sweep from left to right with a diagonal wave
    const totalChars = rows * cols;
    const baseDuration = 800; // total animation time in ms
    const charDelay = baseDuration / (rows + cols);

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const char = spanGrid[r][c];
            if (char.textContent === ' ') {
                char.style.opacity = '1';
                continue;
            }
            // Diagonal wave: delay based on row + column
            const delay = (r + c) * charDelay;
            setTimeout(() => {
                char.style.opacity = '1';
                char.classList.add('ascii-char-visible');
            }, delay);
        }
    }
}

// Run boot sequence immediately
initBootSequence();
