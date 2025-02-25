const express = require('express');
const http = require('http');

// setup express
const app = express(); 

// setup the server
const server = http.createServer(app);

// register view engines
app.set('view engine', 'ejs');

// setup the middleware
app.use(express.static('public'));

// get pages
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/signup.ejs', (req, res) => {
    res.render('signup');
})
app.get('/login.ejs', (req, res) => {
    res.render('login');
});
app.get('/about.ejs', (req, res) => {
    res.render('about');
});
app.get('/details.ejs', (req, res) => {
    res.render('details');
});
app.get('/add_post.ejs', (req, res) => {
	res.render('add_post');                                     
})
app.get('/contact.ejs', (req, res) => {
    res.render('contact');
});

//listening the server
app.listen(5000, 'localhost', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('Server is running...');
});
