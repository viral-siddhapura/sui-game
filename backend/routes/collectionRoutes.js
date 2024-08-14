const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

router.post('/', collectionController.createCollection);
router.get('/', collectionController.getCollections);

module.exports = router;
