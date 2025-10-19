import Veiculo from "./scripts/veiculo.js";
import Carro from "./scripts/carro.js";
import Moto from "./scripts/moto.js";

const carro1 = new Carro("Ford", "Ka", 2020, 4);
const veiculoGenerico = new Veiculo("Yamaha", "Factor 125", 2022);
const moto1 = new Moto("Harley-Davidson", "Sportster 1200 Custom", 2019, 1202);

console.log(carro1.exibirInfo());
// Marca: Ford, Modelo: Ka, Ano: 2020 - Portas: 4
console.log(veiculoGenerico.exibirInfo());
// Marca: Yamaha, Modelo: Factor 125, Ano: 2022
console.log(moto1.exibirInfo());

carro1.quilometragem = 15000;
console.log(`Quilometragem do carro: ${carro1.quilometragem} km`);

console.log("--- Tentando regredir a quilometragem ---");
carro1.quilometragem = 12000;
console.log(
  `Quilometragem após tentativa inválida: ${carro1.quilometragem} km`
);

const idadeDoCarro = Veiculo.calcularIdade(carro1.ano);
console.log(`O carro tem ${idadeDoCarro} anos de uso.`);
