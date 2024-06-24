const burger = document.querySelector(".header_mobile-burger");

const bar1 = document.querySelector("#bar-1");
const bar2 = document.querySelector("#bar-2");
const bar3 = document.querySelector("#bar-3");

const navMenu = document.querySelector(".header_mobile-nav");

burger.addEventListener("click", () => {
  bar1.classList.toggle("bar1");
  bar2.classList.toggle("bar2");
  bar3.classList.toggle("bar3");
  navMenu.classList.toggle("nav-menu-show");
});
