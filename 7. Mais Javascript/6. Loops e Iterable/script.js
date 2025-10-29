// Crie 4 li's na página
// Utilizando o for...of e adicione uma classe a cada li
const todosOsLi = document.querySelectorAll("li");

for (const li of todosOsLi) {
  li.classList.add("ativo");
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for (const propriedade in window) {
  console.log(`${propriedade}: ${window[propriedade]}`);
}
