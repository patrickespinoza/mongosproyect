const express = require("express");

const kodersRouter = require("./routes/koders.router");
const authRouter = require("./routes/auth.router");
const GenerationRouter = require("./routes/generation.router");

const app = express();

//middleware
app.use(express.json());

app.use("/koders", kodersRouter);
app.use("/generation", GenerationRouter);
app.use("/auth", authRouter);

app.get("/", (request, response) => {
  response.json({
    message: "Koders APIv1",
  });
});

module.exports = app;
