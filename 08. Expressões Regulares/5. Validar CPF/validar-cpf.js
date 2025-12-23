export default class ValidarCPF {
  // 'element' é o input#cpf que capturamos.
  constructor(element) {
    this.element = element;
  }

  limpar(cpf) {
    return cpf.replace(/\D/g, "");
  }

  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }

  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf);
    return this.construir(cpfLimpo);
  }

  // O método que é chamado para validar o CPF toda vez que o evento "change" ocorrer. Ele recebe o valor do input#cpf.
  validar(cpf) {
    // Aqui o resultado do método de string que serve para retornar correspondência com o regex. Será retornado em formato de Array.
    const matchCPF = cpf.match(/(?:\d{3}[-.\s]?){3}(\d{2})/g);
    return matchCPF && matchCPF[0] === cpf;
  }

  // O método que é chamado quando ocorre o evento "change" através do eventListener. E esse método receberá como argumento o input#cpf.
  validarNaMudanca(cpfElement) {
    // Aqui ocorre uma condicional para caso a função validar retorne true ou false (a função validar, que receberá o valor do input#cpf).
    if (this.validar(cpfElement.value)) {
      // Caso verdadeiro, será modificado o valor dentro do input. Deixando-o formatado corretamente.
      cpfElement.value = this.formatar(cpfElement.value);
      // Será removido a classe que pinta a borda de vermelho.
      cpfElement.classList.remove("erro");
      // Será adicionado a classe que pinta a borda de verde.
      cpfElement.classList.add("valido");
      // Será removido a classe que mostra a mensagem de CPF incorreto.
      cpfElement.nextElementSibling.classList.remove("ativo");
    } else {
      // Será adicionado a classe que pinta a borda de vermelho.
      cpfElement.classList.add("erro");
      // Será removido a classe que pinta a borda de verde.
      cpfElement.classList.remove("valido");
      // Será adicionado a classe que mostra a mensagem de CPF incorreto.
      cpfElement.nextElementSibling.classList.add("ativo");
    }
  }

  // O método para criar um span com estilo e texto.
  adicionarErroSpan() {
    const erroElement = document.createElement("span");
    erroElement.classList.add("erro-text");
    erroElement.innerText = "CPF Inválido";
    this.element.parentElement.insertBefore(
      erroElement,
      this.element.nextElementSibling
    );
  }

  // O método que é chamado quando o objeto é iniciado pelo método "iniciar()", que adicionará um eventListener ao element(input#cpf).
  adicionarEvento() {
    this.element.addEventListener("change", () => {
      // Aqui a função que será chamada quando ocorrer o evento de "change".
      this.validarNaMudanca(this.element);
    });
  }

  // Na instanciação é chamado o método iniciar para colocar o eventListener pra escutar o evento de "change" nos inputs. E retorna a classe.
  iniciar() {
    this.adicionarEvento();
    this.adicionarErroSpan();
    return this;
  }
}
