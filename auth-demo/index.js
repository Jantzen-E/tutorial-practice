const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

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

app.get('/', (req, res) => {
    res.send('this is the home page')
})

app.get('/register', (req, res) => {
    res.render('register')
})


//make a user and hash their password then log them in with the help of the session
app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12)
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
})
app.get('/login', (req, res) => {
    res.render('login')
})
//log an existing user in by comparing their password to the hashed password in the db
app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, user.password)
    if (validPassword) {
        req.session.user_id = user._id;
        res.redirect('/secret');
    }
    else (
        res.redirect('/login')
    )
})

app.post('/logout', (req, res) => {
    // req.session.user_id = null;
    req.session.destroy();
    res.redirect('/login');
})

app.get('/secret', (req, res) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    res.render('secret')
})

app.listen(3000, () => {
    console.log("serving your app!")
})

























// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const session = require('express-session');

// mongoose.connect('mongodb://localhost:27017/login-db', { useUnifiedTopology: true, useNewUrlParser: true })
//     .then(() => {
//         console.log("mongo connection open")
//     })
//     .catch(err => {
//         console.log("oh no mongo connection error")
//         console.log(err)
//     })

// app.set('view engine', 'ejs');
// app.set('views', 'views');
// app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret: 'notagoodsecret' }));

// const requireLogin = (req, res, next) => {
//     if (!req.session.user_id) {
//         return res.redirect('/login');
//     }
//     next();
// }

// app.get('/', (req, res) => {
//     res.send('this is the home page')
// })

// app.get('/register', (req, res) => {
//     res.render('register')
// })

// app.post('/register', async (req, res) => {
//     res.send(req.body)
//     const { password, username } = req.body;
//     const hash = await bcrypt.hash(password, 12);
//     const user = new User({ 
//         username, 
//         password: hash 
//     })
//     await user.save();
//     req.session.user_id = user._id;
//     res.redirect('/')
//     res.send(hash);
// });


// app.get('/login', (req, res) => {
//     res.render('login')
// })

// app.post('/login', async (req, res) => {
//     res.send(req.body)
//     const {username, password} = req.body;
//     const foundUser = await User.authenticate(username, password);
//     const user = await User.findOne({ username });
//     const validPassword = await bcrypt.compare(req.body.password, user.password);
//     if (validPassword) {
//         req.session.user_id = user._id;
//         res.redirect('/secret');
//     }
//     else {
//         res.redirect('/login')
//         res.send('Please try to log in again')
//         .catch(error => {throw error})
//     }
// })

// app.post('/logout', (req, res) => {
//     req.session.user_id = null;
//     req.session.destroy();
//     res.redirect('/login');
// })

// app.get('/secret', requireLogin, (req, res) => {
//     if (!req.session.user_id) {
//         return res.redirect('/login')
//     }
//     res.render('secret')
// })

// app.get('/topsecret', requireLogin, (req, res) => {
//     res.send('top secret')
// })

// app.listen(3000, () => {
//     console.log("serving your app!")
// })