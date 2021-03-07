const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2Display')
}

let winningScore = 3;
let isGameOver = false;

const resetScore = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playTo');

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            // the 2 lines below are for plain css
            // p1Display.classList.add('winner');
            // p2Display.classList.add('loser');
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function() {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function() {
    updateScores(p2, p1)
})

resetScore.addEventListener('click', reset)

// function reset() {
//     isGameOver = false;
//     p1.score = 0;
//     p2.score = 0;
//     p1.display.textContent = p1.score;
//     p2.display.textContent = p2.score;
//     p1.display.classList.remove('has-text-success', 'has-text-danger');
//     p2.display.classList.remove('has-text-success', 'has-text-danger');
//     p1.button.disabled = false;
//     p2.button.disabled = false;
// }

// reset function refactored even more below

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}



//code below is before any refactoring


// after refactoring this is not necessary
// const p1Button = document.querySelector('#p1button');
// const p2Button = document.querySelector('#p2button');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
// const resetScore = document.querySelector('#resetButton');
// const winningScoreSelect = document.querySelector('#playTo');

// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 3;
// let isGameOver = false;

// p1Button.addEventListener('click', function() {
//     if (!isGameOver) {
//         p1Score += 1;
//         if (p1Score === winningScore) {
//             isGameOver = true;
            // the 2 lines below are for plain css (not bulma)
            // p1Display.classList.add('winner');
            // p2Display.classList.add('loser');
//             p1Display.classList.add('has-text-success');
//             p2Display.classList.add('has-text-danger');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p1Display.textContent = p1Score;
//     }
// })

// p2Button.addEventListener('click', function() {
//     if (!isGameOver) {
//         p2Score += 1;
//         if (p2Score === winningScore) {
//             isGameOver = true;
            // the 2 lines below are for plain css (not bulma)
            // p1Display.classList.add('loser');
            // p2Display.classList.add('winner');
//             p1Display.classList.add('has-text-danger');
//             p2Display.classList.add('has-text-success');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p2Display.textContent = p2Score;
//     }
// })

// resetScore.addEventListener('click', reset)

// winningScoreSelect.addEventListener('change', function() {
//     winningScore = parseInt(this.value);
//     reset();
// })

// function reset() {
//     isGameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.textContent = p1Score;
//     p2Display.textContent = p2Score;

    // this is for plain css
    // p1Display.classList.remove('winner', 'loser');
    // p2Display.classList.remove('winner', 'loser');
//     p1Display.classList.remove('has-text-success', 'has-text-danger');
//     p2Display.classList.remove('has-text-success', 'has-text-danger');
//     p1Button.disabled = false;
//     p2Button.disabled = false;
// }