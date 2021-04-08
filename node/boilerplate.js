//this is the asynchronous version

const fs = require('fs');
// console.log(fs)

fs.mkdir('Dogs', { recursive: true }, (err) => {
    console.log("in the callback")
    if (err) throw err;
});
console.log("I come afer mkdir in the file");