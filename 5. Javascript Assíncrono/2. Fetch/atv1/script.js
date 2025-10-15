// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const form = document.forms.cepForm;
const btn = form.cepBtn;
const result = document.getElementById("searchText");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputCEP = form.cep.value.replace("-", "");
  if (inputCEP === "") {
    result.classList.add("active");
    result.innerText = "Digite um valor válido.";
    return;
  }

  fetch(`https://viacep.com.br/ws/${inputCEP}/json/`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("CEP não encontrado ou inválido.");
      }
      return response.json();
    })
    .then((data) => {
      if (data.erro) {
        throw new Error("CEP não encontrado na base de dados.");
      }

      result.classList.add("active");
      result.innerText = `Rua: ${data.logradouro}\nBairro: ${data.bairro}\nEstado: ${data.estado}\nCidade: ${data.localidade}`;
    })
    .catch((error) => {
      result.classList.add("active");
      result.innerText = error.message;
    });
});
