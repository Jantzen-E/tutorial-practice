const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
// const mongoDbUrl = process.env.ATLAS_CONNECTION;
// const dotenv = require('dotenv');
// dotenv.config();

//connect to the database
mongoose.connect('mongodb://localhost:27017/login-db', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open")
    })
    .catch(err => {
        console.log("oh no mongo connection error")
        console.log(err)
    })

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'notagoodsecret' }))

app.get('/', (req, res) => {
    res.send('this is the home page')
})

app.get('/register', (req, res) => {
    res.render('register')
})

//store passwords that are hashed and registering users
app.post('/register', async (req, res) => {
    // res.send(req.body)
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
    // res.send(hash);
});

//log an existing user in
app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', async (req, res) => {
    // res.send(req.body)
    const {username, password} = req.body;
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        req.session.user_id = user._id;
        res.redirect('/secret');
    }
    else {
        res.redirect('/login')
    }
})

app.get('/secret', (req, res) => {
    if (!req.session.user_id) {
        res.redirect('/login')
    }
    res.send('This is secret! you cannot see me unless you are logged in')
})

app.listen(3000, () => {
    console.log("serving your app!")
})