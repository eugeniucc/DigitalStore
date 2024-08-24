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

navMenuOverlay.addEventListener("click", () => {
  filterProducts.classList.remove("active");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    filterProducts.classList.remove("active");
  }
});
