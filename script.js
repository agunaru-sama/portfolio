$(document).ready(function(){
  // Slick Slider Configuration for autoplay with multiple slides shown
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev">‹</button>',
    nextArrow: '<button type="button" class="slick-next">›</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Example of toggling navigation (if needed)
  $(".btn-toggle").click(function() {
    $("header h2").toggleClass("hidden");
  });
});