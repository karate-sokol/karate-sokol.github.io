$(document).ready(function () {

  var $window = $(window);

  function extraNavbar() {
    var $navWrapper = $("#extraNavbarWrapper");
    var $nav = $("#extraNavbar").find(".navbar");
    var stickyNavTop = 0;

    $window.on('resize load', function () {
      stickyNavTop = $navWrapper.offset().top;
    });

    $window.on('scroll', function () {
      if ($window.scrollTop() > stickyNavTop) {
        $nav.removeClass('navbar-fancy');
        $nav.addClass('navbar-default');
      }

      else {
        $nav.removeClass('navbar-default');
        $nav.addClass('navbar-fancy')
      }
    });

  }

  extraNavbar();

    // $(window).scroll(function () {
  //   if ($(window).scrollTop() == 0) {
  //     $("#extraNavbar .navbar").removeClass("navbar-default");
  //     isNavbarInverted = false;
  //   } else if (!isNavbarInverted) {
  //     $("#extraNavbar .navbar").addClass("navbar-default");
  //     isNavbarInverted = true;
  //   }

    // if ($window.scrollTop() > 0) {
    //   $("#extraNavbar").addClass("navbar-inverted");
    //
    // } else if (isNavbarInverted) {
    //
    // }

  // });

});