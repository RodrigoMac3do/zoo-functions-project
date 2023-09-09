const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.filter(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  )[0];
}

console.log(getEmployeeByName());
module.exports = getEmployeeByName;
