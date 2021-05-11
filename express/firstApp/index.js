const express = require("express");
const app = express();
// console.dir(app);

// app.use((req, res) => {
//     console.log("we got a new request")
//     res.send("hello, we got your request")
//     res.send({ color: 'red' });
//     res.send('<h1>This is my webpage!</h1>');
// })

//test all of these with postman

app.get('/', (req, res) => {
    res.send('this is the home page')
})

//when you write a colon in the path, it is a variable, it is not hard coded
app.get('/r/:subreddit', (req, res) => {
    // console.log(req.params)
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} library</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    // console.log(req.params)
    const { subreddit, postId } = req.params;
    res.send(`<h1>viewing post Id: ${ postId } on the ${subreddit} library</h1>`)
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

//this covers all other paths that don't exist, put this at the end of the app.gets or else it will
//send the res.send string every time
app.get('*', (req, res) => {
    res.send(`I don't know that path`)
})

app.listen(5000, () => {
    console.log("listening on port 5000!");
})