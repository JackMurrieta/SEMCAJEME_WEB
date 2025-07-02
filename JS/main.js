function mostrarMenu() {
  const nav = document.querySelector('.header__nav');
  const toggle = document.getElementById('navToggle');
  
  nav.classList.toggle('header__nav--visible');
  toggle.classList.toggle('nav__toggle--abierto');

  // Alternar el valor de aria-expanded
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
}


function mostrarInfoContenedor(elemento, id) {
  // Eliminar anterior detalle
  const detalleAnterior = document.querySelector('.detalle-seccion');
  if (detalleAnterior) detalleAnterior.remove();

  // Crear nuevo contenedor
  const detalle = document.createElement('div');
  detalle.className = 'detalle-seccion';

  let contenido = '';
  switch (id) {
    case 'historia':
      contenido = '<h3>Historia</h3><p>Esta sección cuenta los orígenes y evolución de nuestra organización.</p>';
      break;
    case 'congresos':
      contenido = '<h3>Congresos</h3><p>Aquí puedes ver información sobre nuestros congresos pasados y futuros.</p>';
      break;
    case 'mesaDirec':
      contenido = '<h3>Mesa Directiva</h3><p>Conoce a los miembros actuales de la mesa directiva.</p>';
      break;
    case 'contactos':
      contenido = '<h3>Contactos</h3><p>Información de contacto y medios de comunicación oficiales.</p>';
      break;
  }

  detalle.innerHTML = `<div class="detalle__contenido">${contenido}</div>`;

  const grid = document.querySelector('.inicio__secciones');
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // Insertar después de la fila correspondiente (dos columnas por fila)
    const index = Array.from(grid.children).indexOf(elemento);
    const filaInicio = index % 2 === 0 ? index : index - 1;
    const siguienteElemento = grid.children[filaInicio + 2];
    if (siguienteElemento) {
      grid.insertBefore(detalle, siguienteElemento);
    } else {
      grid.appendChild(detalle);
    }
  } else {
    // Escritorio: insertar al final del grid
    grid.appendChild(detalle);
  }
}
