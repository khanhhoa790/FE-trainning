const header = document.querySelector(".header");
const hambugerBar = document.querySelector(".menu-hamburger");
const menu = document.querySelector(".menu");

hambugerBar.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
});
