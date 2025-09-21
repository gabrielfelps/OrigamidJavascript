// Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso
const cursos = Array.from(document.querySelectorAll(".curso"));

const objetosCurso = cursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horario = curso.querySelector(".horas").innerText;

  return {
    titulo,
    descricao,
    aulas,
    horario,
  };
});

console.log(objetosCurso);

// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const listaNumeros = numeros.filter((item) => {
  return item > 100;
});

console.log(listaNumeros);

// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const possuiBaixo = instrumentos.some((instrumento) => {
  return instrumento === "Baixo";
});

console.log(possuiBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorTotal = compras.reduce((acumulador, atual) => {
  const precoLimpo = Number(atual.preco.replace("R$ ", "").replace(",", "."));
  return acumulador + precoLimpo;
}, 0);

const valorFinal = valorTotal.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

console.log(valorFinal);
