// Selecionando lista de CPFs
const cpfsLista = document.querySelectorAll(".cpf li");

// 1. Desestruturação do Nodelist (transformando ela em um Array)
const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

// Function Expression para limpar o CPF
const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, "");
};

// Function Expression para construir o CPF.
const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

// 2. Function Expression para formatar o CPF, ela irá retornará o valor após
const formatarCPF = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
};

// Function Expression que recebe como argumento a lista de CPFs capturados com '.querySelectorAll'.
const substituirCPFs = (cpfsElements) => {
  // Aqui é chamada a função para retornar um Array com o texto de cada CPF (String) | Ver 1.
  const cpfs = elementsInnerText(cpfsElements);

  // Aqui é chamada a função para retornar um Array que passará pelo processo de limpeza(serão removidos " ", "." e "-") através da função "limparCPF". E após isso, serão reconstruidos da forma pretendida(formatado assim: xxx.xxx.xxx-xx) através da função "construirCPF".
  const cpfsFormatados = formatarCPF(cpfs);

  // Aqui usaremos um forEach na Nodelist capturada com '.querySelectorAll' para atribuir novos valores a cada item. Cada elemento da lista tera seu texto trocado pelos valores que estão presentes dentro do "cpfsFormatados"(que também é uma array).
  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
};

// Chamada principal do método
substituirCPFs(cpfsLista);
