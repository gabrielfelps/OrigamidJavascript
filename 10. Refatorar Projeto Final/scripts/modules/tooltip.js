export default class ToolTip {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);

    // Bind dos objetos da classe aos callbacks.
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Remove a tooltip e os eventos de mouseMove e mouseLeave.
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // De acordo com a posição do mouse, altera os estilos para movimentação da tooltip.
  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 15}px`;

    if (e.pageX + 225 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 195}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 15}px`;
    }
  }

  createTooltip(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Cria a tooltip e adiciona os eventos de mouseMove e mouseLeave.
  onMouseOver({ currentTarget }) {
    this.createTooltip(currentTarget);

    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  // Adiciona os eventos de mouseOver a cada tooltip.
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    } else {
      return this;
    }
  }
}
