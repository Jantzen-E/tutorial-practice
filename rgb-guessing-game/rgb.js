// let colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)", 
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]

let numSquares = 12;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
// let pickedColor = colors[3];
let pickedColor = pickColor();
let titleColor = document.querySelector("#titleColor");
let correctOrNot = document.getElementById("correctOrNot");
let headerColor = document.querySelector(".header");
let resetGame = document.getElementById("resetGame");
let easyButton = document.querySelector("#easyButton");
let hardButton = document.querySelector("#hardButton");
// let reallyHard = document.getElementById("reallyHard");

for (let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i]
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //get the color of the clicked square
        let clickedColor = this.style.backgroundColor
        //compare color to picked color
        if (clickedColor === pickedColor) {
            headerColor.style.backgroundColor = clickedColor;
            correctOrNot.textContent = "You are correct!";
            changeColors(clickedColor);
            resetGame.textContent = "Play Again?"
        }
        else {
            this.style.backgroundColor = "#232323";
            correctOrNot.textContent = "Nope, try again";
            resetGame.textContent = "New Colors"
        }
    });
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    //make array
    let arr = []
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
        //get random color and push into array
    }
    //return the array at the end
    return arr;
}

function randomColor() {
    //pick a red from 0-255, then green from 0-255, then blue from 0-255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// if (r && g || r && b || g && b >= 200) {
//     headerColor.classList.add("darkText");
// }
easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    titleColor.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
            if (colors[i]) {
                squares[i].style.backgroundColor = colors[i];
            }
            else {
                squares[i].style.display = "none"
            }
    }
    headerColor.style.backgroundColor = "steelblue";
});

hardButton.addEventListener("click", function() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    titleColor.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {        
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
    headerColor.style.backgroundColor = "steelblue";
});

// reallyHard.addEventListener("click", function() {
//     reallyHard.classList.add("selected");
//     easyButton.classList.remove("selected");
//     hardButton.classList.remove("selected");
//     numSquares = 12;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     titleColor.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {        
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//     }
//     headerColor.style.backgroundColor = "steelblue";
// });

resetGame.addEventListener("click", function() {
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change the displayed color to match newly picked color
    titleColor.textContent = pickedColor;
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i]
    }
    headerColor.style.backgroundColor = "steelblue";
    resetGame.textContent = "Click here for new colors";
    correctOrNot.textContent = "Guess which color matches";
});


titleColor.textContent = pickedColor;