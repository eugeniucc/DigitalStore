const thumbsImg = document.querySelectorAll(".nike__swiper-thumbs-content");
const arrThumbs = [...thumbsImg];

arrThumbs.forEach((el) => {
  el.addEventListener("click", () => {
    arrThumbs.forEach((item) => {
      item.classList.remove("active");
    });
    el.classList.add("active");
  });
});
