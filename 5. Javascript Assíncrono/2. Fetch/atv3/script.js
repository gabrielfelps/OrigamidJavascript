// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const quote = document.querySelector("[data-quote]");
const btn = document.querySelector("[data-btn]");

function fetchAPI() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }

      return response.json();
    })
    .then((data) => (quote.innerText = data.value));
}

fetchAPI();

btn.addEventListener("click", fetchAPI);
