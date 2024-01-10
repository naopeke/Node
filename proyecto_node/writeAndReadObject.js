const fs = require('fs');

function writeAndRead(path, obj){
    fs.writeFile(path, JSON.stringify(obj), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File written successfully');
            
            fs.readFile('miFichero.json', 'utf8', function(err, data){
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

writeAndRead('./miFichero.json', {calle:'Teruel', numero: 8});
// fs.writeAndRead('./miFichero.json', {calle: 'Teruel', numero: 8})