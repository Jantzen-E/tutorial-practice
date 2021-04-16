const figlet = require("figlet");
const colors = require("colors");

figlet('Hello World!', function (err, data) {
    if (err) {
        console.log('something went wrong');
        console.dir(err);
        return;
    }
    console.log(data.green)
});

//type "npm install" to install all of the dependecies from another project that is in package.json
//without having to type "npm install (each individual dependency)"
//it installs all of the dependencies for you without you having to specify