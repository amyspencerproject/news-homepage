const openNav = document.querySelector(".nav-hamburger");
const modal = document.querySelector(".modal-content");
const closeNav = document.querySelector(".nav-close");

openNav.addEventListener("click", (e) => {
  e.preventDefault(); //not sure this is need since nothing is submitted?
  openNav.style.display = "none";
  modal.classList.remove("hide");
});

// event listener for a touchscreen device on nav hamburger
// maybe build with "click" so it can be tested and then switch to touchstart
// hide nav hamburger
// open modal div
// put large bos-shadow on the rest of page behind modal
// keep modal div open
// event listener on nav close
// hide modal
// return nav hamburger
