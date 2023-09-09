const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50)
      .length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const adult = countEntrants(entrants).adult * data.prices.adult;
  const senior = countEntrants(entrants).senior * data.prices.senior;
  const child = countEntrants(entrants).child * data.prices.child;
  return adult + senior + child;
}

calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]);

module.exports = {
  calculateEntry,
  countEntrants,
};
