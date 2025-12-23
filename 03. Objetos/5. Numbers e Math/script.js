// Retorne um número aleatório
// entre 1050 e 2000
const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(numeroAleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const arrayNumeros = numeros.split(", ");
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo);

// Crie uma função para limpar os preços, e retornar os números com centavos arredondados, depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function somarPrecosArredondados(precos) {
  const soma = precos.reduce((acumulador, preco) => {
    const limparPreco = Number(
      preco.toLowerCase().replace(",", ".").replace("r$", "").trim()
    );

    return acumulador + limparPreco;
  }, 0);

  return Number(soma.toFixed(2));
}

const somaTotal = somarPrecosArredondados(listaPrecos);
console.log(
  somaTotal.toLocaleString("en-US", { style: "currency", currency: "USD" })
);
