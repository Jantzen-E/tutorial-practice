//in git bash type node greeter.js colt rusty and see what it returns
//the slice function skips the 2 paths that process.argv usually returns so that you can see the 
//custom information that was passed in from the command in git bash

const args = process.argv.slice(2)
for (let arg of args) {
    console.log(`Hi there, ${arg}`)
}