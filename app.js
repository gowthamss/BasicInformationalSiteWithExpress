const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Home page</h1>');
})

app.get('/index', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Index page</h1>');
})

app.get('/about', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>About page</h1>');
})

app.get('/contact', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Contact page</h1>');
})

app.listen(port, () => {
    console.log(`The server is running on ${port}`);
})