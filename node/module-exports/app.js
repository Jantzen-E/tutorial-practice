//this requires the entire file math.js
const math = require('./math');

//this requires certain functions from math.js
// const { PI, square } = require('./math');


console.log(math);
console.log(math.PI);

console.log(math.square(9));

//this requires an entire directory using the export in index.js
const cats = require('./shelter')
console.log('required an entire directory', cats);