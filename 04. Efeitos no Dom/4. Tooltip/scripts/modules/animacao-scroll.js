export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const window90 = window.innerHeight * 0.9;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - window90 < 0;
      if (isSectionVisible) {
        section.classList.add("active");
      }
    });
  }

  animaScroll();

  window.addEventListener("scroll", animaScroll);
}
