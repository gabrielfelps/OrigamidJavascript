export default class AnimaNumeros {
  constructor(numeros, observeTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observeTarget);
    this.observerClass = observerClass;

    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do DOM, com número como texto. Este método irá incrementar a partir de 0 até o número final.
  static incrementarNumero(numero) {
    let contador = 0;
    const total = Number(numero.innerText);
    const incremento = Math.floor(total / 100);

    const timer = setInterval(() => {
      contador += incremento;
      numero.innerText = contador;

      if (contador > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa incrementarNumero para cada número selecionado dentro da NodeList.
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  // É chamado quando a mutação ocorrer.
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.oberver.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver para verificar quando a classe 'active' é adicionada ao elemento-alvo.
  addMutationObserver() {
    this.oberver = new MutationObserver(this.handleMutation);
    this.oberver.observe(this.observeTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observeTarget) {
      this.addMutationObserver();
    }

    return this;
  }
}
