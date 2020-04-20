//*******************practice template strings*******************************
// let firstName = prompt('What is your first name?');
// let lastName = prompt('what is your last name?');
// let age = prompt('what is your age?');
// let fullName = alert(`I am guessing that your full name is ${firstName}${lastName} and that you are ${age} years old`);
// alert(fullName);


//****************practice simple JavaScript variables, assignments, and template strings****************
//daysAlive accounts for leap year
// let question = prompt('how old are you?');
// let daysAlive = question * 365.25;
// let hoursAlive = daysAlive * 24;
// let minutesAlive = hoursAlive * 60;
// let secondsAlive = minutesAlive * 60;

// alert(`you have been alive for ${daysAlive} days, which is ${hoursAlive} hours, 
// or ${minutesAlive} minutes, or ${secondsAlive} seconds `);


//********************practice conditionals******************* */
// let age = Number(prompt('how old are you?'));

// if (age < 0) {
//     alert('dont even think about it')
// }
// else if (age < 18) {
//     alert('you cannot enter this venue')
// }
// else if (age >= 18 && age <= 20) {
//     alert('you can enter but you cannot drink')
// }
// else if (age === 21) {
//     alert('happy 21st birthday')
// }
// else if (age > 100) {
//     alert('you might not want to drink')
// }
// else {
//     alert('you can enter and drink')
// }


//****************simple guessing game************************** */
// let secretNumber = 4;

// let guess = prompt('guess a number between 1 and 10');

// if (Number(guess) === secretNumber) {
//     alert('you got it right')
// }
// else if (Number(guess) > secretNumber) {
//     alert('your guess is too high')
// }
// else {
//     alert('your guess is too low')
// }


//********************while loops with numbers****************************** */
// let count = 1;
// while(count < 6) {
//     console.log("count is: " + count);
//     count++;
// }



// let num = -10;
// while (num <= 19) {
//     console.log(num);
//     num++
// }



// let evenNum = 40;
// while (evenNum >= 10) {
//     if (evenNum % 2 === 0) {
//     console.log(evenNum)
//     }
//     evenNum--;
// }



// let oddNum = 301;
// while (oddNum <= 333) {
//     if (oddNum % 2 === 1) {
//         console.log(oddNum)
//     }
//     oddNum++;
// }



// let num = 5;
// while (num <= 50) {
//     if (num % 5 === 0 && num % 3 === 0) {
//         console.log(num)
//     }
//     num++;
// }


//*********************while loops with strings******************** */
// let string = "hello";
// let count = 0;

// while (count < string.length) {
//     console.log(string[count]);
//     count++;
// }


//***********************for loops with strings****************************** */
// let string = 'hello';
// for (let i = 0; i < string.length; i++) {
//     console.log(string[i]);
// }



// let string = "ahceclwlxo";
// for (let i = 1; i < string.length; i+=2) {
//     console.log(string[i]);
// }


//**********************************for loops with numbers**************************** */
// for (i = -10; i <= 19; i++) {
//     console.log(i);
// }



// for (i = 10; i <= 40; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }



// for (i = 301; i <= 333; i++) {
//     if (i % 2 === 1) {
//         console.log(i)
//     }
// }



// for (i = 5; i < 51; i++) {
//     if (i % 15 === 0) {
//         console.log(i);
//     }
// }



//**********************functions************************** */
// function doSomething() {
//     console.log('hello world');
// }

// doSomething();



// function sing() {
//     console.log('twinkle twinkle little star') 
//     console.log('how i wonder what you are')
//     console.log('up above the world so high')
//     console.log('like a diamond in the sky') 
// }

// sing();



//**********************functions with arguments*********************** */
// function square(num) {
//     console.log(num * num);
// }

// square(10);
// square(3);
// square(5);
// square(6);



// function sayName(name) {
//     console.log('hello ' + name + ' i hope you are doing well')
// }

// sayName('Jeff');
// sayName('Mark');
// sayName('Susan');
// sayName('Gaby');
// sayName('Jodi');


//****************************functions with multiple arguments******************************** */
// function area(length, width) {
//     console.log(length * width);
// }

