/* OBJETOS */
const cliente = {
  nome: "Andre",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Video JS", "Video HTML"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};

const {
  digitais,
  fisicas,
  digitais: { livros, videos },
  fisicas: { cadernos },
} = cliente.compras;

console.log(digitais);
console.log(fisicas);
console.log(livros);
console.log(videos);
console.log(cadernos);

console.log("");

/* ARRAYS */
const frutas = ["Banana", "Uva", "Morango"];

const fruta1 = frutas[0];
const fruta2 = frutas[1];
const fruta3 = frutas[2];
console.log(fruta1, fruta2, fruta3);

const [primeira, segunda, terceira] = frutas;
console.log(primeira, segunda, terceira);

/* Argumento Desestruturado */
function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode);
}

document.addEventListener("keyup", handleKeyboard);
