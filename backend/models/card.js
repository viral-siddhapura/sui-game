const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  power: { type: Number, required: true },
  description: { type: String, required: true },
  hp: { type: Number, required: true },
  level: { type: Number, required: true },
  speed: { type: Number, required: true },
  stamina: { type: Number, required: true },
  theme: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Card", cardSchema);
