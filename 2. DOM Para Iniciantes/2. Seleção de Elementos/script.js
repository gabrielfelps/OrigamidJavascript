// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  console.log(img);
});

// Retorne no console apenas as imagens que começaram com a palavra imagem
const images = document.querySelectorAll('[src^="img/imagem"]');

images.forEach((image) => {
  console.log(image);
});
// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("[href^='#']");

linksInternos.forEach((link) => {
  console.log(link);
});

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector("h2");
console.log(h2);

// Selecione o último p do site
const ultimoP = document.querySelector("footer p:last-child");
console.log(ultimoP);
