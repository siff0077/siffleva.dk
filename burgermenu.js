

const menu = document.querySelector("svg");
menu.addEventListener("click", morph);

function morph() {
  menu.classList.toggle("open");
  document.querySelector("#burgermenu_links").classList.toggle("inactive");
}