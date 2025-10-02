// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const background = document.querySelector("body");

const intervalorCor = setInterval(function () {
  background.classList.toggle("vermelho");
}, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const numero = document.getElementById("numeroNaTela");

let contador = 0;
let interval;

function cronometro() {
  interval = setInterval(() => {
    numero.innerText = ++contador;
  }, 100);
  iniciar.setAttribute("disabled", "");
}

function pausarCronometro() {
  clearInterval(interval);
  iniciar.removeAttribute("disabled", "");
}

function pararCronometro() {
  contador = 0;
  numero.innerText = contador;
}

iniciar.addEventListener("click", cronometro);
pausar.addEventListener("click", pausarCronometro);
pausar.addEventListener("dblclick", pararCronometro);
