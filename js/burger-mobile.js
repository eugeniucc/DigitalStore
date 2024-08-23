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

navMenuOverlay.addEventListener("click", (e) => {
  burger.classList.remove("active");
  navMenu.classList.remove("nav-menu-show");
  body.classList.remove("freeze");
  navMenuOverlay.classList.remove("active");
  filterProducts.classList.remove("active");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    burger.classList.remove("active");
    navMenu.classList.remove("nav-menu-show");
    body.classList.remove("freeze");
    navMenuOverlay.classList.remove("active");
    filterProducts.classList.remove("active");
  }
});

// Products html

const filterButton = document.querySelector(".dropdown__category");
const filterProducts = document.querySelector(".sidebar__mobile");

filterButton.addEventListener("click", () => {
  filterProducts.classList.toggle("active");
  navMenuOverlay.classList.toggle("active");
  body.classList.toggle("freeze");
});

const sidebarMobileClose = document.querySelector(".sidebar_filter-close");

sidebarMobileClose.addEventListener("click", () => {
  filterProducts.classList.remove("active");
  navMenuOverlay.classList.remove("active");
  body.classList.remove("freeze");
});
