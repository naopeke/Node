//Reto2
const fs = require('fs/promises');
const readline = require('readline');

function pregunta(pregunta){
    const question = new Promise((resolve, reject) =>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(pregunta, (respuesta)=>{
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}


// then, catch
// pregunta('Nombre? ')
//     .then( nombre => {
//         return pregunta('Apellido? ')
//     .then( apellido => {
//         return pregunta('Edad? ')
//     .then( edad => {
//         console.log(`Got this data => Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`);
//         edad = parseFloat(edad);    
//         const newUser = { name: nombre, surname: apellido, edad: edad }; 
//         let newUserString = JSON.stringify(newUser);
//             return fs.writeFile('new.json', newUserString);
//     })
//     .then(() => {
//         console.log('File written successfully');
//         return fs.readFile('new.json', 'utf-8');
//     })
//     .then ( data => {
//         console.log(data);
//     })
//     .catch( err => {
//         console.log(err);
//     });
//     });
//     });

//  https://puruvj.dev/blog/fs-promises
async function asyncAwait(){
    try {
        let nombre = await pregunta('Nombre? ');
        let apellido = await pregunta('Apellido? ');
        let edad = await pregunta('Edad? ');

        console.log(`Got this data => Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`);
        edad = parseFloat(edad);
        let newUser = { name: nombre, surname: apellido, edad: edad };
        let newUserString = JSON.stringify(newUser);
    
        await fs.writeFile('new.json', newUserString);
        console.log('File written successfully');

        let data = await fs.readFile('new.json', 'utf8');
        console.log(data);

       } catch (err) {
        console.log(err);
       }
}

asyncAwait();


//codigo original de reto3
// r1.question('Nombre? ', (nombre) => {
//     r1.question('Apellido? ', (apellido) => {
//         r1.question('Edad? ', (edad) => {
//             console.log(`Got this data => Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`);
//             edad = parseFloat(edad);
//             let newUser = { name: nombre, surname: apellido, edad: edad };
//             let newUserString = JSON.stringify(newUser);

//             fs.writeFile('new.json', newUserString, (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log('File written successfully');
//                     fs.readFile('new.json', 'utf8', function (err, data) {
//                         if (err) {
//                             console.log(err);
//                         } else {
//                             console.log(data);
//                         }
//                     });
//                     console.log('readFile called');
//                 }
//             });
//             r1.close();
//         });
//     });
// });