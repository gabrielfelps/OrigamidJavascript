import Veiculo from "./veiculo.js";

export default class Moto extends Veiculo {
  constructor(marca, modelo, ano, cilindradas) {
    super(marca, modelo, ano);
    this.cilindradas = cilindradas;
  }

  exibirInfo() {
    const infoPai = super.exibirInfo();
    return `${infoPai}, Cilindradas: ${this.cilindradas}`;
  }
}
