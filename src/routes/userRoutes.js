const express = require('express');
const { getAllUser, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

// get all user
router.get('/getall', getAllUser);
// get by id user
router.get('/get/:id', getUserById);

// create user
router.post('/create', createUser);

// update user
router.put('/update/:id', updateUser);

// delete user
router.delete('/delete/:id', deleteUser);

module.exports = router;