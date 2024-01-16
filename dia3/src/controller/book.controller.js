//コントローラは、特定のエンドポイントへのリクエストを受け取り、それに対する処理を実行

const express = require('express');
const app = express();
const Book = require('../models/book');



// let books = null;
let books = [
    new Book(3, 202210, 'Dragon Lance - Hoja del Destino', 'Tapa Dura', 'Margaret Weis / Tracy Hickman', 19.90, 'https://static.fnac-static.com/multimedia/Images/ES/NR/92/df/7c/8183698/1507-1.jpg'),
    new Book(4, 202211, 'Marvel. La enciclopedia', ' Tapa Dura', 'DK', 33.25, 'https://static.fnac-static.com/multimedia/Images/ES/NR/17/ab/53/5483287/1507-1.jpg'),
    new Book(5, 202212, 'Kochi Kochi! - La guía del viajero en Japón', 'Tapa Blanda', 'Satori', 19.95, 'https://static.fnac-static.com/multimedia/Images/ES/NR/83/69/4e/5138819/1507-1.jpg')
];

function getStart(req, res){
    let respuesta = { error: true, codigo:200, mensaje: 'Punto de inicio' };
    res.send(respuesta);
}

// Si usa varios GET req en el mismo End-Point, solo ultimo sale. Para solucionar, usar end-points distintos o mergear los 2 métodos
//router.get('/books', bookCtrl.getBookQuery); と router.get('/books', bookCtrl.getBook); のように同じエンドポイントに対して複数のGETリクエストを設定すると、最後に定義されたものが優先され、前のものは無視される
function getBook(req, res){
    if(!req.query.id){
        let respuesta;
        if (books != null)
            respuesta = books;
        else
            respuesta = { error: true, codigo: 200, mensaje:'El libro no existe' };
        res.send(respuesta);  
    } else {
        let id = req.query.id;
        if (id != null) {
            let matchedBook = books.find(book => book.id_book == id);
            if (matchedBook != null) {
                res.send(matchedBook);
            } else {
                res.send({ error: true, codigo: 200, mensaje: 'No se encontraron libros con el ID especificado' });
            }
        } else {
            res.send({ error: true, codigo: 200, mensaje: 'El parámetro "id" no se proporcionó en la consulta' });
        }
    }

}


// create : add new books
function postBook(req, res){
    let respuesta;
    console.log(req.body);

    const newBook = {
        id_book: req.body.id_book, id_user: req.body.id_user, title: req.body.title, type: req.body.type, author: req.body.author, price: req.body.price, photo: req.body.photo
    };

    if (!books.find(book => book.id_book === newBook.id_book)){
        books.push(newBook);
        respuesta = {error: false, codigo: 200, mensaje: 'Libro creado', resultado: books}; 
    } else {
        respuesta = {error: true, codigo: 200, mensaje: 'Libro ya existe', resultado: null};
    }
    res.send(respuesta);
}


// edit
function putBook(req, res){
    let id_book = req.params.id_book;
    let matchedBook = books.find(book => book.id_book == id_book);
    let respuesta;

    if (matchedBook != null){
        matchedBook.id_book = req.body.id_book;
        matchedBook.id_user = req.body.id_user;
        matchedBook.title = req.body.title;
        matchedBook.type = req.body.type;
        matchedBook.author = req.body.author;
        matchedBook.price = req.body.price;
        matchedBook.photo = req.body.photo;
        respuesta = {error: false, codigo: 200, mensaje: 'Libro actualizado', resultado: books};
    } else 
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', resultado: null};
    
    res.send(respuesta);
}



function deleteBook(req, res){

    let id_book = req.params.id_book;
    let findIndexBook = books.findIndex(book => book.id_book == id_book);
    let respuesta;
    if (findIndexBook !== -1){
        books.splice(findIndexBook, 1);
        respuesta = {error: false, codigo: 200, mensaje: 'Libro borrado', resultado: books};
        
    } else
    respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', resultado: books};

res.send(respuesta);
}

function deleteBook(req, res){

    let id_book = req.params.id_book;
    let findIndexBook = books.findIndex(book => book.id_book == id_book);
    let respuesta;
    if (findIndexBook !== -1){
        books.splice(findIndexBook, 1);
        respuesta = {error: false, codigo: 200, mensaje: 'Libro borrado', resultado: books};
        
    } else
    respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', resultado: books};

res.send(respuesta);
}

function errorBook(req, res){
    console.log('The requested link does not exist');
    res.status(404).json({ error: true, codigo: 404, message: 'Endpoint is not found' });
}

// edit
// function putBook(req, res){
//     let id_book = req.params.id_book;
//     let matchedBook = books.find(book => book.id_book == id_book);
//     let respuesta;

