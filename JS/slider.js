const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
let currentIndex = 0;
let slideInterval;

// Mueve el track al slide correspondiente
function actualizarPosicion() {
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Avanza al siguiente slide
function mostrarSiguiente() {
  currentIndex = (currentIndex + 1) % slides.length;
  actualizarPosicion();
  reiniciarAutoSlide();
}

// Regresa al slide anterior
function mostrarAnterior() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  actualizarPosicion();
  reiniciarAutoSlide();
}

// Inicia el avance automático
function iniciarAutoSlide() {
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    actualizarPosicion();
  }, 5000); // tiempo transicion
}

// Reinicia el temporizador del auto-slide
function reiniciarAutoSlide() {
  clearInterval(slideInterval);
  iniciarAutoSlide();
}

// Inicia cuando se carga la página
window.addEventListener("load", () => {
  actualizarPosicion();
  iniciarAutoSlide();
  window.addEventListener("resize", updateSlidePosition);
});
