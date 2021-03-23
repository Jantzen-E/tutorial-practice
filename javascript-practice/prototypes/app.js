//a prototype is a way to tell other strings, arrays, or other data types to have common properties that
//the same data types look up to for reference, it is a way to store properties, it is a template
//prototype is the actual object and __proto__ is a reference to that object

//in the console type "i love you".yell() and it demonstrates how prototypes work
String.prototype.yell = function() {
    return `wow!!!! ${this.toUpperCase()}!!!!!`;
};

//in the console, type [3,4,5].pop() to see what happens.  This prototype can overwrite the .pop() function
Array.prototype.pop = function() {
    return 'sorry i want that element and I wont pop it off'
}