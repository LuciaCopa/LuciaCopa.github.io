document.getElementById('no-btn').addEventListener('mouseover', function() {
    this.style.position = 'fixed';
    const maxX = window.innerWidth - this.clientWidth;
    const maxY = window.innerHeight - this.clientHeight;
    this.style.left = `${Math.random() * maxX}px`;
    this.style.top = `${Math.random() * maxY}px`;
});
document.getElementById('yes-btn').addEventListener('click', () => {
    showConfetti();
});

const confettiContainer = document.getElementById('confetti-container');
function startConfetti() {

    function createConfettiPiece() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Random size
        const sizeClass = ['small', 'medium', 'large'][Math.floor(Math.random() * 3)];
        confetti.classList.add(sizeClass);

        // Random shape - add 'circle' only if needed
        if (Math.random() > 0.5) {
            confetti.classList.add('circle');
        }

        // Random color
        const confettiColors = ['#F279A1', '#FFCAE9', '#A60034', '#D6336C', '#C72468'];
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];

        // Random horizontal position
        confetti.style.left = `${Math.random() * 100}vw`;

        // Random animation delay
        confetti.style.animationDelay = `${Math.random() * 2}s`;

        confettiContainer.appendChild(confetti);

        // Remove confetti after animation ends
        confetti.addEventListener('animationend', () => confetti.remove());
    }

    // Generate multiple confetti pieces
    for (let i = 0; i < 1000; i++) {
        createConfettiPiece();
    }
}

// Show confetti on win
function showConfetti() {
    startConfetti(); // Call the confetti animation
}