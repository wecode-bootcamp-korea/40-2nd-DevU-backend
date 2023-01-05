const orderService = require("../services/orderService");

const checkOrder = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const userId = req.user.id;

    if (!bookId) {
      throw new Error("Key Error");
    }

    const result = await orderService.checkOrder(userId, bookId);

    return res.status(200).json({ result });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: "order controller error" });
  }
};

const createOrder = async (req, res) => {
  try {
    const { bookId, onlinePrice } = req.body;
    const userId = req.user.id;

    if (!bookId || !onlinePrice) {
      throw new Error("Key Error");
    }

    const result = await orderService.createOrder(userId, bookId, onlinePrice);

    return res.status(201).json({ result });
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: "order controller error" });
  }
};

module.exports = { checkOrder, createOrder };
