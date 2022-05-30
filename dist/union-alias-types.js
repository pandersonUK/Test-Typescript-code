"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-num') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number'){
    //     return +result;
    // }else{
    //     return result.toString();
    // }
    return result;
}
const combineAges = combine(30, 52, 'as-num');
console.log(combineAges);
const combineStringAges = combine('30', '52', 'as-num');
console.log(combineStringAges);
const combineNames = combine("Sarah ", "Wallace", 'as-text');
console.log(combineNames);
