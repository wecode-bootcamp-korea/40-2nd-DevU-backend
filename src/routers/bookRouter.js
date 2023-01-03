const express = require("express");
const { getBooksByCategoryId, getBooksByName } = require('../controllers/bookController')


const router = express.Router();

router.get("/search", getBooksByName);
router.get("/subCategories/:id", getBooksByCategoryId);

module.exports = router;
 
