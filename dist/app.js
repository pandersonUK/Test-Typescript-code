"use strict";
const person = {
    name: 'max',
    age: 30
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => { return numbers.reduce((curResult, curValue) => { return curResult + curValue; }, 0); };
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
//# sourceMappingURL=app.js.map