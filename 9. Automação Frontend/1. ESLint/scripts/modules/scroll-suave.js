export default function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('[data-navbar] a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
