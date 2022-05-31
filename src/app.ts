class Department{
    name: string;
    employees: string[] = [];
    constructor (n: string) {
        this.name = n;
    }
    //this declared as the class Department stops undefined references towards this class.
describe (this: Department){
    console.log("Department: " + this.name)
}
addEmployee(employee:string){
this.employees.push(employee);
}
printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
}
}
class Calculator{
    results: number;
    constructor (n1: number, n2: number){
        this.results = n1 + n2;
    }
}

const accounting = new Department('Accounting');
const results = new Calculator(2, 5);
console.log(results);
//Define main way to use functions, unification for simplification and readability
accounting.addEmployee('Max');
accounting.addEmployee('John');
accounting.employees[2] = 'Anna';
accounting.describe();
accounting.printEmployeeInformation();

//this. refers to the object calling the typescript. As example the below although correct returns undefined.
//name variable below catches the undefined error of the Department Class.
// const accountingCopy = {name: 'DUMMY', describe: accounting.describe};
// accountingCopy.describe();