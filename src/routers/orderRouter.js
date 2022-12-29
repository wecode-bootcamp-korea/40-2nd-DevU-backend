const express = require("express");
const orderController = require("../controllers/orderController");
const { loginRequired } = require("../utils/auth");

const router = express.Router();

router.get("/:bookId", loginRequired, orderController.checkOrder);
router.post("", loginRequired, orderController.createOrder);

module.exports = { router };
