$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('nav').addClass('fixed-header');
    } else {
      $('nav').removeClass('fixed-header');
    }
  });
});