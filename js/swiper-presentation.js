// INDEX HTML SWIPER

var swiper = new Swiper(".swiper_presentation", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// TENIS NIKE REVOLUTION SWIPER

var swiper = new Swiper(".nike__swiper-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper = new Swiper(".nike__swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
