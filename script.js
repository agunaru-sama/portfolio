document.addEventListener("DOMContentLoaded", function() {
  const sliders = document.querySelectorAll('.project-slider');
  const progressBars = document.querySelectorAll('.slider-progress');
  const dots = document.querySelectorAll('.slider-dot');

  sliders.forEach((slider, index) => {
    let currentSlide = 0;
    const images = slider.querySelectorAll('img');
    const totalSlides = images.length;

    // Fungsi untuk menampilkan slide
    function showSlide(slideIndex) {
      images.forEach((img, i) => {
        img.style.display = (i === slideIndex) ? 'block' : 'none';
      });

      // Update status dot
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
      });

      // Update progress bar (animasi garis bergerak)
      progressBars[index].style.width = ((slideIndex + 1) / totalSlides) * 100 + '%';
    }

    // Fungsi untuk beralih ke slide berikutnya
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    // Event listener untuk klik pada dot
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
      });
    });

    // Memulai dengan menampilkan slide pertama
    showSlide(currentSlide);

    // Set interval untuk slide otomatis setiap 3 detik
    setInterval(nextSlide, 3000);
  });
});