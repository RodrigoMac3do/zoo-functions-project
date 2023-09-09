const data = require('../data/zoo_data');

const semParametro = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: [
      'lions',
      'tigers',
      'bears',
      'penguins',
      'elephants',
      'giraffes',
    ],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: [
      'tigers',
      'otters',
      'frogs',
      'snakes',
      'elephants',
      'giraffes',
    ],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions',
      'tigers',
      'bears',
      'penguins',
      'otters',
      'frogs',
      'snakes',
      'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};
const dias = Object.keys(data.hours);
const animais = data.species.map((specie) => specie.name);
const diasDisponiveis = (animal) =>
  data.species.filter((specie) => specie.name === animal)[0].availability;

function getSchedule(scheduleTarget) {
  if (dias.includes(scheduleTarget)) {
    return { [scheduleTarget]: semParametro[scheduleTarget] };
  }
  if (animais.includes(scheduleTarget)) return diasDisponiveis(scheduleTarget);
  return semParametro;
}

module.exports = getSchedule;

// if (!scheduleTarget || !dias
//   .includes(scheduleTarget) || !animais
//   .includes(scheduleTarget))
