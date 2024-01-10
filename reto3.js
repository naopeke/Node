const fs = require('fs');
//https://nodejs.org/api/readline.html
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const r1 = readline.createInterface({ input, output });

r1.question('Nombre? ', (nombre) => {
    r1.question('Apellido? ', (apellido) => {
        r1.question('Edad? ', (edad) => {
            console.log(`Got this data => Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`);

            edad = parseFloat(edad);

            let newUser = { name: nombre, surname: apellido, edad: edad };

            let newUserString = JSON.stringify(newUser);


            fs.writeFile('new.json', newUserString, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('File written successfully');
                    fs.readFile('new.json', 'utf8', function (err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(data);
                        }
                    });
                    console.log('readFile called');
                }
            });
            r1.close();
        });
    });
});

