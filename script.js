$(document).ready(function() {
  // Initialize Slick Slider
  $('.autoplay').slick({
    slidesToShow: 1,   // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true,    // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed (2 seconds)
    arrows: true,     // Enable arrows for manual navigation
    dots: false,       // No dots for navigation
    pauseOnHover: true, // Pause on hover
    pauseOnFocus: true // Pause on focus
  });

  // Synchronize custom navigation dots with slick slider
  $('.autoplay').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.nav-dot').removeClass('active');  // Remove active class from all dots
    $('.nav-dot').eq(nextSlide).addClass('active');  // Add active class to the corresponding dot
  });

  // Initialize first dot as active
  $('.nav-dot').eq(0).addClass('active');
});