// area(5,4)
// area(4,4)
// area(3,4)
// area(2,4)
// area(1,4)
// area(0,4)



// function greet(person1, person2, person3) {
//     console.log('hello ' + person1)
//     console.log('hello ' + person2)
//     console.log('hello ' + person3)
// }

// greet('peter', 'james', 'john');



// function capitalize(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// var city = "paris";
// console.log(capitalize(city));


//****************this is the turnary version***********************/
// function isEven(num) {
//     num % 2 === 0 ? console.log('true') : console.log('false')
// }

// isEven(4)
// isEven(21)
// isEven(68)
// isEven(333)

//****************this is the if statment version******************* */
// function isEven(num) {
//     if (num % 2 === 0) {
//         console.log('true');
//     }
//     else {
//         console.log('false');
//     }
// }

// isEven(4)
// isEven(21)
// isEven(68)
// isEven(333)



//***************************loops practice**************************** */
// function factorial(num) {
//     let result = 1;
//     for (i = result * 2; i <= num; i++) {
//         result = result * i;
//     }
//     console.log(result);
// }

// factorial(5);
// factorial(2);
// factorial(10);
// factorial(0);

//***************count down instead of up**************************** */
// function factorial(num) {
//     if (num === 0) {
//         console.log(1);
//     }
//     let result = num;
//     for (i = num-1; i >= 1; i--) {
//         result = result * i;
//     }
//     console.log(result);
// }

// factorial(5);
// factorial(2);
// factorial(10);
// factorial(0);


//*****************how to call a function every 4000 miliseconds************* */
// setInterval(function(){
//     console.log('i am an anonymous function');
//     console.log('this is awesome');
// }, 4000);

//**********************how to call a defined function every 4000 miliseconds************ */
// function sayHi() {
//     console.log('howdy');
//     console.log('hello');
//     console.log('good day');
// }

// setInterval(sayHi, 4000);


//*****************replacing characters in strings globally******************** */
// function kebabToSnake(string) {
//     console.log(string.replace(/-/g, "_"))
// }

// kebabToSnake("hello-world");
// kebabToSnake("dogs-are-awesome");
// kebabToSnake("blah");



//********************array function .push adds something to the end of the array******************* */
// let colors = ['red', 'orange', 'yellow'];
// colors.push('green');
// console.log(colors);

//*************************.pop pops the last item off the array**************************** */
// let colors = ['red', 'orange', 'yellow'];
// colors.pop();
// console.log(colors);


//****************unshift adds to the front of the array****************************8 */
// let colors = ['red', 'orange', 'yellow'];
// colors.unshift('purple');
// console.log(colors)


//*********************shift removes the first item from an array****************************** */
// let colors = ['red', 'orange', 'yellow'];
// colors.shift();
// console.log(colors);


//***********************************************using indexOf()************************************************* */
// let colors = ['red', 'orange', 'yellow'];
// console.log(colors.indexOf('yellow'));


//***************using slice() to take sections out of an array to reuse************* */
// let fruits = ['banana', 'orange', 'lemon', 'apple', 'mango']
// let citrus = fruits.slice(1,3);
// console.log(citrus);
//this tells the code to include the item in index 1 and stop at but not include index 3


//****************using slice() to clone an array******************** */
// let nums = [1, 2, 3, 4, 5];
// let otherNums = nums.slice();
// console.log(otherNums);



//**************************array iteration using for loop*************************** */
// let colors = ['red', 'orange', 'yellow', 'green'];

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }



//**************************array iteration using forEach()****************************** */

//color as the function argument is a placeholder so you can call it what you want
// let colors = ['red', 'orange', 'yellow', 'green'];
// colors.forEach(function(color) {
//     console.log(color);
// });



//changed placeholder and it still works
// let colors = ['red', 'orange', 'yellow', 'green'];
// colors.forEach(function(individualColor) {
//     console.log(individualColor);
// });


//****************reverse the order of the array using a for loop******************** */
// function printReverse(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }
// printReverse([3,6,7,3,2,1]);



