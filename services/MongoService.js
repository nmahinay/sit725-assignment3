const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://dbuser:dbuser@sit725-4.uxnw5.mongodb.net/sitboard?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

// Insert Message into database
let documentsCollection;

const openConnection = () => {
  client.connect((err) => {
    documentsCollection = client.db("sitboard").collection("documents");
    if (!err) {
      console.log("Database Connected");
    }
  });
};

module.exports = {
  openConnection,
};
