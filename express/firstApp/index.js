const express = require("express");
const app = express();
// console.dir(app);

// app.use((req, res) => {
//     console.log("we got a new request")
//     res.send("hello, we got your request")
//     res.send({ color: 'red' });
//     res.send('<h1>This is my webpage!</h1>');
// })

app.get('/', (req, res) => {
    res.send('this is the home page')
})

app.get('/cats', (req, res) => {
    res.send('meow')
})

app.post('/cats', (req, res) => {
    res.send('post request to /cats')
})

app.get('/dogs', (req, res) => {
    res.send('woof')
})

app.listen(5000, () => {
    console.log("listening on port 5000!");
})