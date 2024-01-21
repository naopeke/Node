const { Router } = require ('express');
const router = Router();
const bookCtrl = require('../controller/books.controller');

router.get('/', bookCtrl.getBooks)
router.get('/:id', bookCtrl.getBooksParams);
router.post('/', bookCtrl.postBooks);
router.put('/', bookCtrl.putBooks);
router.delete('/', bookCtrl.deleteBooks);

module.exports = router;