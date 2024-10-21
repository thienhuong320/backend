const express = require('express');
const { getAllAdmin, getAdminById, createAdmin, updateAdmin, deleteAdmin } = require('../controllers/adminController');
const router = express.Router();

// get all admin
router.get('/getall', getAllAdmin);


// get by id admin
router.get('/get/:id', getAdminById);


// create admin
router.post('/create', createAdmin);

// update admin
router.put('/update/:id', updateAdmin);

// delete admin
router.delete('/delete/:id', deleteAdmin);
module.exports = router;