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



function getBooksParams(req, res){
    let respuesta;
    let bookId = req.params.id_book;
    let matchedBook = books.find(book => book.id_book === id);
    if (matchedBook != null && id === matchedBook.id_book)        
        respuesta = {error: false, codigo: 200, mensaje: matchedBook};
    else
        respuesta = {error: true, codigo: 200, mensaje: 'El id de libro no existe'};
    res.send(respuesta);
    }

// Si usa varios GET req en el mismo End-Point, solo ultimo sale. Para solucionar, usar end-points distintos o mergear los 2 métodos
//router.get('/books', bookCtrl.getBookQuery); と router.get('/books', bookCtrl.getBook); のように同じエンドポイントに対して複数のGETリクエストを設定すると、最後に定義されたものが優先され、前のものは無視される
function getBooks(req, res){
    if(!req.query.id){
        let respuesta;
        if (books != null)
            respuesta = books;
        else
            respuesta = { error: true, codigo: 200, mensaje:'El libro no existe' };
        res.send(respuesta);  
    } else {
        let bookId = req.query.id;
        if (bookId != null) {
            let matchedBook = books.find(book => book.id_book == bookId);
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
function postBooks(req, res){
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
function putBooks(req, res){
    let bookId = req.body.id_book;
    let matchedBook = books.find(book => book.id_book == bookId);
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



function deleteBooks(req, res){

    let id_book = req.body.id_book;
    let findIndexBook = books.findIndex(book => book.id_book == id_book);
    let respuesta;
    if (findIndexBook !== -1){
        books.splice(findIndexBook, 1);
        respuesta = {error: false, codigo: 200, mensaje: 'Libro borrado', resultado: books};
        
    } else
    respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', resultado: books};

res.send(respuesta);
}



function errorBooks(req, res){
    console.log('The requested link does not exist');
    res.status(404).json({ error: true, codigo: 404, message: 'Endpoint is not found' });
}

module.exports = {
    getBooksParams,
    getBooks,
    postBooks,
    putBooks,
    deleteBooks,
    errorBooks
}