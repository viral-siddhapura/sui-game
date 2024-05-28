const Card = require("../models/card");

// Get all cards
exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find().populate("user");
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new card
exports.createCard = async (req, res) => {
  const card = new Card({
    name: req.body.name,
    type: req.body.type,
    power: req.body.power,
    description: req.body.description,
    hp: req.body.hp,
    level: req.body.level,
    speed: req.body.speed,
    stamina: req.body.stamina,
    theme: req.body.theme,
    user: req.body.user,
  });

  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing card
exports.updateCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    card.name = req.body.name || card.name;
    card.type = req.body.type || card.type;
    card.power = req.body.power || card.power;
    card.description = req.body.description || card.description;
    card.hp = req.body.hp || card.hp;
    card.level = req.body.level || card.level;
    card.speed = req.body.speed || card.speed;
    card.stamina = req.body.stamina || card.stamina;
    card.theme = req.body.theme || card.theme;
    card.user = req.body.user || card.user;
    const updatedCard = await card.save();
    res.json(updatedCard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
