const express = require("express");

const { loginRequired } = require("../utils/auth");
const bookshelfController = require("../controllers/bookshelf.controller");

const router = express.Router();

router.get("", loginRequired, bookshelfController.getBookshelfByUserId);
router.get("/viewer/:bookshelfId", loginRequired, bookshelfController.getBookContentsByBookshelfId);

module.exports = router ;
