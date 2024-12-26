// Add scroll animation for header
window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 120, 215, 1)";
        header.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
    } else {
        header.style.background = "rgba(0, 120, 215, 0.9)";
        header.style.boxShadow = "none";
    }
});

// scripts/scripts.js

// Select the circle container
const circleContainer = document.querySelector('.circle-container');

// Function to create a random circle
function createCircle() {
    const circle = document.createElement('div');
    const size = Math.random() * 60 + 10; // Random size between 10px and 60px
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${Math.random() * 100}%`; // Random horizontal position
    circle.style.animationDuration = `${Math.random() * 5 + 10}s`; // Random speed between 5s and 10s
    circle.style.animationDelay = `${Math.random() * 5}s`; // Random delay
    circle.classList.add('circle'); // Add circle class
    circleContainer.appendChild(circle);

    // Remove circle after animation ends
    setTimeout(() => {
        circle.remove();
    }, 10000); // Adjust based on animation duration
}

// Create circles at regular intervals
setInterval(createCircle, 600); // Adjust frequency of circle creation

document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
});