const burger = document.querySelector(".header_mobile-burger");
const navMenu = document.querySelector(".header_mobile-nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("nav-menu-show");
});
