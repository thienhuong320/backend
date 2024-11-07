const express = require('express');
const { getAllGames, getGameById, createGame, updateGame, deleteGame, getUehReview } = require('../controllers/gamesController');
const router = express.Router();

// get all games
router.get('/getall', getAllGames);

router.get('/', getUehReview);
// get game by id
router.get('/get/:id', getGameById);

// create game
router.post('/create', createGame);

// update game
router.put('/update/:id', updateGame);

// delete game
router.delete('/delete/:id', deleteGame);

module.exports = router;