let employee = {
    empolyeeID: '',
    empolyeeName: '',
    designation: ''
};

let consultant = {
    salary: 4000, __proto__: employee, extraHours: 4
};
let manager = {
    salary:6000, __proto__:employee, extraHours: 6   
};
let seniorManager = {
    salary: 8000, __proto__:employee, extraHours: 5
};


function getSalary(employee) {
    let totalSalary = employee.salary + (employee.extraHours * 50);
    console.log(totalSalary);
}

getSalary(consultant);