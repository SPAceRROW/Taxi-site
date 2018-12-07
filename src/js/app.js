import $ from 'jquery';


$(window).scroll(function() {
  // - - - - SCROOL - - - -
  if($(this).scrollTop() > 70) {
    $('.header').addClass('scroll');
  }
  else {
    $('.header').removeClass('scroll');
  }
});

$(document).ready(function() {
  // - - - - HAMBURGER - - - -
  $('.nav-button').click(function() {
    $('.header').toggleClass('active');
    $('.nav-button').toggleClass('active');
    $('.nav').toggleClass('active');
  });

});
