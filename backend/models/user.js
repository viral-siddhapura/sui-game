const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
  walletAddress: { type: String },
  gameCoin: { type: Number, required: true, default: 100 },
  foodCoin: { type: Number, required: true, default: 200 },
  battleDeck: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
  lastLogin: { type: Number, required: true, default: Date.now() },
  // salt: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
