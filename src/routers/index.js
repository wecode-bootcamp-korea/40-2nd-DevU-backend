const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter")
const bookRouter = require("./bookRouter");

router.use("/users", userRouter)
router.use("/books", bookRouter);

module.exports = router;
