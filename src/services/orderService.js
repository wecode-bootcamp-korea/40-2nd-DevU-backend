const orderDao = require("../models/orderDao");

const checkOrder = async (userId, bookId) => {
  return await orderDao.checkOrder(userId, bookId);
};

const createOrder = async (userId, bookId, online_price) => {
  return await orderDao.createOrder(userId, bookId, online_price);
};

module.exports = { checkOrder, createOrder };
