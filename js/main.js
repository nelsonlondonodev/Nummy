(function ($) {
  "use strict";

  // Evento de clic en las coookies
  document.addEventListener("DOMContentLoaded", function () {
    // Show the cookie message
    var cookieMessage = document.getElementById("cookie-message");
    cookieMessage.style.display = "block";

    // Hide the cookie message when the user clicks "Accept Cookies"
    var acceptCookiesButton = document.getElementById("accept-cookies");
    acceptCookiesButton.addEventListener("click", function () {
      cookieMessage.style.display = "none";
    });
  });

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Fixed Navbar
  $(".fixed-top").css("top", $(".top-bar").height());
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $(".fixed-top").addClass("bg-dark").css("top", 0);
    } else {
      $(".fixed-top").removeClass("bg-dark").css("top", $(".top-bar").height());
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1500,
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });
})(jQuery);
