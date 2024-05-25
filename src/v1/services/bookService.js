const Book = require('../models/book');

const getAllBooks = async () => {
    const books = await Book.find();
    return books;
};

const getOneBook = async (id) => {
    const book = await Book.findById(id);
    if (!book) throw new Error('Book not found'); //if book is not found, throw an error
    return book;
};

const createBook = async (bookData) => {
    let book = new Book(bookData);
    await book.save();
    return book;
};

const updateBook = async (id,bookData) => {
    const book = await Book.findByIdAndUpdate(id, bookData, { new: true });
    if (!book) throw new Error('Book not found');
    return book;
};

const deleteBook = async (id) => {
    const book = await Book.findByIdAndDelete({_id :id});
    if (!book) throw new Error('Book not found');
    return book;
};

module.exports = {
    getAllBooks,
    getOneBook,
    createBook,
    updateBook,
    deleteBook,
};