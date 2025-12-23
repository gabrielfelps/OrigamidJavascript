/* Regexp literal */
const regexp = /\d+/gi;
/* Construtor Regexp */
const regexp1 = new RegExp("\\d+", "gi");

const frase = "Javascript Linguagem 101";
console.log(frase.replace(regexp, "X"));
console.log(frase.replace(regexp1, "X"));

// Regexp.text() | Retorna True or False
const regexpTeste = /Java/g;
const fraseTeste = "Javascript e Java.";

let contador = 1;
while (regexpTeste.test(fraseTeste)) {
  console.log(contador++, regexpTeste.lastIndex);
}

// Regexp.exec() | Retorna Informações
const fraseExec = "JavaScript, TypeScript, CoffeeScript, Java";
const regexpExec = /\w+/g;

let regexpResult;
while ((regexpResult = regexpExec.exec(fraseExec)) !== null) {
  console.log(regexpResult[0]);
}
