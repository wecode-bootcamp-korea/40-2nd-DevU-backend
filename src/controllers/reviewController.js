const reviewService = require("../services/reviewService");

const addReview = async (req, res) => {
  const userId = req.user.id
  const { bookId, review, rating } = req.body;
  const addReview = await reviewService.addReview(userId, bookId, review, rating)
  return res.status(201).json({addReview, message : SUCCESS});
} 

const getReview = async (req, res) => {
  const bookId = req.params.bookId
  return res.status(200).json(await reviewService.getReview(bookId));
};

const updateReview = async (req, res) => {
  const reviewId = req.params.id
  const { review, rating, userId, bookId } = req.body; 
  const books = await reviewService.updateReview(
    reviewId,
    review, 
    rating, 
    userId,
    bookId
    ); 
    return res.status(200).json({ books, message: "Updated" });
};

const deleteReview = async (req, res) => {
  const id = req.body.id
  const userId = req.user.id
  const bookId = req.params.bookId
  await reviewService.deleteReview(id, userId, bookId);
  return res.status(204).json({message : "Deleted"});
};

module.exports = {
  addReview,
  getReview, 
  updateReview,
  deleteReview
};

