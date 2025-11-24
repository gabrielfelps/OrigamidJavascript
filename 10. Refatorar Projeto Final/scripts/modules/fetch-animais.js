import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Puxa os animais através de um arquivo JSON. E cria cada animal utilizando createAnimal.
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumero();
    } catch (error) {
      console.error(error);
    }
  }

  // Anima os números de cada animal.
  function animaAnimaisNumero() {
    const animaNumeros = new AnimaNumeros(
      '[data-numero]',
      '.numeros',
      'active'
    );
    animaNumeros.init();
  }

  // Preenche cada animal no DOM.
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    const numerosGrid = document.querySelector(target);
    numerosGrid.appendChild(divAnimal);
  }

  // Cria a div contendo informações dos animais.
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}<h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  return criarAnimais();
}
