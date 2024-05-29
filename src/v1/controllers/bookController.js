const bookService = require('../services/bookService');
const asyncHandler = require('../utils/asyncHandler');
const validateBook = require('../validators/bookValidator');
// BookController
const getBooks = asyncHandler(async (req, res) => {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
});

const getBook = asyncHandler(async (req, res) => {
    const book = await bookService.getOneBook(req.params.id);
    res.status(200).json(book);
});

const createBook = asyncHandler(async (req, res) => {
    const { error } = validateBook(req.body);
    if(error) return res.status(400).json({ error: error.details.map((err) => err.message)});
    
    const book = await bookService.createBook(req.body);
    res.status(201).json({message: 'Book created successfully'});
});

const updateBook = asyncHandler(async (req, res) => {
    const { error } = validateBook(req.body);
    if(error) return res.status(400).json({ error: error.details.map((err) => err.message) });

    const book = await bookService.updateBook(req.params.id, req.body);
    res.status(200).json({message: 'Book updated successfully'});
});

const destroyBook = asyncHandler(async (req, res) => {
    const book = await bookService.deleteBook(req.params.id);
    res.status(200).json({message: 'Book deleted successfully '});
});

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    destroyBook,
};