/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  
  

  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }



  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });


  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });



  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["karam khalil.", "an Ethical hacker.", " a Developer.", "Freelancer."],
      typeSpeed: 100,
      loop: true,
    });
  });


  

  $('.services-carousel').owlCarousel({
      // autoplay: true,
      // loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      // responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 3 } ,690: { items: 4 }}
    });

  

  

  // Call the functions
  magnifPopup();

});

$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})
