const frase = "JavaScript, TypeScript, CoffeeScript, Java";

// String.match()
const regexp = /\w+/g;
const matches = frase.match(regexp);

console.log(matches); // Se não possuir matches, ele retornará null.

// String.split()
const regexpSplit = /Script,\s/g;
const splits = frase.split(regexpSplit);

console.log(splits);

// String.replace()
const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexpTag = /(?<=<\/?)\w+/g;

const resultadoTag = tags.replace(regexpTag, "div");
console.log(resultadoTag);

// Grupos de Captura e Callback
const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`;

const regexpEmail = /(\w+@)([\w.])+/g;

const resultadoEmail = emails.replace(regexpEmail, function (...args) {
  if (args[2] === "@homail") {
    return `${args[1]}@hotmail`;
  } else if (args[2] === "@ggmail") {
    return `${args[1]}@gmail`;
  } else if (args[2] === "@oulook") {
    return `${args[1]}@outlook`;
  } else {
    return "x";
  }
});

console.log(resultadoEmail);