//     if (matchedBook != null){
//         matchedBook.id_book = req.body.id_book1;
//         matchedBook.id_user = req.body.id_user1;
//         matchedBook.title = req.body.title1;
//         matchedBook.type = req.body.type1;
//         matchedBook.author = req.body.author1;
//         matchedBook.price = req.body.price1;
//         matchedBook.photo = req.body.photo1;
//         respuesta = {error: false, codigo: 200, mensaje: 'Libro actualizado', resultado: matchedBook};
//     } else
//         respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', resultado: matchedBook};

//     res.send(respuesta);
// }


// function getBook(req, res){
//     let respuesta;
//     if (books != null)
//         respuesta = books;
//     else
//         respuesta = { error: true, codigo: 200, mensaje:'El libro no existe' };
//     res.send(respuesta);
// }


//find GET /books?id=5 QueryParameter:id
// function getBookQuery(req, res) {
//     let id = req.query.id;
//     if (id != null) {
//         let matchedBook = books.find(book => book.id_book == id);
//         if (matchedBook != null) {
//             res.send(matchedBook);
//         } else {
//             res.send({ error: true, codigo: 200, mensaje: 'No se encontraron libros con el ID especificado' });
//         }
//     } else {
//         res.send({ error: true, codigo: 200, mensaje: 'El parámetro "id" no se proporcionó en la consulta' });
//     }
// }

// function getBookQuery(req, res){
//     let id = req.query.id;
//     if (id != null){
//         let matchedBooks = books.filter(book => book.id_book == id);
//         if (matchedBooks.length > 0){
//             res.send(matchedBooks);
//         } else {
//             res.send({error: true, codigo: 200, mensaje: 'No se encontraron libros con el ID especificado'});
//         }
//     } else {
//         res.send({error: true, codigo: 200, mensaje: 'El parámetro "id" no se proporcionó en la consulta'});
//     }
// }


// function getBookParams(req, res){
//     let id = parseInt(req.params.id_book);
//     let book = books.find(book => book.id_book === id);
//     if (book != null && id === book.id_book)
//         res.send(book);
//     else
//         res.send({error: true, codigo: 200, mensaje: 'El id de libro no existe'});
// }



// create : if books === null　
// function postBook(req, res){
//     let respuesta;
//     console.log(req.body)
//     if (books === null){
//         books   = {id_book: req.body.id_book1, id_user: req.body.id_user1, title: req.body.title1, type: req.body.type1, author:req.body.author1, price:req.body.price1, photo:req.body.photo1};

//         respuesta = {error: false, codigo: 200, mensaje: 'Libro creado', resultado: books}; 
//     } else
//         respuesta = {error: true, codigo:200, mensaje: 'Libro ya existe', resultado: null};

//     res.send(respuesta);
// }

// // edit
// function putBook(req, res){
//     let id_book = req.params.id_book;
//     let matchedBook = books.find(book => book.id_book == id_book);
//     let respuesta;

//     if (matchedBook != null){
//         matchedBook.id_book = req.body.id_book1;
//         matchedBook.id_user = req.body.id_user1;
//         matchedBook.title = req.body.title1;
//         matchedBook.type = req.body.type1;
//         matchedBook.author = req.body.author1;
//         matchedBook.price = req.body.price1;
//         matchedBook.photo = req.body.photo1;
//         respuesta = {error: false, codigo: 200, mensaje: 'Libro actualizado', resultado: matchedBook};
//     } else
//         respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', resultado: matchedBook};

//     res.send(respuesta);
// }

//     function deleteBook(req, res){
//         if (!Array.isArray(books)) {
//             return res.status(500).send({ error: true, message: "Internal server error" });
//         }

//         let id_book = req.params.id_book;
//         let findIndexBook = books.findIndex(book => book.id_book == id_book);
//         let respuesta;
//         if (findIndexBook !== -1){
//             books.splice(findIndexBook, 1);
//             respuesta = {error: false, codigo: 200, mensaje: 'Libro borrado', resultado: books};
            
//             console.log(Array.isArray(books)); // booksが配列かどうかを確認
//             console.log(books); // booksの現在の状態を出力
            
//         } else
//         respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', resultado: books};

//     res.send(respuesta);
// }


// function getUserQuery(req, res){
//     let name = req.query.name;
//     let respuesta;

//     if (usuario != null && (!name || name === usuario.nombre ))
//         respuesta = usuario;
//     else
//         respuesta = { error: true, codigo: 200, mensaje: 'El usuario no existe'};

//     res.send(respuesta);
// }

module.exports = {
    getStart,
    getBook,
    // getBookParams,
    // getBookQuery,
    postBook,
    putBook,
    deleteBook,
    errorBook
}