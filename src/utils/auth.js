const jwt = require("jsonwebtoken");
const userDao = require("../models/userDao");

const loginRequired = async (req, res, next) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    const error = new Error("NEED_ACCESS_TOKEN");
    error.statusCode = 401;
    return res.status(error.statusCode).json({ message: error.message });
  }

  const userId = await jwt.verify(accessToken, process.env.JWT_SECRET).userId;

  const user = await userDao.getUserById(userId);

  if (!user) {
    const error = new Error("USER_DOES_NOT_EXIST");
    error.statusCode = 404;
    return res.status(error.statusCode).json({ message: error.message });
  }
  req.user = user;
  
  next();
};

module.exports = { loginRequired };
