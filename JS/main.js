const contenidosCache = {
  historia: generarDetalle("historia", `
    <h3 id="titulo-historia">Historia</h3>
    <p style="word-break: break-word;">
      La Sociedad Estudiantil de Medicina (SEM) nació con el propósito de representar,
      apoyar y fomentar el desarrollo integral de los estudiantes de medicina.
      Desde su creación, ha sido un espacio de liderazgo, compañerismo y trabajo en equipo,
      impulsando actividades académicas, científicas y sociales que enriquecen la formación médica.
      <a href="historia.html" class="saber-mas">Saber más</a>
    </p>`),

  congresos: generarDetalle("congresos", `
    <h3 id="titulo-congresos">Congresos</h3>
    <p style="word-break: break-word;">
      CORMED es un congreso académico organizado por estudiantes de medicina que reúne a ponentes de distintas partes de México para abordar temas médicos de actualidad.
      Es un espacio de actualización, aprendizaje y diálogo entre profesionales de la salud y estudiantes, promoviendo el desarrollo académico y clínico en la región.
      <a href="congresos.html" class="saber-mas">Saber más</a>
    </p>`),

  mesaDirec: generarDetalle("mesaDirec", `
    <h3 id="titulo-mesa">Mesa Directiva</h3>
    <p style="word-break: break-word;">
      Conoce a los miembros actuales de la mesa directiva.
      <a href="mesaDirectiva.html" class="saber-mas">Saber más</a>
    </p>`),

  contactos: generarDetalle("contactos", `
    <h3 id="titulo-contactos">Contactos</h3>
    <p style="word-break: break-word;">
      Si deseas formar parte de nuestros proyectos, patrocinar eventos como el CORMED o establecer una alianza estratégica, puedes contactarnos a través de nuestros canales oficiales.
      <a href="contactos.html" class="saber-mas">Saber más</a>
    </p>`)
};

/* Generador de estructura con innerHTML incluido */
function generarDetalle(id, contenido) {
  const div = document.createElement("div");
  div.className = "detalle-seccion";
  div.id = id;

  const tituloMatch = contenido.match(/<h3[^>]*>(.*?)<\/h3>/);
  const tituloTexto = tituloMatch ? tituloMatch[1] : "";

  div.innerHTML = `
    <div class="contenedor-boton">
      <button onclick="cerrarContenedorDetalle()" aria-label="Cerrar detalle de ${tituloTexto}" class="boton-cerrar">
        &times;
      </button>
    </div>
    <div class="detalle__contenido" aria-labelledby="titulo-${id}">
      ${contenido}
    </div>
  `;

  return div;
}

/* CERRAR Y MOSTRAR INFO DESPLEGABLE */
function mostrarInfoContenedor(elemento, id) {
  const grid = document.querySelector(".inicio__secciones");
  const isMobile = window.innerWidth <= 954;

  const detalleAnterior = document.querySelector(".detalle-seccion");
  if (detalleAnterior) {
    if (detalleAnterior.id === id) {
      cerrarContenedorDetalle();
      return;
    } else {
      detalleAnterior.remove();
    }
  }

  // Clona desde el cache
  const detalle = contenidosCache[id].cloneNode(true);
  detalle.classList.add("aparecer");

  // Inserta eficientemente
  let insertado = false;
  if (isMobile) {
    const children = Array.from(grid.children);
    const index = children.indexOf(elemento);
    const filaIndex = index - (index % 2);
    const siguienteElemento = children[filaIndex + 2];
    if (siguienteElemento) {
      grid.insertBefore(detalle, siguienteElemento);
      insertado = true;
    }
  }
  if (!insertado) {
    grid.appendChild(detalle);
  }

  // Animación suave al insertar
  requestAnimationFrame(() => {
    detalle.scrollIntoView({ behavior: "smooth", block: "center" });
  });
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
