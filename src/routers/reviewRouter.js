const express = require("express");
const reviewController  = require("../controllers/reviewController");
const loginRequired  = require("../utils/auth");

const router = express.Router();

router.post("/", loginRequired, reviewController.addReview);
router.get("/:bookId", reviewController.getReview);
router.put("/:reviewId", loginRequired, reviewController.updateReview);
router.delete("/:bookId", loginRequired, reviewController.deleteReview);

module.exports = router
