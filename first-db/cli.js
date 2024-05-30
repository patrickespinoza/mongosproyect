require("dotenv").config();

const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const Koder = mongoose.model(
  "koder",
  new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 100,
    },
    lastName: {
      type: String,
      required: false,
      maxLength: 100,
    },
    email: {
      type: String,
      required: true,
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    birthdate: {
      type: Date,
      required: false,
    },
    generation: {
      type: Number,
      min: 1,
      max: 100,
    },
  })
);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Conexion exitosa");

    Koder.create({
      firstName: "patrick",
      lastName: "espinoza",
      email: "patrick@gmail.com",
      birthdate: new Date("2000-11-11"),
      generation: 33,
    })
      .then(() => console.log("koder created"))
      .catch((error) => console.log("Error al crear koder", error));
  })
  .catch((error) => {
    console.error("Erro al conectar con la base de datos", error);
  });

//las promesas por defecto nacen en un estado pendiente
