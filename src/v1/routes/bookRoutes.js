const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

router.get('/books', bookController.getBooks);
router.get('/books/:id', bookController.getBook);
router.post('/books', bookController.createBook);
router.patch('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.destroyBook);

module.exports = router;