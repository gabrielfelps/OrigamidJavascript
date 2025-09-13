// Crie um objeto com os seus dados pessoais. Deve possui pelo menos duas propriedades nome e sobrenome
const Eu = {
  nome: "Gabriel",
  sobrenome: "Alves",
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

console.log(Eu.nomeCompleto());

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

console.log(carro);

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

const cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "Homem") console.log(`O ${this.raca} latiu.`);
    else console.log(`O ${this.raca} não latiu.`);
  },
};
