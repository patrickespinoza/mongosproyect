const createError = require("http-errors");
const encrypt = require("../lib/encrypt");
const Generation = require("../models/generation.model");

async function create(generation) {
  const existingGeneration = await Generation.findOne({
    number: generation.number,
    program: generation.program,
  });

  if (existingGeneration) {
    throw createError(409, "generation already in use");
  }

  const newKoder = await Generation.create(generation);
  return newKoder;
}

async function getAll() {
  const allGenerationData = await Generation.find({});
  return allGenerationData;
}

async function deleteById(id) {
  const deleteGeneration = await Generation.findByIdAndDelete(id);

  if (!deleteGeneration) {
    throw createError(404, "generation not found");
  }

  return deleteGeneration;
}

async function updateById(id, updatedFields) {
  const updateGeneration = await Generation.findByIdAndUpdate(
    id,
    updatedFields,
    { new: true }
  );

  if (!updateGeneration) {
    throw createError(404, "generation not found");
  }

  return updateGeneration;
}

module.exports = {
  create,
  getAll,
  deleteById,
  updateById,
};
