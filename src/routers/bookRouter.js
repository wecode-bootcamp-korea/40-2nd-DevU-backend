const express = require("express");
const bookController = require('../controllers/bookController')

const router = express.Router();

router.get("/", bookController.getAllBooks);
router.get("/:mainCategoryId", bookController.getBooksByMainCategoryId);
router.get("/subCategories/:id", bookController.getBooksByCategoryId);
router.get("/search", bookController.getBooksByName);
router.get("/details/:id", bookController.getBooksById);

module.exports = router;
