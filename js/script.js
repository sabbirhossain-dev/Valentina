//counter-part start//


$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//counter-part end//


//counter-part end//

$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    prevArrow:'<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//counter-part end//   







