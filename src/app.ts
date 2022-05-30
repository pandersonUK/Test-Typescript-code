// const button = document.querySelector('button')!;
// const add = (a: number, b: number = 21) => a + b;
// const printOutput: (a: number | string) => void = output => console.log(output);

// button.addEventListener('click', () => {
//     console.log('Clicked!');
// }
// )

// printOutput(add(5));


const person = {
    name: 'max',
    age: 30
}

const copiedPerson = { ...person};

const add = (...numbers: number[]) => { return numbers.reduce((curResult, curValue) => { return curResult + curValue; },0);}

const addedNumbers = add (5,10,2,3.7);
console.log(addedNumbers);