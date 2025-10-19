/* Exemplo 1 */

const button = {
  get tamanho() {
    return this._numero;
  },

  set tamanho(numero) {
    this._numero = numero * 200;
  },
};

/* Exemplo 2 */

const frutas = {
  lista: [],

  set nova(fruta) {
    this.lista.push(fruta);
  },

  get exibirLista() {
    return this.lista;
  },
};

frutas.nova = "Maça";
frutas.nova = "Banana";
console.log(frutas.exibirLista);

/* Exemplo 3 */

class Button {
  constructor(texto, cor) {
    this.texto = texto;
    this.cor = cor;
  }

  get element() {
    const type = this._elementType || "button";
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.texto;
    buttonElement.style.color = this.cor;
    return buttonElement;
  }

  set element(type) {
    this._elementType = type;
  }
}

const btnAzul = new Button("Comprar", "blue");
btnAzul.element = "div";
console.log(btnAzul.element);
