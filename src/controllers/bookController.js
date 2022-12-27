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

const getBooksByCategoryId = catchAsync(async (req, res) => {
  const subCategoryId = req.params.id;
  const books = await bookService.getBooksByCategoryId(subCategoryId);
  return res.status(200).json(books);
});

const getBooksByName = catchAsync(async (req, res) => {
  const title = req.query.title;
  const books = await bookService.getBooksByName(title);
  return res.status(200).json(books);
});

const getBooksById = catchAsync(async (req, res) => {
  const id = req.params.id
  const books = await bookService.getBooksById(id);
  return res.status(200).json(books);
});
 

module.exports = {
  getAllBooks,
  getBooksByMainCategoryId,
  getBooksByCategoryId,
  getBooksByName,
  getBooksById
};
