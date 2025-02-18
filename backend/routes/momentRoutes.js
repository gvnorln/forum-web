const express = require('express');
const router = express.Router();
const { getAllMoments } = require('../controllers/momentController');

router.get('/', getAllMoments);

module.exports = router;
