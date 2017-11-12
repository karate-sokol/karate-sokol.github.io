$(document).ready(function () {

  var $window = $(window);

  (function extraNavbar() {
    var $navWrapper = $("#extraNavbarWrapper");
    var $nav = $("#extraNavbar").find(".navbar");
    var stickyNavTop = 0;

    $window.on('resize load', function () {
      stickyNavTop = $navWrapper.offset().top;
    });

    $window.on('scroll', function () {
      if ($window.scrollTop() > stickyNavTop) {
        $nav.removeClass('navbar-fancy');
      }
      else {
        $nav.addClass('navbar-fancy');
      }
    });

  })();

});