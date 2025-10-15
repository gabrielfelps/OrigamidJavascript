// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const bitcoinText = document.querySelector("[data-bitcoin-text]");
const bitcoinValue = document.querySelector("[data-bitcoin-value]");

function fetchAPI() {
  fetch("https://blockchain.info/ticker")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Problemas ao tentar se comunicar com os servidores.");
      }

      return response.json();
    })
    .then((data) => {
      bitcoinValue.innerText = data.BRL.buy.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    })
    .catch((error) => {
      console.error("Falha ao buscar dados da API:", error);
      bitcoinText.innerText = "Indisponível";
    });
}

fetchAPI();

setInterval(fetchAPI, 30000);
