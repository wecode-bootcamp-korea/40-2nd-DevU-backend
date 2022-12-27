const bookshelfDao = require("../models/bookshelf.dao");

const getBookshelfByUserId = async (userId) => {
  return bookshelfDao.getBookshelfByUserId(userId);
};

const getBookContentsByBookshelfId = async (userId, bookId) => {
  return bookshelfDao.getBookContentsByBookshelfId(userId, bookId);
};

module.exports = {
  getBookshelfByUserId,
  getBookContentsByBookshelfId,
};
