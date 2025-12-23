// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = () => {
    console.log(this.nome + " andou");
  };
}

const gabriel = new Pessoa("Gabriel", 23);
gabriel.andar();

// Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  this.seletor = seletor;
  const elements = document.querySelectorAll(this.seletor);
  this.ativar = () => {
    elements.forEach((element) => {
      element.classList.add("ativo");
    });
  };
  this.desativar = () => {
    elements.forEach((element) => {
      element.classList.remove("ativo");
    });
  };
}

const li = new Dom("li");
const ul = new Dom("ul");
