<script>
  document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll('.project-slider');
    const dots = document.querySelectorAll('.slider-dot');

    sliders.forEach((slider, index) => {
      let currentSlide = 0;
      const images = slider.querySelectorAll('img');
      const totalSlides = images.length;

      function showSlide(slideIndex) {
        images.forEach((img, i) => {
          img.classList.remove('active', 'prev', 'next'); // Reset semua class

          if (i === slideIndex) {
            img.classList.add('active'); // Gambar aktif
          } else if (i === (slideIndex - 1 + totalSlides) % totalSlides) {
            img.classList.add('prev'); // Gambar sebelumnya
          } else {
            img.classList.add('next'); // Gambar berikutnya
          }
        });

        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === slideIndex);
        });
      }

      function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
      }

      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          currentSlide = i;
          showSlide(currentSlide);
        });
      });

      showSlide(currentSlide); // Menampilkan gambar pertama
      setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik
    });
  });
</script>