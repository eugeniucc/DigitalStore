function linksActive() {
  const currentUrl = window.location.href;
  const links = document.querySelectorAll(".header_nav-links");
  links.forEach((element) => {
    if (element.href === currentUrl) {
      element.classList.add("header_nav-links-active");
    } else {
      element.classList.remove("header_nav-links-active");
    }
  });
}
document.addEventListener("DOMContentLoaded", linksActive);
