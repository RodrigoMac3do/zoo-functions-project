const data = require('../data/zoo_data');

function isManager(id) {
  let gerente = false;
  data.employees.forEach((employee) => {
    if (employee.managers.includes(id)) gerente = true;
  });
  return gerente;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.reduce((acc, employee) => {
      if (employee.managers.includes(managerId)) {
        acc.push(`${employee.firstName} ${employee.lastName}`);
      }
      return acc;
    }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d9600a8'));

module.exports = {
  isManager,
  getRelatedEmployees,
};
