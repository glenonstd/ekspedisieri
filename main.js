(function ($) {
    'use strict'

    const navbar = document.getElementById("navbar");
    const btntop = document.getElementById("btntop");

    window.addEventListener("scroll", function () {
      navbar.classList.toggle("navbar-scroll", window.scrollY > 100);
      btntop.classList.toggle("scroll", window.scrollY > 500);
    });

    btntop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
})(jQuery)