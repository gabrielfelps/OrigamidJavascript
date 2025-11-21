export default class AccordionList {
  constructor(lista) {
    this.listaAcordeao = document.querySelectorAll(lista);
    this.ativarClasse = 'active';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.ativarClasse);
    item.nextElementSibling.classList.toggle(this.ativarClasse);
  }

  // Adiciona eventos ao accordion
  addAccordionEvent() {
    this.listaAcordeao.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // Iniciar Função
  init() {
    if (this.listaAcordeao.length) {
      // Ativar primeiro item
      this.toggleAccordion(this.listaAcordeao[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
