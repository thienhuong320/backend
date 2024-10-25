const connection = require("../config");

// get all user
const getAllUser = async (req, res) => {
    try {
        const data = await connection.query('SELECT * FROM user');
        res.status(200).send({
            success: true,
            message: 'Get all user success',
            data: data[0]
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get by id user
const getUserById = async (req, res) => {
    const { id } = req.params;
    const data = await connection.query(`SELECT * FROM user WHERE user_id = ${id}`);
    res.status(200).send({ data: data[0] });
}

// create user
const createUser = async (req, res) => {
  try {
    const { user_name, email, password, fullname, phone, dob } = req.body;
    const data = await connection.query(`INSERT INTO user (user_name, email, password, fullname, phone, dob) VALUES (?, ?, ?, ?, ?, ?) `, [user_name, email, password, fullname, phone, dob]);
    if(!data){
        return res.status(400).send({
            success: false,
            message: 'Create user failed'
        })
    }
    res.status(200).send({
        success: true,
        message: 'Create user success',
        data: data[0]
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
}

// update user
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        if(!id){
            return res.status(400).send({
                success: false,
                message: 'User id is required'
            })
        }
        const { user_name, email, password, fullname, phone, dob } = req.body;
        const data = await connection.query(`UPDATE user SET user_name = ?, email = ?, password = ?, fullname = ?, phone = ?, dob = ? WHERE user_id = ?`, [user_name, email, password, fullname, phone, dob, id]);
        if(!data){
            return res.status(400).send({
                success: false,
                message: 'Update user failed'
            })
        }
        res.status(200).send({
            success: true,
            message: 'Update user success',
            data: data[0]
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
}

// delete user
const deleteUser = async (req, res) => {
   
    try {
        const { id } = req.params;
        const data = await connection.query(`DELETE FROM user WHERE user_id = ?`, [id]);
        if(!data){
            return res.status(400).send({
                success: false,
                message: 'Delete user failed'
            })
        }
        res.status(200).send({
            success: true,
            message: 'Delete user success',
            data: data[0]
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
}

// login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await connection.query(`SELECT * FROM user WHERE email = ? AND password = ?`, [email, password]);
        if(!data){
            return res.status(400).send({
                success: false,
                message: 'Login user failed'
            })
        }
        res.status(200).send({ data: data[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// register user
const registerUser = async (req, res) => {
    try {
        const { user_name, email, password, fullname } = req.body;
        const data = await connection.query(`INSERT INTO user (user_name, email, password, fullname) VALUES (?, ?, ?, ?)`, [user_name, email, password, fullname]);
        res.status(200).send({ data: data[0] });
        if(!data){
            return res.status(400).send({
                success: false,
                message: 'Register user failed'
            })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
    registerUser
}