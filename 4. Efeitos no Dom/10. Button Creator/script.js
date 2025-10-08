const form = document.forms.customizer;
const btn = document.querySelector(".btn");
const resultadoMostrar = document.querySelector(".css");

const styleHandler = {
  element: btn,

  texto(valor) {
    this.element.innerText = valor;
  },
  color(valor) {
    this.element.style.color = valor;
  },
  backgroundColor(valor) {
    this.element.style.backgroundColor = valor;
  },
  height(valor) {
    this.element.style.height = valor + "px";
  },
  width(valor) {
    this.element.style.width = valor + "px";
  },
  border(valor) {
    this.element.style.border = valor;
  },
  borderRadius(valor) {
    this.element.style.borderRadius = valor + "px";
  },
  fontFamily(valor) {
    this.element.style.fontFamily = valor;
  },
  fontSize(valor) {
    this.element.style.fontSize = valor + "rem";
  },
};

function showCSS() {
  resultadoMostrar.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}

function handleChange(e) {
  const target = e.target;
  const nome = target.name;
  const valor = target.value;

  styleHandler[nome](valor);
  saveValues(nome, valor);
  showCSS();
}

function saveValues(nome, valor) {
  localStorage[nome] = valor;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    styleHandler[propertie](localStorage[propertie]);
    form.elements[propertie].value = localStorage[propertie];
  });
}

form.addEventListener("change", handleChange);
