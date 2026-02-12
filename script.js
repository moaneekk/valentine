// Get elements
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.getElementById('question-container');
const celebrationContainer = document.getElementById('celebration-container');
const attemptCounter = document.getElementById('attempt-counter');

let attempts = 0;
let yesBtnScale = 1;

// Messages for different attempt counts
const messages = [
    "Are you sure? 🥺",
    "Really? Think again! 💭",
    "The 'Yes' button is getting bigger... 👀",
    "Come on, you know you want to! 😊",
    "I'm not giving up! 💪",
    "Pretty please? 🙏",
    "The 'Yes' button is HUGE now! 😄",
    "You can't resist forever! 💕",
    "Just click 'Yes' already! 😂"
];

// Function to move the No button randomly
function moveNoButton() {
    const container = document.querySelector('.button-container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate available space
    const maxX = containerRect.width - btnRect.width - 40;
    const maxY = containerRect.height - btnRect.height - 40;
    
    // Generate random position
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Apply new position
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    // Increment attempts
    attempts++;
    
    // Grow the Yes button
    yesBtnScale += 0.15;
    yesBtn.style.transform = `scale(${yesBtnScale})`;
    
    // Update counter message
    if (attempts <= messages.length) {
        attemptCounter.textContent = messages[attempts - 1];
    } else {
        attemptCounter.textContent = "Okay, I think you get the point! 😅";
    }
}

// Event listeners for No button
noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Touch support for mobile
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Yes button click handler
yesBtn.addEventListener('click', () => {
    // Hide question container
    questionContainer.style.display = 'none';
    
    // Show celebration
    celebrationContainer.classList.add('active');
    
    // Create confetti effect
    createConfetti();
});

// Confetti effect
function createConfetti() {
    const colors = ['#ff6b9d', '#ffc2d1', '#c44569', '#667eea', '#f093fb'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            confetti.style.opacity = '0.8';
            
            document.body.appendChild(confetti);
            
            // Animate confetti falling
            const duration = 2000 + Math.random() * 2000;
            const startTime = Date.now();
            const startX = parseFloat(confetti.style.left);
            const drift = (Math.random() - 0.5) * 200;
            
            function animateConfetti() {
                const elapsed = Date.now() - startTime;
                const progress = elapsed / duration;
                
                if (progress < 1) {
                    confetti.style.top = (progress * window.innerHeight) + 'px';
                    confetti.style.left = (startX + drift * progress) + 'px';
                    confetti.style.transform = `rotate(${progress * 720}deg)`;
                    requestAnimationFrame(animateConfetti);
                } else {
                    confetti.remove();
                }
            }
            
            animateConfetti();
        }, i * 30);
    }
}

// Initialize No button position
window.addEventListener('load', () => {
    noBtn.style.position = 'absolute';
    noBtn.style.left = '50%';
    noBtn.style.transform = 'translateX(-50%)';
});
