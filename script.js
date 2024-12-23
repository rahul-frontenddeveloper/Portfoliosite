///////////////////////////////////////////////////////////
// Make Mobile Navigation Work
const btnNavEl = document.querySelector(".Mobile-nav");
const navbarEl = document.querySelector(".navbar-container");

btnNavEl.addEventListener("click", function () {
  navbarEl.classList.toggle("nav-open");
});
