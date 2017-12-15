$(document).ready(function () {
  var $window = $(window);
  var $nav = $("nav")
  var stickyNavTop = 0;

  $window.on('resize load', function () {
    stickyNavTop = $nav.offset().top;
  });

  $window.on('scroll', function () {
    if ($window.scrollTop() > stickyNavTop) {
      $nav.removeClass('navbar-fancy');
    } else {
      $nav.addClass('navbar-fancy');
    }
  });
});
