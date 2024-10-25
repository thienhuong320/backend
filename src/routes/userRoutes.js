const express = require('express');
const { getAllUser, getUserById, createUser, updateUser, deleteUser, loginUser, registerUser } = require('../controllers/userController');
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

// login user
router.post('/login', loginUser);

// register user
router.post('/register', registerUser);
module.exports = router;