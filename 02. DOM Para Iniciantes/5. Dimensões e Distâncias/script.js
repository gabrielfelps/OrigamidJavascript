// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector("img");

console.log("Distância da primeira imagem até o topo: " + img.offsetTop);

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll("img");

let imgLargura = 0;

imgs.forEach((img) => {
  img.getBoundingClientRect();
  imgLargura += img.width;
});

console.log("Largura de todas as imagens: " + imgLargura);

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.getBoundingClientRect();
  if (link.width >= 48 && link.width >= 48) {
    console.log(link, "Possui o mínimo");
  } else {
    console.log(link, "Não possui o mínimo");
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const menorQue720 = window.matchMedia("(max-width: 720px)").matches;
const nav = document.querySelector(".menu");

if (menorQue720) {
  nav.classList.add("menu-mobile");
}
