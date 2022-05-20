// Write your solution in this file!

const employee = {
    name: "Lori",
    streetAddress: "123 Main",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {
        ...employee,
        [key]: value,
    }
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {
        ...employee,
    }
    console.log(newEmployee);
    delete newEmployee[key];
    console.log(newEmployee);
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}