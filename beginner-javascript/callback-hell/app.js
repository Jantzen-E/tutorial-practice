// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow'
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green'
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue'
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'indigo'
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = 'violet'
//                             setTimeout(() => {
//                                 document.body.style.backgroundColor = 'black'
//                                 setTimeout(() => {
//                                     document.body.style.backgroundColor = 'red'
//                                 }, 1000)
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


//callback hell is when the code starts getting nested many times and the code gets messy
//to help with this, you can use promises and async functions but below, I have shown nested callbacks

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {
//                             delayedColorChange('black', 1000, () => {
//                                 delayedColorChange('red', 1000, () => {
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });


//here is the solution using promises
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 500))
    .then(() => delayedColorChange('yellow', 500))
    .then(() => delayedColorChange('green', 500))
    .then(() => delayedColorChange('blue', 500))
    .then(() => delayedColorChange('indigo', 500))
    .then(() => delayedColorChange('violet', 500))


//this code runs the same as above but it uses await so that the function resolves first
//then it runs the next line of code, you don't have to use .then using async await
async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return 'all done!'
}

// rainbow().then(() => console.log('end of rainbow'))

async function printRainbow() {
    await rainbow();
    console.log('end of rainbow in printRainbow function')
}

printRainbow();