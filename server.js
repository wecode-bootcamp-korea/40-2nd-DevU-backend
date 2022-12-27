require("dotenv").config();

const { createApp } = require("./app");
const appDataSource = require("./src/models/dataSource");

const start = async () => {
  const app = createApp();
  const PORT = process.env.PORT;

  await appDataSource
    .initialize()
    .then(() => {
      console.log("🐳 Welcome to My Server! 🐳");
    })
    .catch((error) => {
      console.error("Error during Data Source initialization", error);
    });

  app.get("/ping", function (req, res) {
    res.json({ message: "pong!" });
  });

  try {
    app.listen(PORT, () => {
      console.log(`server is listening on ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
