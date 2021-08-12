$(function(){

  $('.user-nav__link--more, .menu__link').on('click', function(){
    $('.menu').toggleClass('menu--active');
    $('.user-nav').toggleClass('user-nav--active');
    $('.user-nav__link').toggleClass('user-nav__link--active');
    $('.logo').toggleClass('logo--active');
  });

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpead: 5000
  });

  $('.partners__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpead: 3000
  });

  const mixin1 = document.querySelector(".week__items");
  const mixin2 = document.querySelector(".design__items");

  if (mixin1) {
    mixitup('.week__items', {
      selectors: {
       control: '.filter1'
      }
   })
  }

  if (mixin2) {
    mixitup('.design__items', {
      selectors: {
        control: '.filter2'
     }
   })
  }

});