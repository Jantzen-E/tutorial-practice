const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

//this is one way to export
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;



//this creates an object showing each function then exports the object
const math = {
    add: add,
    PI: PI,
    square: square
}

module.exports = math;