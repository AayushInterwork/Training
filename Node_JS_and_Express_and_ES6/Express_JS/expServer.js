var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var app1 = express();

// This extracts the body element from the index.html file (body-parser)
app.use(bodyParser.urlencoded({extended:true}));

// get always take 2 params , one is the location and second one is the function

// fat arrow function ()=>{} , takes 2 params , one is request and other is response and we use response to send data ta output

// homepage
app.get('/', (req, resp) => {
    resp.sendFile(__dirname+'/homepage.html');
    console.log('Running on Port 4000');
})

app1.get('/', (req, resp) => {
    resp.send("<h1>Hello World 2</h1>");
    console.log('Running on Port 4001');
})

// about page
app.get('/about', (req, resp) => {
    resp.send("<h1>Hello World about</h1>");
    console.log('Running on Port 4000');
})

// blogs page
app.get('/blogs', (req, resp) => {
    resp.send("<h1>Hello World blogs</h1>");
    console.log('Running on Port 4000');
})

// contact page
app.get('/contact', (req, resp) => {
    resp.send("<h1>Hello World contact</h1>");
    console.log('Running on Port 4000');
})

// calculator page
// sendFile takes 2 arguments , one is path and other is options
app.get('/calculator', (req, resp) => {
    resp.sendFile(__dirname+'/index.html');
    console.log('Running on Port 4000');
})

app.post('/calculator', (req, resp) => {
    console.log(req.body);
    let n1 = Number(req.body.num1);
    let n2 = Number(req.body.num2);
    let sum = n1+n2;
    resp.send(`The Sum of ${n1} and ${n2} is ${sum}`);
    console.log('Running on Port 4000');
})

var link = 'https://jsonplaceholder.typicode.com/posts';

app.get('/link',(req,resp)=>{
    console.log(link);
    resp.send(link);
})

app.listen(4000);
app1.listen(4001);