const express = require("express");
const app = express();
// console.dir(app);

app.use((req, res) => {
    console.log("we got a new request")
    // res.send("hello, we got your request")
    // res.send({ color: 'red' });
    res.send('<h1>This is my webpage!</h1>');
})

app.listen(5000, () => {
    console.log("listening on port 5000!");
})