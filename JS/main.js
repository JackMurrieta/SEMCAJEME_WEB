
/*CERRAR Y MOSTRAR INFO DESPEGABLE*/
function mostrarInfoContenedor(elemento, id) {
  const ids = ["historia", "congresos", "mesaDirec", "contactos"];
  const grid = document.querySelector(".inicio__secciones");
  const isMobile = window.innerWidth <= 954; // Responsive

  // Si ya existe un detalle abierto
  const detalleAnterior = document.querySelector(".detalle-seccion");
  if (detalleAnterior !== null) {
    if (detalleAnterior.id === id) {
      cerrarContenedorDetalle();
      return;
    } else {
      detalleAnterior.remove(); // quitar el anterior
    }
  }

  // Crear nuevo contenedor
  const detalle = document.createElement("div");
  detalle.className = "detalle-seccion";
  detalle.id = id;

  // Contenido dinámico
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
        </p>`;
      break;
    case "congresos":
      contenido = `
        <h3>Congresos</h3>
        <p>
          CORMED es un congreso académico organizado por estudiantes de medicina que reúne a ponentes de distintas partes de México para abordar temas médicos de actualidad. Es un espacio de actualización, aprendizaje y diálogo entre profesionales de la salud y estudiantes, promoviendo el desarrollo académico y clínico en la región.
          <a href="historia.html" class="saber-mas">Saber más</a>
        </p>`;
      break;
    case "mesaDirec":
      contenido = `
        <h3>Mesa Directiva</h3>
        <p>
          Conoce a los miembros actuales de la mesa directiva.
          <a href="historia.html" class="saber-mas">Saber más</a>
        </p>`;
      break;
    case "contactos":
      contenido = `
        <h3>Contactos</h3>
        <p>
          Si deseas formar parte de nuestros proyectos, patrocinar eventos como el CORMED o establecer una alianza estratégica, puedes contactarnos a través de nuestros canales oficiales.
          <a href="historia.html" class="saber-mas">Saber más</a>
        </p>`;
      break;
  }

  // Estructura interna
  detalle.innerHTML = `
    <div class="contenedor-boton">
      <button onclick="cerrarContenedorDetalle()" aria-label="cerrar detalle" class="boton-cerrar">
        &times;
      </button>
    </div>
    <div class="detalle__contenido">
      ${contenido}
    </div>
  `;

  // Insertar el contenedor
  if (isMobile) {
    const children = Array.from(grid.children);
    const index = children.indexOf(elemento);

    const filaIndex = index - (index % 2); // inicio de la fila (0 o par)
    const siguienteElemento = children[filaIndex + 2];

    if (siguienteElemento) {
      grid.insertBefore(detalle, siguienteElemento);
    } else {
      grid.appendChild(detalle); // última fila
    }
  } else {
    grid.appendChild(detalle);
  }

  // Animación scroll
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
