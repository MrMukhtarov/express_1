const express = require('express')
const router = express.Router();
const Book = require('../../admin/models/Book')
const booksController = require('../controllers/books.controller')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', booksController.getAllBooks);
router.post('/', booksController.addBook);
router.get('/:id', booksController.getById);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

module.exports=router;