const bookDao = require("../models/bookDao");

const getAllBooks = async () => {
  return await bookDao.getAllBooks();
};

const getBooksByMainCategoryId = async bookId => {
  return await bookDao.getBooksByMainCategoryId(bookId);
};

const getBooksByCategoryId = async (subCategoryId) => {
  return await bookDao.getBooksByCategoryId(subCategoryId);
}; 

const getBooksByName = async (title) => {
  return await bookDao.getBooksByName(title);
};

const getBooksById = async (id) => {
  return await bookDao.getBooksById(id);
};

module.exports = {
  getAllBooks,
  getBooksByMainCategoryId,
  getBooksByCategoryId,
  getBooksByName,
  getBooksById  
};
