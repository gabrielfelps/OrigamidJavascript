function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou.`;
};

Pessoa.prototype.gritar = function () {
  return `${this.nome} gritou`;
};

Pessoa.prototype.apresentacao = function () {
  return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
};

const gabriel = new Pessoa("Gabriel", 23);
