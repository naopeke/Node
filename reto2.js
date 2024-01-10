//Reto2 and 3
const fs = require('fs');

let user = { name: 'pepe', surename: 'lopez', edad: 90 };

// convertir "user" al formato JSON string para writeFile
let userString = JSON.stringify(user);

//https://www.geeksforgeeks.org/node-js-fs-writefile-method/
// fs.writeFile('new.json', userString, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File written successfully');
//     }
// });

//readFile
//https://www.geeksforgeeks.org/node-js-fs-readfile-method/?ref=ml_lbp

//JSON.parse
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
// let obj = JSON.parse(userString)
// fs.readFile('new.json', 'utf8', function(err, data){

//     console.log(data);
// });
// console.log('readFile called');


//fs.unlink
//https://www.geeksforgeeks.org/node-js-fs-unlink-method/
//https://stackoverflow.com/questions/5315138/node-js-remove-file


/!* Si lo haces como arriba, hay que ejectar 2 veces. Así que hay que meter readFile en la función de writeFile*/

let obj = JSON.parse(userString);

/!* Método 1 */
// fs.writeFile('new.json', userString, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File written successfully');
//         fs.readFile('new.json', 'utf8', function(err, data){
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         });
//         console.log('readFile called');
//     }
// });


//https://www.geeksforgeeks.org/node-js-fs-unlink-method/

/* Método2 : Usando unlink*/
fs.unlink ('new.json', (err =>{
    if (err){
        console.log(err);
    } else {
        console.log('File deleted successfully')
        fs.writeFile('new.json', userString, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('File written successfully');
                fs.readFile('new.json', 'utf8', function(err, data){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
                console.log('readFile called');
            }
        });
    }
}))

