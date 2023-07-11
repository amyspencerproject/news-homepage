const modal = document.querySelector(".modal-content");
const overlay = document.querySelector("body");
const navButton = document.getElementById("js-nav-btn");
const openNav = document.querySelector(".nav-open");
const closeNav = document.querySelector(".nav-close");

// function to handle the button toggle using the aria-expanded boolean

const toggleButton = () => {
  const expandedToggle =
    navButton.getAttribute("aria-expanded") === "true" ? true : false;
  navButton.setAttribute("aria-expanded", !expandedToggle);
  overlay.classList.toggle("overlay");
  openNav.classList.toggle("hide");
  closeNav.classList.toggle("hide");
  modal.classList.toggle("hide");
};

navButton.addEventListener("click", (e) => {
  toggleButton();
});
