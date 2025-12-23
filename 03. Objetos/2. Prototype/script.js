// Crie uma função construtora de Pessoas.
// 1. Deve conter: nome, sobrenome e idade.
// 2. Crie um método no protótipo que retorne o nome completo da pessoa.
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function () {
  return `Olá, meu nome é ${this.nome} ${this.sobrenome}`;
};

const gabriel = new Pessoas("Gabriel", "Alves", 23);

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document.
/* NodeList */
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

/* HTMLCollection */

/* Document */

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //HTML Element
li.click; //Function
li.innerText; // String
li.value; //Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
