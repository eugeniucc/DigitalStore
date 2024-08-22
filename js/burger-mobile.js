const burger = document.querySelector(".header_mobile-burger");
const navMenu = document.querySelector(".header_mobile-nav");
const body = document.body;
const navMenuOverlay = document.querySelector(".header__mobile-nav--overlay");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("nav-menu-show");
  body.classList.toggle("freeze");
  navMenuOverlay.classList.toggle("active");
});
