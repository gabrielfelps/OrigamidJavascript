export default class Modal {
  constructor(modal, abrir, fechar) {
    this.modalElement = document.querySelector(modal);
    this.openModal = document.querySelector(abrir);
    this.closeModal = document.querySelector(fechar);

    // Binding this ao callback para fazer referência ao objeto da classe.
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
  }

  // Abre ou fecha o modal.
  toggleModal() {
    this.modalElement.classList.toggle('ativo');
  }

  // Adiciona o evento de toggle ao modal.
  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  // Fecha o modal ao clicar do lado de fora.
  clickOutside(e) {
    if (e.target === this.modalElement) {
      this.toggleModal();
    }
  }

  // Adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.openModal.addEventListener('click', this.eventToggleModal);
    this.closeModal.addEventListener('click', this.eventToggleModal);
    this.modalElement.addEventListener('click', this.clickOutside);
  }

  init() {
    if (this.modalElement && this.openModal && this.closeModal) {
      this.addModalEvents();
    }
    return this;
  }
}
