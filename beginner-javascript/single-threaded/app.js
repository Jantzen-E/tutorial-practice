//watch what order the console.logs show up in the console
//this demonstrates how javascript executes one line at a time
//javascript lets the browser help with the execution of the 2nd console.log below using web apis
//web apis can help with requests or setTimeout functions
//the setTimeout function is removed from the javascript callstack and passed to the web apis
//then javascript executes the last console.log
//then the browser reminds javascript to execute the setTimeout function after 3 seconds

console.log('sending request to the server');
setTimeout(() => {
    console.log('here is your data from the server...')
}, 3000)
console.log('i am at the end of the file');