const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => 
res.send('Hi there, Welcome to my assignment!'));

app.get('/speak/:animal',(req,res) => {
var animal = req.params.animal;
var sound = "";
if(animal === "pig")
{
sound = "oink";	
}
else if(animal === "cow")
{
sound = "moo";
}
res.send(`The ${animal} says ${sound}`)})

app.get("*", (req,res) => res.send('Cannot found Page'))

app.listen(port, () => console.log('Server is started'))
