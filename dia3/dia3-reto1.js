const express = require('express');
const app = express();

//Middlewares
//https://stackoverflow.com/questions/22285921/how-to-handle-user-agent-in-nodejs-environment
app.get('/', (req, res) => {
    console.log('Petición recibida del cliente');
    console.log('URL: ' + req.url);
    console.log('Método: ' + req.method);
    console.log('User-Agent: ' + req.headers['user-agent']);
    res.status(200).json({ ok: true, message: 'Recibido!' });
});

app.get('/bye', (req, res) =>{
    // console.log('Petición recibida del cliente');
    // console.log('URL: ' + req.url);
    // console.log('Método: ' + req.method);
    // console.log('User-Agent: ' + req.headers['user-agent']);
    res.status(200).json({ ok:true, message: 'Adios!'});
})

app.listen(3000, () => {
    console.log('Esperando la petición en la Port3000...');
});