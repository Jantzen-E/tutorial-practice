const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const session = require('express-session');

//connect to database
mongoose.connect('mongodb://localhost:27017/authDemo', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open")
    })
    .catch(err => {
        console.log("oh no!! mongo connection error")
        console.log(err)
    })

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'notagoodsecret' }));

//middleware
const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}

app.get('/', (req, res) => {
    res.send('this is the home page')
})

//render the register.ejs page
app.get('/register', (req, res) => {
    res.render('register')
})

//make a user and hash their password then log them in with the session id
app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const user = new User({ username, password })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
})

//render the login.ejs page
app.get('/login', (req, res) => {
    res.render('login')
})

//log an existing user in by comparing their password to the hashed password in the db
app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const foundUser = await User.findAndValidate(username, password);
        if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    }
    else (
        res.redirect('/login')
    )
})

//redirect to login screen after logout
app.post('/logout', (req, res) => {
    req.session.user_id = null;
    // req.session.destroy();
    res.redirect('/login');
})

//this page can only be seen when the user is logged in
app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})

//this page can only be seen when the user is logged in
app.get('/topsecret', requireLogin, (req, res) => {
    res.send('top secret')
})

app.listen(3000, () => {
    console.log("serving your app!")
})