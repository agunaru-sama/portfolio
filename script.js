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
            img.classList.add('prev'); // Gambar sebelumnya di luar layar kiri
          } else {
            img.classList.add('next'); // Gambar berikutnya di luar layar kanan
          }
        });

        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === slideIndex);
        });
      }

      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          currentSlide = i;
          showSlide(currentSlide);
        });
      });

      setTimeout(() => {
        showSlide(currentSlide); // Menampilkan gambar pertama setelah 3 detik
      }, 3000); // Delay sebelum gambar pertama muncul
     
      setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
      }, 3000); // Ganti gambar setiap 3 detik
    });
  });
</script>