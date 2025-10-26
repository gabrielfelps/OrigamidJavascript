function createButton(text) {
  // Como se fosse "private" em Java
  const numeroSecreto = "adadsdad";

  function create() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }

  return Object.freeze({
    create,
  });
}
const btnComprar = createButton("Comprar");
const btnVender = createButton("Vender");
console.log(btnComprar.create());
console.log(btnVender.create());

//undefined
console.log(btnVender.numeroSecreto);

/* CONSTRUCTOR FUNCTION sem o 'new' */
function Pessoa(nome) {
  if (!new.target) {
    return new Pessoa(nome);
  }
  return (this.nome = nome);
}

const gabriel = Pessoa("Gabriel");
console.log(gabriel);
