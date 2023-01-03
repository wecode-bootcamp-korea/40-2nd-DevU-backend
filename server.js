require("dotenv").config();

const { createApp } = require("./app")
const appDataSource = require('./src/models/dataSource')

const start = () =>{
    const app = createApp()
    const PORT = process.env.PORT;

    appDataSource
        .initialize()
        .then(() => {
            console.log("Data Source has been initialized!");
        })
        .catch((error) => {
            console.error("Error during Data Source initialization", error);
        });

    app.get("/ping", function (req, res) {
        res.json({ message: "pong!" });
    });

    try{
    app.listen(PORT, () => {
        console.log(`server is listening on ${PORT}`)});
    } catch (err){
        console.log(err)
      }
}

start();