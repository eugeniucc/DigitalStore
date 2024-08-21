const sizesBtn = document.querySelectorAll(".nike__sizes-btn");
const arrsizesBtn = [...sizesBtn];
const colorsBtn = document.querySelectorAll(".nike__colors-btn");
const arrcolorsBtn = [...sizesBtn];

arrsizesBtn.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});

// arrcolorsBtn.forEach((el) => {
//   el.classList.toggle("active");
// });
