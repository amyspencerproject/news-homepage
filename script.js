const modal = document.querySelector(".modal-content");
const overlay = document.querySelector("body");

const navButton = document.getElementById("js-nav-btn");
const openNav = document.querySelector(".nav-open");
const closeNav = document.querySelector(".nav-close");

// function to handle the button toggle using the aria-expanded boolean

const toggleButton = () => {
  const ariaExpanded = navButton.getAttribute("aria-expanded");
  console.log("Something worked! 🚀");

  if (ariaExpanded == "false") {
    console.log("This part of the function is working!🔥");
    navButton.setAttribute("aria-expanded", "true");
    openNav.classList.add("hide");
    closeNav.classList.remove("hide");
    modal.classList.remove("hide");
    overlay.classList.add("overlay");
  } else {
    navButton.setAttribute("aria-expanded", "false");
    openNav.classList.remove("hide");
    closeNav.classList.add("hide");
    modal.classList.add("hide");
    overlay.classList.remove("overlay");
    console.log("The other part of the function is working!🥳");
  }
};

navButton.addEventListener("click", (e) => {
  toggleButton();
});
