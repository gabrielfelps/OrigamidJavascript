/* Método para criação de Objetos (Object.create()) */
const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return "buzinou.";
  },
};

const impala = Object.create(carro).init("Impala");
impala.acelerar();

const ferrari = Object.create(carro).init("Ferrari");
ferrari.acelerar();

/* Adicionar Propriedades a outros objetos (Object.assign(alvo, obj1, obj2)) */
/* const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou.";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

const carro2 = {
  rodas: 4,
  mala: true,
};

console.log(moto);
Object.assign(moto, funcaoAutomovel);
console.log(moto); */

/* Definir Propriedades de um objeto */
const moto = {};

Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false,
    writable: false,
    enumerable: true,
  },
});

console.log(moto);

delete moto.rodas;
console.log(moto);
