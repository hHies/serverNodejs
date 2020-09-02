const { Schema, model } = require("mongoose");

const schema = new Schema({
  data: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = model("Editor", schema);
