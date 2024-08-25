const burger = document.querySelector(".header_mobile-burger");
const navMenu = document.querySelector(".header_mobile-nav");
const body = document.body;
const navMenuOverlay = document.querySelector(".header__mobile-nav--overlay");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("nav-menu-show");
  body.classList.toggle("freeze");
  navMenuOverlay.classList.toggle("active");
  if (cartWrapperMobile.classList.contains("active")) {
    cartWrapperMobile.classList.remove("active");
  }
  if (searchContent.classList.contains("search_mobile-show")) {
    searchContent.classList.remove("search_mobile-show");
  }
});

navMenuOverlay.addEventListener("click", (e) => {
  burger.classList.remove("active");
  navMenu.classList.remove("nav-menu-show");
  body.classList.remove("freeze");
  navMenuOverlay.classList.remove("active");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    burger.classList.remove("active");
    navMenu.classList.remove("nav-menu-show");
    body.classList.remove("freeze");
    navMenuOverlay.classList.remove("active");
  }
});
