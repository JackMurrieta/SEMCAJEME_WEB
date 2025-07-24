/*TOGGLE MENU BOTON RESPONSIVE*/
function mostrarMenu() {
  const nav = document.querySelector(".header__nav");
  const toggle = document.getElementById("navToggle");

  nav.classList.toggle("header__nav--visible");
  toggle.classList.toggle("nav__toggle--abierto");

  // Alternar el valor de aria-expanded
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));

  // Evitar scroll
  document.body.classList.toggle("no-scroll", !expanded);
}
