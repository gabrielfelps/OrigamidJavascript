const frutas = ["Banana", "Morango", "Uva"];
const frase = "Isso é JavaScript";

// for...of em Array
for (const fruta of frutas) {
  console.log(fruta);
}

// for...of em String
for (const char of frase) {
  console.log(char);
}

// for...of em Array-like
const btns = document.querySelectorAll("button");

for (const btn of btns) {
  btn.style.color = btn.innerText;
}

console.log(...btns);

// for...in em objeto (o for...in pega a chave/indice — desde que seja enumeravel)
const carro = {
  marca: "Chevrolet",
  ano: 1967,
};

for (const chave in carro) {
  console.log(`${chave}: ${carro[chave]}`);
}

// for...in em array
for (const fruta in frutas) {
  console.log(fruta);
}

// Exemplo PROPRIEDADE(CHAVE) e VALOR
const btnUnico = document.querySelector("button");
const btnStyles = getComputedStyle(btnUnico);

for (const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}
