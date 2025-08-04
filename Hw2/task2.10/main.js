let firstNum = +prompt('Enter first number:')
let secondNum = +prompt('Enter second number:')

if (firstNum > secondNum) {
    console.log(firstNum);
} else if (firstNum === secondNum) {
    console.log('Numbers are equal');
} else {
    console.log(secondNum);
}