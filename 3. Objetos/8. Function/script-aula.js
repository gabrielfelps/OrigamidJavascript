/* function darOi(nome, idade) {
  console.log(
    "Oi para você, " + nome + "! Parabêns pelos seus " + idade + " anos."
  );
}

darOi.call(null, "Gabriel", 23);

function descricaoCarro(velocidade) {
  console.log(this.marca + " " + this.ano + " " + velocidade);
}

descricaoCarro.call({ marca: "Impala", ano: 1967 }, 100 + "km/h"); */

/* const carros = ["Ford", "Fiat", "VW"];
const frutas = ["Banana", "Uva", "Maça"];

carros.forEach.call(frutas, (carro) => console.log(carro)); */

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

const ul = new Dom("ul");
const li = new Dom("li");

ul.ativo.call(li, "ativo");

console.log(ul);
