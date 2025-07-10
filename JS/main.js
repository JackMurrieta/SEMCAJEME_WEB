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
      cerrarContenedorDetalle();
      return;
    } else {
      detalleAnterior.remove();
    }
  }

  // Crear nuevo contenedor
  const detalle = document.createElement("div");
  detalle.className = "detalle-seccion";
  detalle.id = id;

  let contenido = "";
  switch (id) {
    case "historia":
      contenido = `
        <h3>Historia</h3>
        <p>
          La Sociedad Estudiantil de Medicina (SEM) nació con el propósito de representar,
          apoyar y fomentar el desarrollo integral de los estudiantes de medicina.
          Desde su creación, ha sido un espacio de liderazgo, compañerismo y trabajo en equipo,
          impulsando actividades académicas, científicas y sociales que enriquecen la formación médica.
          <a href="historia.html" class="saber-mas">Saber más</a>
        </p>
      `;
      break;
    case "congresos":
      contenido = `
          <h3>Congresos</h3>
          <p>
        CORMED es un congreso académico organizado por estudiantes de medicina que reúne a ponentes de distintas partes de México para abordar temas médicos de actualidad. Es un espacio de actualización, aprendizaje y diálogo entre profesionales de la salud y estudiantes, promoviendo el desarrollo académico y clínico en la región.
            <a href="historia.html" class="saber-mas">Saber más</a>
          </p>
        `;
      break;

    case "mesaDirec":
      contenido = `
        <h3>Mesa Directiva</h3>
        <p>
          Conoce a los miembros actuales de la mesa directiva.
          <a href="historia.html" class="saber-mas">Saber más</a>
        </p>
      `;
      break;
    case "contactos":
      contenido = `
        <h3>Contactos</h3>
        <p>
          En la SEM estamos abiertos a colaborar con marcas, instituciones y empresas comprometidas con la educación, la salud y el desarrollo estudiantil.
          <a href="historia.html" class="saber-mas">Saber más</a>
        </p>
      `;
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
  if (detalleAnterior && !detalleAnterior.classList.contains("salida")) {
    detalleAnterior.classList.add("salida");
    setTimeout(() => {
      detalleAnterior.remove();
    }, 400);
  }
}
