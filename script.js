$(document).ready(function(){
  $('.autoplay').slick({
    slidesToShow: 1,  // Menggunakan 1 slide per tampilan
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slide setiap 3 detik
    dots: true, // Menambahkan indikator dot
    arrows: false // Menonaktifkan navigasi panah default
  });
});