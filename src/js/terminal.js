/**
 * Terminal effects module
 * Handles boot sequence, typing helpers, and terminal-specific animations
 */

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

    // Fade out boot sequence
    setTimeout(() => {
        bootOverlay.classList.add('fade-out');
        setTimeout(() => {
            bootOverlay.style.display = 'none';
        }, 500);
    }, bootLines.length * 180 + 400);
}

/**
 * Types text character by character into an element
 */
function typeText(element, text, speed, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed + Math.random() * 30);
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Run boot sequence immediately
initBootSequence();
