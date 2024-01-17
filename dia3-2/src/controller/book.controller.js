const express = require('express');
const app = express();
const Book = require('../models/book');

let book = new Book(1, 35, 'La Historia Interminable', 'Tapa dura', 'Michael Ende', 15.95, 'https://static.fnac-static.com/multimedia/Images/ES/NR/72/2e/12/1191538/1540-1.jpg');
// let book = null;



// function getBookParams(req, res){
//     let respuesta;
//     let bookId = req.params.id_book;
//     if (book != null && book.id_book == bookId)
//         respuesta = book;
//     else
//         respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe'}
    
//     res.send(respuesta);
// }


/!* No se puede usar getBook y getBookQuery porque es el mismo endpoint*/
//  /books?id=5 QueryParameter:id
// function getBookQuery(req, res){
//     let respuesta;
//     let bookId = req.query.id;
//     if (book != null && book.bookId == bookId)
//         respuesta = { error: false, codigo: 200, mensaje: book };
//     else
//         respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe'};

//     res.send(respuesta);
// }

function getBook(req, res) {
    let respuesta;
    if (book !=null)
        respuesta = book;
    else
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe'};

    res.send(respuesta);
}

// function getBook(req, res){
//     let respuesta;

//     // si hay query 
//     if(req.query.id){
//         let bookId = req.query.id;
//         if (book != null && book.bookId == bookId){
//             respuesta = { error: false, codigo: 200, mensaje: book };
//         } else {
//             respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe'};
//         }
//     // si no hay query
//     } else {
//     if (book !=null){
//             respuesta = book;
//     } else {
//             respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe'};
//         }
//         }
//     res.send(respuesta);
//     }




function postBook(req, res){
    let respuesta;
    console.log(req.body)

    if (book === null)
    {
        book = {id_book: req.body.id_book, 
                id_user: req.body.id_user, 
                title: req.body.title, 
                type: req.body.type, 
                author: req.body.author, 
                price: req.body.price, 
                photo: req.body.photo}

        respuesta = {error: false, codigo: 200, mensaje: 'Libro creado', resultado: book};
    }
    else
        respuesta = {error: true, codigo: 200, mensaje: 'Libro ya existe', resultado: null};

    res.send(respuesta);
}

function putBook (req, res){
    let respuesta;
    if (book != null){
        book.id_book = req.body.id_book; 
        book.id_user = req.body.id_user; 
        book.title = req.body.title; 
        book.type = req.body.type;
        book.author = req.body.author; 
        book.price = req.body.price; 
        book.photo = req.body.photo;
        respuesta = {error: false, codigo: 200, mensaje: 'Libro actualizado', resultado: book};
    }
    else
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', resultado: null};

    res.send(respuesta);
    }

function deleteBook(req,res){
    let respuesta;
    if (book != null){
        book = null;
        respuesta = {error: false, codigo: 200, mensaje: 'Libro borrado', resultado: book};
    }
    else
    respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', resultado: book};

    res.send(respuesta);
}

function errorBook(req, res){
    console.log('The requested link does not exist');
    res.status(404).json({ error: true, codigo: 404, message: 'Endpoint is not found' });
}


module.exports = {
    getBook,
    postBook,
    putBook,
    deleteBook,
    errorBook
}