//****************check if every item in the array is exactly the same*********************** */
// function isUniform(arr) {
//     let first = arr[0];
//     for (let i = 1; i < arr.length - 1; i++) {
//         if (arr[i] !== first) {
//             console.log('false');
//         }
//     }
//     console.log('true');
// }

// isUniform([1, 1, 1, 1, 1]);
// isUniform([2, 1, 1, 1]);
// isUniform(['a', 'b', 'p']);
// isUniform(['b', 'b', 'b']);



//********************an array that adds each element in the array***************************** */
// function sumArray(arr) {
//     let total = 0;
//     arr.forEach(function(element) {
//         total = total + element;
//     });
//     console.log(total);
// }

// sumArray([1,2,3]);
// sumArray([10,3,10,4]);
// sumArray([-5,100]);


//***************************find which number in the array is the largest********************************* */
// function max(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log(max);
// } 

// max([1,2,3]);
// max([10,3,10,4]);
// max([-5,100]);



//****************************accessing objects within an array********************************** */
// let movies = [
//     {
//         title: "In Bruges",
//         stars: 5,
//         seen: true
//     },
//     {
//         title: "Frozen",
//         stars: 4.5,
//         seen: false
//     },
//     {
//         title: "Mad Max Fury Road",
//         stars: 5,
//         seen: true
//     },
//     {
//         title: "Les Miserables",
//         stars: 3.5,
//         seen: false
//     }
// ]

// movies.forEach(function(movie) {
//     let result = "You have ";
//     if (movie.seen) {
//         result += "watched ";
//     }
//     else {
//         result += "not seen "
//     }
//     result += movie.title + " - ";
//     result += movie.stars + " stars";
//     console.log(result)
// });




//**********************javascript practice with selectors********************* */
// document.getElementById("first");
// document.querySelector("#first");
// document.getElementsByClassName("special")[0];
// document.querySelector(".special");
// document.getElementsByTagName("p")[0];
// document.querySelector("p");
// document.querySelectorAll("p")[0];



//***************practicing event listeners and selectors********************** */
// let button = document.getElementById("clickMeButton");
// let body = document.getElementsByTagName("body")[0];
// let isPurple = false;

// button.addEventListener("click", function() {
//     if (isPurple) {
//         body.style.background = "white"
//         isPurple = false
//     }
//     else {
//         body.style.background = "purple"
//         isPurple = true
//     }
// });


//***************here is another way to do what the code above does******************* */
// button.addEventListener("click", function() {
//         body.classList.toggle("whiteAgain")
// });



//*******************score keeper exercise***************** */
// let p1Button = document.getElementById("p1");
// let p1Display = document.getElementById("p1Display");
// let p2Button = document.getElementById("p2");
// let p2Display = document.getElementById("p2Display");
// let p1Score = 0;
// let p2Score = 0;
// let h1 = document.querySelector("h1");
// let gameOver = false;
// let winningScore = 5;
// let resetButton = document.getElementById("reset");
// let increment = document.getElementById("increment");
// let playingTo = document.getElementById("playingTo");

// p1Button.addEventListener("click", function() {
//     if (!gameOver) {
//         p1Score += 1
//         if (p1Score === winningScore) {
//             p1Display.classList.toggle("winner")
//             gameOver = true;
//         }
//         p1Display.textContent = p1Score
//     }
// });

// p2Button.addEventListener("click", function() {
//     if (!gameOver) {
//         p2Score += 1
//         if (p2Score === winningScore) {
//             p2Display.classList.toggle("winner")
//             gameOver = true;
//         }
//         p2Display.textContent = p2Score
//     }
// });

// function reset() {
//     p1Score = 0;
//     p2Score = 0;
//     p2Display.textContent = 0;
//     p1Display.textContent = 0;
//     p1Display.classList.remove("winner");
//     p2Display.classList.remove("winner");
//     gameOver = false
// }

// increment.addEventListener("change", function() {
//     playingTo.textContent = increment.value;
//     winningScore = Number(increment.value);
//     reset();
// });

// resetButton.addEventListener("click", function() {
//     reset();
// });
