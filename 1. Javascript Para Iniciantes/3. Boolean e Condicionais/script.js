// Verifique se a sua idade é maior do que a de algum parente. Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
const minhaIdade = 23;
let idadeParente = Math.floor(Math.random() * 100);
console.log(idadeParente);

if (minhaIdade > idadeParente) {
  console.log("Minha idade é maior");
} else if (minhaIdade < idadeParente) {
  console.log("Minha idade é menor");
} else {
  console("Minha idade é igual");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; //3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; //Truthy
var idade = 28; //Truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil possui mais habitantes");
} else {
  console.log("China possui mais habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
} // Falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
// Cão
