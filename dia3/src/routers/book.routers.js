const { Router } = require ('express');
const router = Router();
const bookCtrl = require('../controller/book.controller');

router.get('/', bookCtrl.getStart);
// router.get('/books/:id_book', bookCtrl.getBookParams);
// router.get('/books', bookCtrl.getBookQuery);
router.get('/books', bookCtrl.getBook);
router.post('/books', bookCtrl.postBook);
router.put('/books/:id_book', bookCtrl.putBook);
router.delete('/books/:id_book', bookCtrl.deleteBook);
router.get('*', bookCtrl.errorBook);

module.exports = router;