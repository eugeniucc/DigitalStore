const [...sizesBtn] = document.querySelectorAll(".nike__sizes-btn");
const [...colorsBtn] = document.querySelectorAll(".nike__colors-btn");

sizesBtn.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});

colorsBtn.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});
