const Joi = require('joi');

const bookSchema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    author: Joi.string().min(3).max(50).required(),
    year: Joi.number().integer().min(1900).max(new Date().getFullYear()).required()
});

const validateBook = (bookData) => {
    return bookSchema.validate(bookData, { abortEarly: false });
  };

module.exports = validateBook;