/* Único Rest */
function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou um " + premio);
  });
}

const ganhadores = ["Pedro", "Marta", "Maria"];
anunciarGanhadores("Carro", ...ganhadores);

/* Spread Argument */
const numeros = [4, 5, 20, 10, 30, 2, 33, 5];
const numeroMaximo = Math.max(...numeros);

console.log(numeroMaximo);
