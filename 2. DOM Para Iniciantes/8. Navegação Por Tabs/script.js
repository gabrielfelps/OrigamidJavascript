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
