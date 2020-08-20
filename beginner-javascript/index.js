//write a js program to check 2 numbers and return true if one of the numbers
//is 100 or if the sum of the 2 numbers is 100

const isOneHundred = (num1, num2) => num1 === 100 || num2 === 100 || num1 + num2 === 100

console.log(isOneHundred(50, 50));
console.log(isOneHundred(100, 50));
console.log(isOneHundred(0, 100));
console.log(isOneHundred(40, 60));
console.log(isOneHundred(20, 10));



//write a js program to retrieve the extension of a file name

const getExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getExtension('index.html'));
console.log(getExtension('webpack.config.js'));



//write a js program to replace every character in a given string with the character
//following it in the alphabet

const changeString = (str) => str.split('').map(character => String.fromCharCode(character.charCodeAt(0) + 1)).join('');

console.log(changeString('hello world'));
console.log(changeString('abcd'));