const  bookService  = require("../services/bookService");
const { catchAsync } = require("../utils/error");

const getAllBooks = catchAsync(async (req, res) => {
  const books = await bookService.getAllBooks();
  return res.status(200).json(books);
});

const getBooksByMainCategoryId = catchAsync(async (req, res) => {
  const bookId = req.params.mainCategoryId;
  const books = await bookService.getBooksByMainCategoryId(bookId);
  return res.status(200).json(books);
})

 
module.exports = {
  getAllBooks,
  getBooksByMainCategoryId
};
