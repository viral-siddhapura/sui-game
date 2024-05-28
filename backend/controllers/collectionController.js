// controllers/collectionController.js
const Collection = require('../models/collections');

exports.getCollections = async (req, res) => {
    try {
        const collections = await Collection.find().populate('cards');
        res.json(collections);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createCollection = async (req, res) => {
    const collection = new Collection({
        userId: req.body.userId,
        cards: req.body.cards
    });

    try {
        const newCollection = await collection.save();
        res.status(201).json(newCollection);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
