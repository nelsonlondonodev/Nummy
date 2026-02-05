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
      if (cookieBanner) {
         setTimeout(function() {
            cookieBanner.style.display = "flex";
         }, 1000);
      }
    }

    // Lógica para Aceptar
    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        localStorage.setItem("nummy_cookies_consent", "accepted");
        if (cookieBanner) cookieBanner.style.display = "none";
        // Aquí se podrían activar scripts de terceros (GA, Pixel, etc.)
      });
    }

    // Lógica para Rechazar (o Configuración básica de 'solo necesarias')
    if (rejectBtn) {
      rejectBtn.addEventListener("click", function () {
        localStorage.setItem("nummy_cookies_consent", "rejected");
        if (cookieBanner) cookieBanner.style.display = "none";
        // Aquí nos aseguramos de NO cargar scripts de terceros
      });
    }
    
    // Reabrir configuración desde el footer
    var openSettingsBtn = document.getElementById("open-cookie-settings");
    if (openSettingsBtn && cookieBanner) {
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

    // Manejo del Formulario de Contacto (Preparado para n8n)
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value,
          source: 'Sitio Web Nummy'
        };

        // Feedback visual inmediato
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'Enviando...';

        // NOTA: Aquí es donde conectarás tu webhook de n8n más adelante
        // fetch('TU_URL_DE_N8N_AQUI', { method: 'POST', body: JSON.stringify(formData) })

        // Simulamos envío por ahora
        setTimeout(() => {
          formFeedback.style.display = 'block';
          formFeedback.className = 'mt-3 text-center success';
          formFeedback.innerText = '¡Gracias! Hemos recibido tu solicitud correctamente.';
          
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerText = originalBtnText;

          // Ocultar mensaje después de 5 segundos
          setTimeout(() => {
            formFeedback.style.display = 'none';
          }, 5000);
        }, 1500);
      });
    }

    // Lógica avanzada para Menú Móvil
    const navbarCollapse = document.getElementById('navbarCollapse');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.nav-item.nav-link');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    // Mostrar/Ocultar Overlay según el estado del menú
    navbarCollapse.addEventListener('show.bs.collapse', function () {
      navOverlay.classList.add('active');
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function () {
      navOverlay.classList.remove('active');
    });

    // Cerrar al hacer click en el overlay (fuera del menú)
    navOverlay.addEventListener('click', function () {
      bsCollapse.hide();
    });

    // Cerrar al hacer click en un enlace (para navegación interna #)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          bsCollapse.hide();
        }
      });
    });
  });
})(jQuery);
