function add(n1, n2, showResult, phrase) {
    /* if (typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error('Incorrect input!');
    } javascript code not really needed as typescript does the job. */
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
/* Code example 'variable number type declaration.'
 let number3: number;
number3 = 10; */
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
