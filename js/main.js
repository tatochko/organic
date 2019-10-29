$(function(){


  $('select').styler();

  $('.header__btn-menu').on('click',function() {
    $('.menu ul').slideToggle();
  });

  $('.slider').bxSlider({
    auto: true,
    controls: false,
    pager: true,
    slideWidth: 1075
  });
});
