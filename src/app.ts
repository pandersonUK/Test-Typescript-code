// const button = document.querySelector('button')!;
// const add = (a: number, b: number = 21) => a + b;
// const printOutput: (a: number | string) => void = output => console.log(output);

// button.addEventListener('click', () => {
//     console.log('Clicked!');
// }
// )

// printOutput(add(5));
const hobbies = ["Running", "Cooking", "Fishing", "Dancing", "Leaping"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);
console.log(...hobbies);
console.log(hobbies);

const person = {
    firstName: 'Maxi',
    lastName: 'Pad',
    age: 69
}

const copiedPerson = { ...person};
console.log(copiedPerson);

const add = (...numbers: number[]) => { return numbers.reduce((curResult, curValue) => { return curResult + curValue; },0);}

const addedNumbers = add (5,10,2,3.7);
console.log(addedNumbers);

//Restructure Hobbies array into Hobby1, Hobby2 and remainingHobbies
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, remainingHobbies, hobbies);
//Javascript aliasing code, swapping firstName to userName
const { firstName: userName, lastName, age} = person;