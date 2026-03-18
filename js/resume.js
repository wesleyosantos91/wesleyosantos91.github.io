(function($) {
  "use strict";

  // Smooth scrolling
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 800, "easeInOutExpo");
        return false;
      }
    }
  });

  // Close responsive menu on link click
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Scrollspy
  $('body').scrollspy({
    target: '#sideNav'
  });

  // Simple AOS (Animate On Scroll) implementation
  function initAOS() {
    var elements = document.querySelectorAll('[data-aos]');

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var delay = entry.target.getAttribute('data-aos-delay') || 0;
          setTimeout(function() {
            entry.target.classList.add('aos-animate');
          }, parseInt(delay));
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(function(el) {
      observer.observe(el);
    });
  }

  // Run on DOM ready
  $(document).ready(function() {
    initAOS();
  });

})(jQuery);
