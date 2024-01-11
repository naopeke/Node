// const fs = require('fs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const r1 = readline.createInterface({ input, output });


function readConsole(callback){

    r1.question('Nombre? ', (nombre) => {
        r1.question('Apellido? ', (apellido) => {
            r1.question('Edad? ', (edad) => {
                console.log(`Got this data => Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`);
    
                edad = parseFloat(edad);
    
                let newUser = { name: nombre, surname: apellido, edad: edad };
    
                callback(newUser);
                  
                r1.close();
            });
        });
    });
}


// readConsole(console.log);
module.exports = {
    readConsole
};