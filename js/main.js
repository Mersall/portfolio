$(document).ready(function() {
  'use strict';
  $(this).scrollTop(0);

  //header-content
  $('.content').animate({ top: '25%' }, 1000);

  //ABOUT

  $(window).on('scroll', function() {
    var sc = $(window).scrollTop();

    if (sc > 238) {
      $('#about').fadeTo(1000, 1);
    }
  });

  //skills
  $(window).on('scroll', function() {
    var sc = $(window).scrollTop();

    if (sc > 710) {
      $('#html').fadeTo(800, 1);
      $('#css').fadeTo(900, 1);
      $('#Bootstrap').fadeTo(1100, 1);
      $('#react').fadeTo(1200, 1);
      $('#sass').fadeTo(1300, 1);
      $('#gulp').fadeTo(1400, 1);
      $('#js').fadeTo(1500, 1);
      $('#jQuery').fadeTo(1600, 1);
      $('#Git').fadeTo(1700, 1);
    }
  });

  //skills
  $(window).on('scroll', function() {
    var sc = $(window).scrollTop();

    if (sc > 1416) {
      $('#p-row,#p-row4').animate({ right: '0' }, 800);
      $('#p-row2').animate({ top: '0' }, 800);
      $('#p-row3,#p-row6').animate({ left: '0' }, 800);
      $('#p-row5').animate({ bottom: '0' }, 1000);
    }
  });
});
