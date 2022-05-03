const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

function procuraId(pessoa) {
  const empregado = data.employees
    .find((employee) => employee
      .id === pessoa || employee.firstName === pessoa || employee.lastName === pessoa);
  return empregado;
}

function pegarSpecies(responsavel) {
  return responsavel.map((ids) => getSpeciesByIds(ids)[0].name);
}

function pegaLocation(responsavel) {
  return responsavel.map((ids) => getSpeciesByIds(ids)[0].location);
}

function semArgumento() {
  return data.employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: pegarSpecies(employee.responsibleFor),
    locations: pegaLocation(employee.responsibleFor),
  }));
}

function retornaObjeto(obj) {
  const primeiroObj = Object.values(obj)[0];
  const primeiroNome = procuraId(primeiroObj);
  const {
    firstName,
    lastName,
    id,
    responsibleFor,
  } = primeiroNome;

  const novoArray = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: pegarSpecies(responsibleFor),
    locations: pegaLocation(responsibleFor),
  };
  return novoArray;
}
// console.log(retornaObjeto());

function getEmployeesCoverage(obj) {
  if (!obj) return semArgumento();
  const primeiroObj = Object.values(obj)[0];
  if (data.employees.some((employee) => employee.id === primeiroObj
  || employee.firstName === primeiroObj || employee.lastName === primeiroObj)) {
    return retornaObjeto(obj);
  }
  throw new Error('Informações inválidas');
}
console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
