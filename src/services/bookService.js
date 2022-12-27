const bookDao = require("../models/bookDao");

const getAllBooks = async () => {
  return await bookDao.getAllBooks();
};

const getBooksByMainCategoryId = async bookId => {
  return await bookDao.getBooksByMainCategoryId(bookId);
};

module.exports = {
  getAllBooks,
  getBooksByMainCategoryId
};
