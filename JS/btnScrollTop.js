const scrollBtn = document.getElementById("btnScrollTop");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const threshold = 300;
  const maxScroll = 1000;

  if (scrollY > threshold) {
    scrollBtn.classList.add("visible");

    const t = Math.min((scrollY - threshold) / (maxScroll - threshold), 1);

    scrollBtn.style.opacity = t;
    scrollBtn.style.transform = `translateX(-50%) scale(${0.5 + 0.5 * t})`;
  } else {
    scrollBtn.classList.remove("visible");
    scrollBtn.style.opacity = 0;
    scrollBtn.style.transform = "translateX(-50%) scale(0.5)";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
