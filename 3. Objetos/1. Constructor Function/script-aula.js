/* 1. Objetos */
const pessoa = {
  nome: null,
  idade: null,
};

const gabriel = pessoa;
gabriel.nome = "Gabriel";
gabriel.idade = 23;

console.log(gabriel);

const ilza = pessoa;
ilza.nome = "Ilza";
ilza.idade = 22;

console.log(ilza);

/* 2. Constructor Functions */
function Jogo() {
  this.nome = "";
  this.preco = 0;
}

const rdr = new Jogo();
rdr.nome = "Red Dead Redemption";
rdr.preco = 30;

const rdr2 = new Jogo();
rdr2.nome = "Red Dead Redemption 2";
rdr2.preco = 60;

const re4 = new Jogo();
re4.nome = "Resident Evil 4";
re4.preco = 59.99;

const re5 = new Jogo();
re4.nome = "Resident Evil 5";
re4.preco = 59.99;

function Filme(nome, dataLancamento) {
  this.nome = nome;
  this.dataLancamento = dataLancamento;
}

const theBatman = new Filme("The Batman", 2022);
const superman = new Filme("Superman", 2025);

const spiderMan = new Filme("Spider-Man: Brand New Day", 2026);
const fantasticFour = new Filme("Fantastic Four", 2025);

function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const chevrolet = new Carro("Chevrolet", 20000);

function Dom() {
  this.seletor = "li";
  const element = document.querySelectorAll(this.seletor);
  this.ativo = () => {
    element.classList.add("ativo");
  };
}

const lista = new Dom();
lista.seletor = "ul";
lista.ativo();

const lastLi = new Dom();
lista.seletor = "li:last-child";
lista.ativo();
