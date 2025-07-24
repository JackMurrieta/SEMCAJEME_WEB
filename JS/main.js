
/* CERRAR Y MOSTRAR INFO DESPLEGABLE */
function mostrarInfoContenedor(elemento, id) {
  const ids = ["historia", "congresos", "mesaDirec", "contactos"];
  const grid = document.querySelector(".inicio__secciones");
  const isMobile = window.innerWidth <= 954; // Responsive

  // Cierra si ya hay un detalle abierto
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

  // Contenido dinámico con etiquetas prettys y word-break
  let contenido = "";
  switch (id) {
    case "historia":
      contenido = `
        <h3 id="titulo-historia">Historia</h3>
        <p style="word-break: break-word;">
          La Sociedad Estudiantil de Medicina (SEM) nació con el propósito de representar,
          apoyar y fomentar el desarrollo integral de los estudiantes de medicina.
          Desde su creación, ha sido un espacio de liderazgo, compañerismo y trabajo en equipo,
          impulsando actividades académicas, científicas y sociales que enriquecen la formación médica.
          <a href="historia.html" class="saber-mas">Saber más</a>
        </p>`;
      break;
    case "congresos":
      contenido = `
        <h3 id="titulo-congresos">Congresos</h3>
        <p style="word-break: break-word;">
          CORMED es un congreso académico organizado por estudiantes de medicina que reúne a ponentes de distintas partes de México para abordar temas médicos de actualidad.
          Es un espacio de actualización, aprendizaje y diálogo entre profesionales de la salud y estudiantes, promoviendo el desarrollo académico y clínico en la región.
          <a href="congresos.html" class="saber-mas">Saber más</a>
        </p>`;
      break;
    case "mesaDirec":
      contenido = `
        <h3 id="titulo-mesa">Mesa Directiva</h3>
        <p style="word-break: break-word;">
          Conoce a los miembros actuales de la mesa directiva.
          <a href="mesaDirectiva.html" class="saber-mas">Saber más</a>
        </p>`;
      break;
    case "contactos":
      contenido = `
        <h3 id="titulo-contactos">Contactos</h3>
        <p style="word-break: break-word;">
          Si deseas formar parte de nuestros proyectos, patrocinar eventos como el CORMED o establecer una alianza estratégica, puedes contactarnos a través de nuestros canales oficiales.
          <a href="contactos.html" class="saber-mas">Saber más</a>
        </p>`;
      break;
  }

  // Extraer texto del h3 si se necesita para algo más (opcional)
  const tituloMatch = contenido.match(/<h3[^>]*>(.*?)<\/h3>/);
  const tituloTexto = tituloMatch ? tituloMatch[1] : "";

  // Estructura interna
  detalle.innerHTML = `
    <div class="contenedor-boton">
      <button onclick="cerrarContenedorDetalle()" aria-label="Cerrar detalle de ${tituloTexto}" class="boton-cerrar">
        &times;
      </button>
    </div>
    <div class="detalle__contenido" aria-labelledby="titulo-${id}">
      ${contenido}
    </div>
  `;

  // Insertar el contenedor en el lugar adecuado
  if (isMobile) {
    const children = Array.from(grid.children);
    const index = children.indexOf(elemento);
    const filaIndex = index - (index % 2);
    const siguienteElemento = children[filaIndex + 2];
    if (siguienteElemento) {
      grid.insertBefore(detalle, siguienteElemento);
    } else {
      grid.appendChild(detalle);
    }
  } else {
    grid.appendChild(detalle);
  }

  // Animación de desplazamiento
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
