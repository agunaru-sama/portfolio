$(document).ready(function(){
  $('.project-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,  // Menambahkan kontrol arah
    fade: true,    // Menambahkan efek fade
    infinite: true
  });
});