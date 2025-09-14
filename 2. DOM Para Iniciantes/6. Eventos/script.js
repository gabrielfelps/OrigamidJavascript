// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
const linksInternos = document.querySelectorAll("[href^='#']");

function adicionarAtivo(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((link) => {
  link.addEventListener("click", adicionarAtivo);
});

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll("body *");

function infoElementoClicado(event) {
  event.currentTarget.remove();
}

allElements.forEach((element) => {
  element.addEventListener("click", infoElementoClicado);
});

// Utilizando o código anterior, ao invés de mostrar no console,remova o elemento que está sendo clicado, o método remove() remove um elemento
//[FEITO!]

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function aumentarTexto(event) {
  if (event.key === "t") {
    document.body.style.fontSize = "2rem";
  }
}

window.addEventListener("keydown", aumentarTexto);
