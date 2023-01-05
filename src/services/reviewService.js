const  reviewDao = require("../models/reviewDao");

const addReview = async (userId, bookId, review, rating) => {
  return await reviewDao.addReview(userId, bookId, review, rating);
};

const getReview = async (bookId) => {
  return await reviewDao.getReview(bookId);
};

const updateReview = async (id, userId, review, rating, bookId) => {
  return await reviewDao.updateReview(id, userId, review, rating, bookId);
};

const deleteReview = async (id, userId, bookId) => {
  return await reviewDao.deleteReview(id, userId, bookId);
};

module.exports = {
  addReview,
  getReview,
  updateReview,
  deleteReview
};
