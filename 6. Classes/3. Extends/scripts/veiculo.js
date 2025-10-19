export default class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this._quilometragem = 0;
  }

  get quilometragem() {
    return this._quilometragem;
  }

  set quilometragem(valor) {
    if (typeof valor !== "number" || valor <= this._quilometragem) {
      console.error("A quilometragem precisa ser maior a atual.");
      return;
    }

    this._quilometragem = valor;
  }

  static calcularIdade(ano) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - ano;
  }

  exibirInfo() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
  }
}
