$(function(){

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    autoplaySpead: 3000
  });

  $('.partners__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    arrows: false,
  });

  var mixer = mixitup('.week__items');
  var mixer = mixitup('.design__items');

});