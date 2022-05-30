"use strict";
function calculator(n1, n2, calculate) {
    if (calculate === 'addition') {
        return n1 + n2;
    }
    else if (calculate === 'subtraction') {
        return n1 - n2;
    }
    else {
        return n1 / n2;
    }
}
//Below code changed to above
// function add(n1: number, n2: number){
//     return n1 + n2;
// }
// function subtract(n1: number, n2: number){
//     return n1 - n2;
// }
// function divide(n1: number, n2: number){
//     return n1 / n2;
// }
//Below code changed to below
// function printResults(results: number){
// console.log('Result: ' + results);
// }
// printResults(calculator(5, 9, 'addition'));
//Declare variable numberhandler as function type, expecting 3 inputs and a number based output/return '=>'
let numberHandler;
numberHandler = calculator;
console.log(numberHandler(5, 9, 'addition'));
//cb Function
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//Generating Error Codes
function generateError(message, code) {
    throw { message: message, errorcode: code };
}
generateError('An error occured', 500);
