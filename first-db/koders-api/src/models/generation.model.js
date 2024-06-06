const mongoose = require("mongoose");

const modelName = "generation";

const schema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
  program: {
    type: String,
    required: true,
    enum: ["js", "python", "ios", "android"],
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model(modelName, schema);
