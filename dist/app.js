"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class Calculator {
    constructor(n1, n2) {
        this.results = n1 + n2;
    }
}
const accounting = new Department('Accounting');
const results = new Calculator(2, 5);
console.log(results);
accounting.addEmployee('Max');
accounting.addEmployee('John');
accounting.employees[2] = 'Anna';
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map