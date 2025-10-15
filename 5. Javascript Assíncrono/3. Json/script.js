fetch("./dados.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((materia) => {
      console.log(materia.id);
      console.log(materia.aula);
      console.log(materia.tempo);
    });
  });
