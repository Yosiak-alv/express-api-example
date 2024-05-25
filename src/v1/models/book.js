const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({ //id is automatically created by mongoDB
    title: {
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;