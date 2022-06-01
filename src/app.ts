class Department{
    // private readonly id: number;
    // name: string;
    private employees: string[] = [];
    constructor (private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }
    //this declared as the class Department stops undefined references towards this class.
describe (this: Department){
    console.log(`department (${this.name})`)
}
addEmployee(employee:string){
this.employees.push(employee);
}
printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
}
}

class ITDepartment extends Department{
constructor(id: string, public admins: string[]){
    super(id,'IT');
}
}

class AccountingDepartment extends Department{
    constructor(id: string, private reports: string[]){
        super(id,'Accounting');
    }

    addReports(text: string){
        this.reports.push(text)
    }

    printReports(){
    console.log(this.reports);
    }
    }


class Calculator{
    results: number;
    constructor (n1: number, n2: number){
        this.results = n1 + n2;
    }
}

const IT = new ITDepartment('d1', ['Max']);
const accounting = new AccountingDepartment('d2', []);
const results = new Calculator(2, 5);
console.log(results);
//Define main way to use functions, unification for simplification and readability
accounting.addReports("Something went wrong...");
accounting.addEmployee('Steve');
accounting.addEmployee('Jade')
IT.addEmployee('Max');
IT.addEmployee('John');
IT.name = "IT Department";
//accounting.employees[2] = 'Anna';
IT.describe();
IT.printEmployeeInformation();
accounting.printReports();

console.log(IT);
console.log(accounting);

//this. refers to the object calling the typescript. As example the below although correct returns undefined.
//name variable below catches the undefined error of the Department Class.
// const accountingCopy = {name: 'DUMMY', describe: accounting.describe};
// accountingCopy.describe();