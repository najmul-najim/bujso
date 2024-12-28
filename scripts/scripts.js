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

// Get the elements
// Get the elements
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

// Open the sidebar when the menu button is clicked
menuBtn.addEventListener('click', function() {
    sidebar.classList.add('active'); // Show the sidebar
});

// Close the sidebar when the close button is clicked
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('active'); // Hide the sidebar
});

// Close the sidebar when clicking anywhere outside the sidebar
document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        sidebar.classList.remove('active'); 
        menuBtn.classList.remove('hidden');
       closeBtn.classList.add('hidden');// Close the sidebar
    }
});
closeBtn.classList.add('hidden');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    closeBtn.classList.add('hidden');
    menuBtn.classList.remove('hidden');
});


// Reference to the checkbox
const toggleButton = document.getElementById('toggleButton');

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggleButton.checked = true; // Check the checkbox
}

// Toggle dark mode on checkbox change
toggleButton.addEventListener('change', () => {
  if (toggleButton.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled'); // Save state
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled'); // Save state
  }
});

window.onload = () => {
    setTimeout(() => {
        document.getElementById("newb").click();
    }, 3000);
};

// Optional: Add an event listener for the button to see the effect
