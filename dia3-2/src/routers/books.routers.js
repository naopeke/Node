const { Router } = require ('express');
const router = Router();
const bookCtrl = require('../controller/books.controller');

router.get('/:id', bookCtrl.getBooksParams);
router.get('/', bookCtrl.getBooks)
router.post('/', bookCtrl.postBooks);
router.put('/', bookCtrl.putBooks);
router.delete('/', bookCtrl.deleteBooks);
router.get('*', bookCtrl.errorBooks);

module.exports = router;