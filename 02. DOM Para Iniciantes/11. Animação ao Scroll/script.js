function initTabContent() {
  const tabMenu = document.querySelectorAll("[data-tabmenu] li");
  const tabContent = document.querySelectorAll("[data-tabcontent] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((imagem, index) => {
      imagem.addEventListener("click", () => {
        tabActive(index);
      });
    });

    function tabActive(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }
  }
}
// Inicializando a função!
initTabContent();

function initAccordionList() {
  const descriptionTitles = document.querySelectorAll(
    "[data-description-list] dt"
  );
  const ativarClasse = "active";
  if (descriptionTitles.length) {
    descriptionTitles[0].nextElementSibling.classList.add(ativarClasse);
    descriptionTitles[0].classList.add(ativarClasse);

    function toggleDd() {
      this.classList.toggle(ativarClasse);
      this.nextElementSibling.classList.toggle(ativarClasse);
    }

    descriptionTitles.forEach((item) => {
      item.addEventListener("click", toggleDd);
    });
  }
}
// Inicializando a função!
initAccordionList();

function initSmoothScroll() {
  const linksInternos = document.querySelectorAll("[data-navbar] a[href^='#']");

  function scrollToSection(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    console.log(section);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
// Inicializando a função!
initSmoothScroll();

function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-scroll]");
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
// Inicializando a função!
initAnimaScroll();
