"use strict";
const hobbies = ["Running", "Cooking", "Fishing", "Dancing", "Leaping"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
console.log(...hobbies);
console.log(hobbies);
const person = {
    name: 'Max',
    age: 30
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
const add = (...numbers) => { return numbers.reduce((curResult, curValue) => { return curResult + curValue; }, 0); };
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, remainingHobbies, hobbies);
//# sourceMappingURL=app.js.map