(function ($) {
  "use strict";

  // Gestión de Cookies con localStorage
  document.addEventListener("DOMContentLoaded", function () {
    var cookieBanner = document.getElementById("cookie-banner");
    var acceptBtn = document.getElementById("accept-cookies");
    var rejectBtn = document.getElementById("reject-cookies");

    // Verificar si ya existe consentimiento
    if (!localStorage.getItem("nummy_cookies_consent")) {
      // Si no hay item en localStorage, mostramos el banner con un pequeño retraso para la animación
      setTimeout(function() {
        cookieBanner.style.display = "flex";
      }, 1000);
    }

    // Lógica para Aceptar
    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        localStorage.setItem("nummy_cookies_consent", "accepted");
        cookieBanner.style.display = "none";
        // Aquí se podrían activar scripts de terceros (GA, Pixel, etc.)
      });
    }

    // Lógica para Rechazar (o Configuración básica de 'solo necesarias')
    if (rejectBtn) {
      rejectBtn.addEventListener("click", function () {
        localStorage.setItem("nummy_cookies_consent", "rejected");
        cookieBanner.style.display = "none";
        // Aquí nos aseguramos de NO cargar scripts de terceros
      });
    }
    
    // Reabrir configuración desde el footer
    var openSettingsBtn = document.getElementById("open-cookie-settings");
    if (openSettingsBtn) {
      openSettingsBtn.addEventListener("click", function() {
        cookieBanner.style.display = "flex";
        // Opcional: reiniciar animación
        cookieBanner.style.animation = 'none';
        cookieBanner.offsetHeight; /* trigger reflow */
        cookieBanner.style.animation = 'slideUp 0.5s ease-out forwards';
      });
    }
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



  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
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

  // Lightbox Logic
  $(document).ready(function() {
    const lightbox = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".modal-close");
    const openBtns = document.querySelectorAll(".open-lightbox");

    if (lightbox && modalImg) {
      openBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imgSrc = this.getAttribute("data-img");
          modalImg.src = imgSrc;
          lightbox.classList.add("active");
          document.body.style.overflow = "hidden"; // Prevent scroll
        });
      });

      const closeLightbox = () => {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
        setTimeout(() => {
          modalImg.src = "";
        }, 300);
      };

      if (closeBtn) {
        closeBtn.addEventListener("click", closeLightbox);
      }

      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });

      // Close on Esc key
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && lightbox.classList.contains("active")) {
          closeLightbox();
        }
      });
    }
  });
})(jQuery);
