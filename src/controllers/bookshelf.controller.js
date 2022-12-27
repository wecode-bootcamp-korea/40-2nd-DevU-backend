const bookshelfService = require("../services/bookshelf.service");

const getBookshelfByUserId = async (req, res) => {
  try {
    const userId = req.user.id
    const result = await bookshelfService.getBookshelfByUserId(userId);

    return res.status(200).json({ data: result });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const getBookContentsByBookshelfId = async (req, res) => {
  
  try {
    const userId = req.user.id
    const bookId = req.params.bookId;

    if (!bookId) {
      throw new Error("Key Error");
    }
    
    const result = await bookshelfService.getBookContentsByBookshelfId(userId, bookId);

    return res.status(200).json({ data: result });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { getBookshelfByUserId, getBookContentsByBookshelfId };
