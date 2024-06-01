const Koders = require("../models/koders.model");

async function create(koderData) {
  const newKoder = await Koders.create(koderData);
  return newKoder;
}

async function getAll() {
  const allKoders = await Koders.find({});
  return allKoders;
}

async function getById(id) {
  const koder = await Koders.findById(id);
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
