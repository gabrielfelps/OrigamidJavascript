export default function initModal() {
  const modal = document.querySelector('.modal-container');
  const openModal = document.querySelector('[data-modal="abrir"]');
  const closeModal = document.querySelector('[data-modal="fechar"]');

  openModal.addEventListener('click', (e) => {
    e.preventDefault();

    modal.classList.add('ativo');
  });

  function modalClose() {
    modal.classList.remove('ativo');
  }

  modal.addEventListener('click', (e) => {
    const outerModal = e.target;

    if (outerModal === modal) {
      modalClose();
    }
  });

  closeModal.addEventListener('click', modalClose);
}
