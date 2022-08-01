function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // Javascript way of handling wrong input(which can be done better in typescript)
    // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    let result = n1 + n2;
    if(showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);