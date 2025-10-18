class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }

  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }

  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }

  static blueButton(text) {
    return new Button(text, "blue", "white");
  }
}

const botaoAzul = Button.blueButton("Clicar");
