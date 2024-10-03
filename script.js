document.addEventListener("DOMContentLoaded", function () {
  // Untuk setiap slider project (Indie Game Developer, 2D/3D Designer, Programming)
  const sliders = document.querySelectorAll('.project-slider');
  const dots = document.querySelectorAll('.slider-dots .slider-dot');

  sliders.forEach((slider, index) => {
    let currentSlide = 0;
    const totalSlides = slider.children.length;
    let autoSlideInterval;

    // Fungsi untuk menampilkan slide tertentu
    function showSlide(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
      updateDots(index); // Update dot yang aktif
    }

    // Fungsi untuk memperbarui tampilan dot slider
    function updateDots(index) {
      dots[index].classList.add('active');
      dots.forEach((dot, i) => {
        if (i !== index) {
          dot.classList.remove('active');
        }
      });
    }

    // Fungsi untuk bergeser ke slide berikutnya
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    // Fungsi untuk bergeser ke slide sebelumnya
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }

    // Mengupdate dot dan menggeser gambar sesuai interval
    autoSlideInterval = setInterval(nextSlide, 3000); // Set interval untuk berganti gambar setiap 3 detik

    // Menunggu 3 detik sebelum mulai slide
    setTimeout(() => {
      autoSlideInterval = setInterval(nextSlide, 3000); // Mulai pergeseran setelah 3 detik
    }, 3000);

    // Mengubah slide saat klik dot
    dots.forEach((dot, dotIndex) => {
      dot.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Hentikan interval saat dot diklik
        currentSlide = dotIndex;
        showSlide(currentSlide);
        autoSlideInterval = setInterval(nextSlide, 3000); // Mulai lagi interval setelah dot diklik
      });
    });
  });
});