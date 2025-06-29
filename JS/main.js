  const contenidos = {
    historia: "Contenido sobre la historia del SEM...",
    congresos: "Contenido sobre los congresos realizados...",
    mesaDirec: "Contenido de la mesa directiva de SEM CAJEME",
    contactos:"Contenido de contactoas de la sem cajeme"
  };

  function mostrarDetalle(seccion) {
    const contenedor = document.getElementById("detalleContenedor");
    const contenido = document.getElementById("detalleContenido");
    
    contenido.innerHTML = contenidos[seccion] || "Sin contenido.";
    contenedor.classList.add("activo");
  }

  function cerrarDetalle() {
    document.getElementById("detalleContenedor").classList.remove("activo");
  }