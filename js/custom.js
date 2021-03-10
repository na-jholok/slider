$(function(){

    // jQuery methods go here...
//    slider-main 
$('.slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    // fade: true,
    // speed: 2000,
    dots:true,
  });

//   navbar flex
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 90) {
        $('.navbar').addClass('fixed');
    } else {
        $('.navbar').removeClass('fixed');
    }
});



  
  });