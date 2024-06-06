const creatError = require("http-errors");
const Koders = require("../models/koders.model");
const jwt = require("../lib/jwt");
const encrypt = require("../lib/encrypt");

async function login(email, password) {
  const koder = await Koders.findOne({ email: email });

  if (!koder) {
    throw creatError(401, "invalid data");
  }

  const isPasswordValid = await encrypt.compare(password, koder.password);

  if (!isPasswordValid) {
    throw creatError(401, "invalid data");
  }

  const token = jwt.sign({ id: koder._id });
  return token;
}

module.exports = { login };
