async function puxarDados() {
  const respondeDados = fetch("./dados.json");
  const respondeClientes = fetch("./clientes.json");

  const jsonDados = await (await respondeDados).json();
  const jsonClientes = await (await respondeClientes).json();

  console.log(jsonDados);
  console.log(jsonClientes);
}

puxarDados();
