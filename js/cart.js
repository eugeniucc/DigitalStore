// index html

const cartIndexDesktop = document.querySelector(".header_cart");
const cartWrapperDesktop = document.querySelector(".header__cart-desktop");

const cartIndexTablet = document.querySelector(".header_cart-tablet");
const cartWrapperTablet = document.querySelector(".header__cart-tablet");

const cartIndexMobile = document.querySelector(".header_cart-mobile");
const cartWrapperMobile = document.querySelector(".header__cart-mobile");

cartIndexDesktop.addEventListener("click", () => {
  cartWrapperDesktop.classList.toggle("active");
});

cartIndexTablet.addEventListener("click", () => {
  cartWrapperTablet.classList.toggle("active");
});

cartIndexMobile.addEventListener("click", () => {
  cartWrapperMobile.classList.toggle("active");
  if (navMenu.classList.contains("nav-menu-show")) {
    navMenu.classList.remove("nav-menu-show");
  }
  if (navMenuOverlay.classList.contains("active")) {
    navMenuOverlay.classList.remove("active");
  }
  if (burger.classList.contains("active")) {
    burger.classList.remove("active");
  }
  if (searchContent.classList.contains("search_mobile-show")) {
    searchContent.classList.remove("search_mobile-show");
  }
});
