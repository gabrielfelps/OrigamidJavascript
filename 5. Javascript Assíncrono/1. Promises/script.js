/* const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => resolve({ nome: "Gabriel", idade: 23 }), 1000);
  } else {
    reject(Error("Deu errado!"));
  }
});

const retorno = promessa
  .then((result) => {
    result.profissao = "Programador";
    return result;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((rejeitada) => console.error(rejeitada))
  .finally(() => {
    console.log("Programa encerrado.");
  }); */

// Exemplo 2

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário Logado");
  }, 1000);
});
const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados");
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((result) => {
  console.log(result);
});
