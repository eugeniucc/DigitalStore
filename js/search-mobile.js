const searchButton = document.querySelector(".header_mobile-cart--btn");
const searchContent = document.querySelector(".header_mobile-search");
const svg = searchButton.querySelector("svg");

searchButton.addEventListener("click", () => {
  searchContent.classList.toggle("search_mobile-show");
  svg.classList.toggle("primary-color-stroke");
  if (navMenu.classList.contains("nav-menu-show")) {
    navMenu.classList.remove("nav-menu-show");
  }
  if (navMenuOverlay.classList.contains("active")) {
    navMenuOverlay.classList.remove("active");
  }
  if (burger.classList.contains("active")) {
    burger.classList.remove("active");
  }
  if (cartWrapperMobile.classList.contains("active")) {
    cartWrapperMobile.classList.remove("active");
  }
});
