const orderDao = require("../models/orderDao");

const checkOrder = async (userId, bookId) => {
  return await orderDao.checkOrder(userId, bookId);
};

const createOrder = async (userId, bookId, onlinePrice) => {
  return await orderDao.createOrder(userId, bookId, onlinePrice);
};

module.exports = { checkOrder, createOrder };
