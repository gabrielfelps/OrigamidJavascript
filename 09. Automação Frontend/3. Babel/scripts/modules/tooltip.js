// 1. Criar os atributos na div do objeto para qual vincularemos a Tooltip
// 2. Criar o evento mouseOver para quando o mouse entrar no alvo ser chamado a função
// 3. Criar a função para criar uma Tooltip
// 4. Criar o evento mouseLeave para quando o mouse sair do alvo ser chamado a função
// 5. Criar o evento mouseMove para que enquanto o mouse se mover a tooltip seguir-lo

// Obs: Criar estilo Tooltip
// Obs2: É possível passar objetos no 'addEventListener' que funções são executadas dentro de uma propriedade chamada 'handlEvent'.
export default function initToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });

  function onMouseOver() {
    const tooltipBox = createTooltip(this);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;

    onMouseMove.tooltipBox = tooltipBox;

    this.addEventListener('mouseleave', onMouseLeave);
    this.addEventListener('mousemove', onMouseMove);
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 15 + 'px';
      this.tooltipBox.style.left = e.pageX + 15 + 'px';
    },
  };

  function createTooltip(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
