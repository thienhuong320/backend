const express = require('express');
const { getAllScore,  } = require('../controllers/scoreController');
const router = express.Router();

// get all score
router.get('/getall', getAllScore);

module.exports = router;