const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter")
const bookRouter = require("./bookRouter")
const orderRouter = require("./orderRouter")

router.use("/users", userRouter);
router.use("/books", bookRouter);
router.use("/orders", orderRouter )

module.exports = router;
