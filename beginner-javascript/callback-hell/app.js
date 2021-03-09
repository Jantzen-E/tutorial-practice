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

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                    delayedColorChange('indigo', 1000, () => {
                        delayedColorChange('violet', 1000, () => {
                            delayedColorChange('black', 1000, () => {
                                delayedColorChange('red', 1000, () => {
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});