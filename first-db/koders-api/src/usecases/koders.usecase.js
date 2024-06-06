const createError = require("http-errors");
const encrypt = require("../lib/encrypt");
const Koders = require("../models/koders.model");

async function create(koderData) {
  const koderFound = await Koders.findOne({ email: koderData.email });

  if (koderFound) {
    // throw new Error("Email already in use");
    throw createError(409, "Email already use");
  }
  // con estos dos metodos lo incriptamos la de artiba salta lineal mas facil y la de abajo mas explicito
  koderData.password = await encrypt.encrypt(koderData.password);
  // const password = await encrypt.encrypt(koderData.password);
  // koderData.password = password;

  const newKoder = await Koders.create(koderData);
  return newKoder;
}

async function getAll() {
  const allKoders = await Koders.find().populate("generation");
  return allKoders;
}

async function getById(id) {
  const koder = await Koders.findById(id).populate("generation");
  return koder;
}

async function deleteById(id) {
  const deletekoder = await Koders.findByIdAndDelete(id);
  return deletekoder;
}

async function updateById(id, newKoderData) {
  const updateKoder = await Koders.findByIdAndUpdate(id, newKoderData, {
    new: true,
  });
  return updateKoder;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};
