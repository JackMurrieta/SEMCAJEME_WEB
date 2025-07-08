/*TOGGLE MENU BOTON RESPONSIVE*/
function mostrarMenu() {
  const nav = document.querySelector(".header__nav");
  const toggle = document.getElementById("navToggle");

  nav.classList.toggle("header__nav--visible");
  toggle.classList.toggle("nav__toggle--abierto");

  // Alternar el valor de aria-expanded
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
}

/*CERRAR Y MOSTRAR INFO DESPEGABLE*/
function mostrarInfoContenedor(elemento, id) {
  let ids = ["historia", "congresos", "mesaDirec", "Contactos"];

  const detalleAnterior = document.querySelector(".detalle-seccion");

  if (detalleAnterior !== null) {
    if (detalleAnterior.id === id) {
      detalleAnterior.remove(); // Cierra si ya está abierto el mismo
      return;
    } else {
      detalleAnterior.remove(); // Cierra el anterior si es otro
    }
  }

  // Crear nuevo contenedor
  const detalle = document.createElement("div");
  detalle.className = "detalle-seccion";
  detalle.id = id;

  let contenido = "";
  switch (id) {
    case "historia":
      contenido =
        "<h3>Historia</h3><p>Esta sección cuenta los orígenes y evolución de nuestra organización.</p>";
      break;
    case "congresos":
      contenido =
        "<h3>Congresos</h3><p>Aquí puedes ver información sobre nuestros congresos pasados y futuros.</p>";
      break;
    case "mesaDirec":
      contenido =
        "<h3>Mesa Directiva</h3><p>Conoce a los miembros actuales de la mesa directiva.</p>";
      break;
    case "contactos":
      contenido =
        "<h3>Contactos</h3><p>Información de contacto y medios de comunicación oficiales.</p>";
      break;
  }

  detalle.innerHTML = `
  <div class="contenedor-boton">
    <button
      onclick="cerrarContenedorDetalle()"
      aria-label="cerrar detalle"
      class="boton-cerrar"
    >
      &times;
    </button>
  </div>
  <div class="detalle__contenido">
    ${contenido}
  </div>`;

  const grid = document.querySelector(".inicio__secciones");
  const isMobile = window.innerWidth <= 954; /*RESPONSIVE PIXELES*/

  if (isMobile) {
    const index = Array.from(grid.children).indexOf(elemento);
    const filaInicio = index % 2 === 0 ? index : index - 1;
    const siguienteElemento = grid.children[filaInicio + 2];
    if (siguienteElemento) {
      grid.insertBefore(detalle, siguienteElemento);
    } else {
      grid.appendChild(detalle);
    }
  } else {
    grid.appendChild(detalle);
  }

  /*Posicionamiento final de la animacion*/
  setTimeout(() => {
    detalle.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 100);
}

function cerrarContenedorDetalle() {
  const detalleAnterior = document.querySelector(".detalle-seccion");
  if (detalleAnterior) {
    detalleAnterior.remove();
  }
}
