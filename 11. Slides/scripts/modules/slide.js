export default class Slide {
  constructor(wrapper, slide) {
    this.wrapper = document.getElementById(wrapper);
    this.slide = document.getElementById(slide);
  }

  // Será chamada quando ocorrer o evento de pressionar o botão do mouse.
  onStart(e) {
    e.preventDefault();
    // Evento que ocorre ao mover o mouse mouse.
    this.wrapper.addEventListener('mousemove', this.onMove);
  }

  // Será chamada quando ocorrer o evento de mover o mouse APENAS enquanto estiver com o botão do mesmo clicado.
  onMove(e) {}

  // Será chamada quando ocorrer o evento de pressionar o botão do mouse.
  onEnd(e) {
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  // Serão adicionados os eventos abaixo ao wrapper.
  addSlideEvents() {
    // Evento que ocorre ao pressionar o botão do mouse.
    this.wrapper.addEventListener('mousedown', this.onStart);
    // Evento que ocorre ao soltar o botão do mouse.
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  // Todas as funções que serão passadas como callback terão o this (referente à classe) vinculado a elas.
  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  // Ao iniciar a classe...
  init() {
    // Serão chamadas as funções abaixo.
    this.bindEvents();
    this.addSlideEvents();

    return this;
  }
}
