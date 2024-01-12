//Reto2
//fs/primisesモジュール：ファイルの読み書きなどの操作が非同期的かつPromiseを返す形式で行えるようになる
const fs = require('fs/promises');
let user = { name: 'juan', surename: 'lopez', edad: 90 };

//async await
async function asyncAwait(){
    try {
        await fs.writeFile('new.json', JSON.stringify(user));
        const nuevo = await fs.readFile('new.json', 'utf-8');
        console.log(JSON.parse(nuevo));     

    } catch (error){
        console.log(error);
    }
}

asyncAwait();


//then catch
fs.writeFile('personaPromesa.json', JSON.stringify(user))
.then(() => {
    return fs.readFile('personaPromesa.json', 'utf-8');
})
.then((data) => {
    console.log(JSON.parse(data));
})
.catch((error) => {
    console.log(error);
});

