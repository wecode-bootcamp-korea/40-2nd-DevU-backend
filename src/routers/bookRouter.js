const express = require("express");
const bookController = require('../controllers/bookController')

const router = express.Router();

router.get("/", bookController.getAllBooks);
router.get("/:mainCategoryId", bookController.getBooksByMainCategoryId);

module.exports = router;

