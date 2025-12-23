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

initAccordionList();
