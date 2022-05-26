type calcType = 'addition' | 'subtraction' | 'division';


function calculator(n1: number, n2: number, calculate: calcType){
    if (calculate === 'addition'){
return n1 + n2;
    }else if(calculate === 'subtraction'){
return n1 - n2;
    }else{
return n1 / n2;
    }
}

// function add(n1: number, n2: number){
//     return n1 + n2;
// }

// function subtract(n1: number, n2: number){
//     return n1 - n2;
// }

// function divide(n1: number, n2: number){
//     return n1 / n2;
// }

function printResults(results: number){
console.log('Result: ' + results);
}

printResults(calculator(5, 9, 'addition'));