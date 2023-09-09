const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  const dadosAnimal = data.species.find(
    (specie) => specie.name === Object.values(animal)[0],
  );
  if (Object.keys(animal)[1]) {
    return dadosAnimal.residents.filter(
      (dadoSex) => dadoSex.sex === Object.values(animal)[1],
    ).length;
  }
  return dadosAnimal.residents.length;
}

module.exports = countAnimals;
