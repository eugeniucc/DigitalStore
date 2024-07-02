const dropdown = document.querySelector(".dropdown-all");
const dropdownSelected = dropdown.querySelector(".dropdown-selected");
const dropdownWrapper = dropdown.querySelector(".dropdown-wrapper");
const dropdownItem = dropdown.querySelectorAll(".dropdown-options");

dropdownSelected.addEventListener("click", () => {
  dropdownWrapper.style.display =
    dropdownWrapper.style.display === "block" ? "none" : "block";
});

dropdownItem.forEach((el) => {
  el.addEventListener("click", () => {
    const [arrayTextOne, arrayTextTwo] = el.textContent
      .replace(/\s+/g, "")
      .split(/:\s*/);
    dropdownSelected.innerHTML = `<span class="dropdown-span">${arrayTextOne}:</span> <p>${arrayTextTwo}</p>`;
    dropdownSelected.dataset.value = el.dataset.value;
    dropdownWrapper.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdownWrapper.style.display = "none";
  }
});
