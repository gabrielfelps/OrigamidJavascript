// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const menuCopia = menu.cloneNode(true);

copy.appendChild(menuCopia);

// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector(".faq-lista");

const firstDt = faqLista.children[0];
console.log(firstDt);

// Selecione o DD referente ao primeiro DT
const firstDd = firstDt.nextElementSibling;
console.log(firstDd);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");

faq.replaceChild(animais, faqLista);
