//to run this code, the call stack starts at the isRightTriangle function to solve for a
//then it wants to solve for square of 3 so it adds the square function to the stack
//then it calls multiply function and the number is given so that multiply is taken off the call stack
//then square function is solved for a and is taken off the call stack, 
//then the last function is solved for a

//everything repeats in the same pattern to solve for b and c by adding and removing functions from 
//the call stack

const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
);

console.log(isRightTriangle(3, 4, 5));