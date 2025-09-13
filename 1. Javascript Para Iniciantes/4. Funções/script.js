// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  return !!valor;
}
console.log(isTruthy("Gabriel"));

// Crie uma função matemática que retorne o perímetro de um quadrado (lembrando: perímetro é a soma dos quatro lados do quadrado)
function perimetroQuadrado(ladoQuadrado) {
  return ladoQuadrado * 4;
}

console.log(perimetroQuadrado(7));

// Crie uma função que retorne o seu nome completo ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Gabriel", "Alves"));

// Crie uma função que verifica se um número é par
function ePar(valor) {
  const testePar = valor % 2 === 0 ? "É par" : "É Impar";
  return testePar;
}

console.log(ePar(10));

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}

console.log(tipoDeDado("Gabriel"));

// addEventListener é uma função nativa do JavaScript, o primeiro parâmetro é o evento que ocorre e o segundo o Callback. Utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.

addEventListener("scroll", () => {
  console.log("Gabriel Alves");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
