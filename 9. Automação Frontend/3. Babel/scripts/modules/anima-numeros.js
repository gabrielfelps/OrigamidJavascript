export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  function animaNumeros() {
    numeros.forEach((numero) => {
      let contador = 0;
      const total = Number(numero.innerText);
      const incremento = Math.floor(total / 100);

      const timer = setInterval(() => {
        contador += incremento;
        numero.innerText = contador;

        if (contador > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      mutationObserver.disconnect();
      animaNumeros();
    }
  }

  const observeTarget = document.querySelector('.numeros');

  const mutationObserver = new MutationObserver(handleMutation);
  mutationObserver.observe(observeTarget, { attributes: true });
}
