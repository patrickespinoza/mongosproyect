require("dotenv").config();

const server = require("./src/server");
const db = require("./src/lib/db");

const port = process.env.port || 8081;

db.connect()
  .then(() => {
    console.log(" DB connected");

    server.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("DB connection error", error);
  });
