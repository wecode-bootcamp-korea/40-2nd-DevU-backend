require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { DataSource } = require("typeorm");

app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

const database = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/ping", (req, res) => {
  return res.json({ message: "pong!" });
});

database
  .initialize()
  .then(() => {
    console.log("Databse Connected!");
  })
  .catch((err) => {
    console.log("Error during Database initialization");
  });

const PORT = process.env.PORT;

const start = async () => {
  app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
};

start();
