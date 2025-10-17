export default function initTabContent() {
  const tabMenu = document.querySelectorAll("[data-tab-menu] li");
  const tabContent = document.querySelectorAll("[data-tab-content] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function tabActive(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anima;
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((imagem, index) => {
      imagem.addEventListener("click", () => {
        tabActive(index);
      });
    });
  }
}
