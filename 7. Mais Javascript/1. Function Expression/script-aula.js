// Function Declaration
function somar(a, b) {
  return a + b;
}

// Function Expression
const subtrair = function (a, b) {
  return a - b;
};

// Function Expression (Arrow Function)
const multiplicar = (a, b) => a * b;

console.log(somar(3, 3));
console.log(subtrair(10, 5));
console.log(multiplicar(4, 2));

// IIFE - Immediately Invoked Function Expression
const instrumento = "Violão";

(function () {
  const instrumento = "Guitarra";
  console.log(instrumento);
})();

console.log(instrumento);
