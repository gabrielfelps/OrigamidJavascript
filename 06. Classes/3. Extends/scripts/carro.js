import Veiculo from "./veiculo.js";

export default class Carro extends Veiculo {
  constructor(marca, modelo, ano, numeroDePortas) {
    super(marca, modelo, ano);
    this.numeroDePortas = numeroDePortas;
  }

  exibirInfo() {
    const infoPai = super.exibirInfo();
    return `${infoPai}, Qtd. Portas: ${this.numeroDePortas}`;
  }
}
