const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Received the request');
    next();
});

app.get('/book', (req, res) => {
    console.log('GET: get the book');
    res.send('GET request');
});

app.post('/book', (req, res) => {
    console.log('POST: create a new object');
    res.send('POST request');
});

app.put('/book', (req, res) => {
    console.log('PUT: edit the data of the book');
    res.send('PUT request');
})

app.delete('/book', (req, res) => {
    console.log('DELETE: delete the book');
    res.send('DELETE request');
})




app.listen(3000, ()=>{
    console.log('Waiting for the request on Port 3000');
})