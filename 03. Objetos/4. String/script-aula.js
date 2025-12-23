const comida = "Pizza";
const liquido = new String("Água");
const ano = new String(2018);

const listaFrutas = "Melancia, Banana, Laranja";
const fruta = "Laranja";

/* Slice */
const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

/* indexOf e lastIndexOf */
const instrumento = "Guitarra";

instrumento.indexOf("r"); // 5
instrumento.lastIndexOf("r"); // 6
instrumento.indexOf("ta"); // 3

console.log();

/* Split */
const listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
const arrayItens = listaItens.split(" ");
const arrayFormatado = arrayItens.join(", ");

console.log(arrayFormatado);
