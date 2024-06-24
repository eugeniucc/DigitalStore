const searchButton = document.querySelector(".header_mobile-cart--btn");
const searchContent = document.querySelector(".header_mobile-search");
const svg = searchButton.querySelector("svg");

searchButton.addEventListener("click", () => {
  searchContent.classList.toggle("search_mobile-show");
  svg.classList.toggle("primary-color-stroke");
});
