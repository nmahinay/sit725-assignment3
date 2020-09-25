const Express = require("express");
const mongo = require("./services/MongoService");

let app = new Express();
const PORT = 3000;

// Setup DB
mongo.openConnection();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Running on port: ", PORT);
});
