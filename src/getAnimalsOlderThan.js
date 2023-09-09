const data = require('../data/zoo_data');

// const { species: animais } = data;
// const moradores = animais.map((item) => item.residents).map(()=>);

function getAnimalsOlderThan(animal, age) {
  return data.species
    .filter((specie) => animal === specie.name)[0]
    .residents.every((morador) => morador.age >= age);
}

console.log(getAnimalsOlderThan('bears', 1));
module.exports = getAnimalsOlderThan;
