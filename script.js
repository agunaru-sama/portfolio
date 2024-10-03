// JavaScript to handle slider navigation
const images = document.querySelectorAll('.project-img');
const dots = document.querySelectorAll('.slider-dot');

let currentImageIndex = 0;

// Function to update the slider navigation
function updateSlider() {
    // Reset all dots to inactive
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    // Set the current dot to active
    dots[currentImageIndex].classList.add('active');
}

// Function to move to the next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateSlider();
}

// Set interval to switch image every 3 seconds
setInterval(nextImage, 3000);