// Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

const valores = transacoes.reduce(
  (contador, transacao) => {
    const valorLimpo = Number(transacao.valor.replace("R$ ", ""));
    if (transacao.descricao.startsWith("Taxa")) {
      contador.taxa += valorLimpo;
    } else {
      contador.recebimento += valorLimpo;
    }
    return contador;
  },
  { taxa: 0, recebimento: 0 }
);

console.log(`Valor Taxa: R$${valores.taxa}`);
console.log(`Valor Recebimento: R$${valores.recebimento}`);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransportes = transportes.split(";");

console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`
  .split("span")
  .join("a");

console.log(html);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";

console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let contadorTaxa = 0;

transacoes2.forEach((transacao) => {
  const taxa = transacao.trimStart().toLowerCase().startsWith("tax");
  if (taxa) {
    contadorTaxa++;
  }
});

console.log(contadorTaxa);
