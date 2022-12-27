const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routers = require("./src/routers");
const { globalErrorHandler } = require("./src/utils/error");

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(morgan("combined"));

  app.use(routers);
  app.use(globalErrorHandler);

  return app;
};

module.exports = { createApp };
