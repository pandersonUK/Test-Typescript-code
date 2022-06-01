"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`department (${this.name})`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
class Calculator {
    constructor(n1, n2) {
        this.results = n1 + n2;
    }
}
const IT = new ITDepartment('d1', ['Max']);
const accounting = new AccountingDepartment('d2', []);
const results = new Calculator(2, 5);
console.log(results);
accounting.addReports("Something went wrong...");
accounting.addEmployee('Steve');
accounting.addEmployee('Jade');
IT.addEmployee('Max');
IT.addEmployee('John');
IT.name = "IT Department";
IT.describe();
IT.printEmployeeInformation();
accounting.printReports();
console.log(IT);
console.log(accounting);
//# sourceMappingURL=app.js.map