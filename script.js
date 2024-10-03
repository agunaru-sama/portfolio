// Function to handle individual slider navigation
function createSlider(sliderId, navId) {
    const images = document.querySelectorAll(`#${sliderId} .project-img`);
    const dots = document.querySelectorAll(`#${navId} .slider-dot`);
    let currentImageIndex = 0;

    function updateSlider() {
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[currentImageIndex].classList.add('active');
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateSlider();
    }

    setInterval(nextImage, 3000); // Slide every 3 seconds
}

// Call the createSlider function for each project
createSlider('indieGameSlider', 'indieGameNav');
createSlider('designSlider', 'designNav');
createSlider('programmingSlider', 'programmingNav');