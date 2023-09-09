const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const primeiraEspecie = data.employees.find((employee) => employee.id === id)
    .responsibleFor[0];
  const animais = data.species.find(
    (animal) => animal.id === primeiraEspecie,
  ).residents;
  const maiorIdade = Math.max(...animais.map((idade) => idade.age));
  return Object.values(animais.find((animal) => animal.age === maiorIdade));
}
getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83');

module.exports = getOldestFromFirstSpecies;
