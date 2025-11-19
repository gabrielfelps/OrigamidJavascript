export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // Ativa a tab de acordo com o index passado.
  tabActive(index) {
    this.tabContent.forEach((content) => {
      content.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anima;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // Adicionar os eventos nas tabs.
  addTabNavEvent() {
    this.tabMenu.forEach((imagem, index) => {
      imagem.addEventListener('click', () => this.tabActive(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Ativar primeiro item.
      this.tabActive(0);
      this.addTabNavEvent();
    }
  }
}
