const connection = require("../config");

// get all admin
const getAllAdmin = async (req, res) => {
  
    try {
        const data = await connection.query('SELECT * FROM admin');
        if(!data){
            return res.status(400).send({
                success: false,
                message: 'Get all admin failed'
            })
        }
        res.status(200).send({ data: data[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// get by id admin
const getAdminById = async (req, res) => {
   
    try {
        const { id } = req.params;
        const data = await connection.query(`SELECT * FROM admin WHERE admin_id = ${id}`);
        if(!data){
            return res.status(400).send({
                success: false,
                message: 'Get admin by id failed'
            })
        }
        res.status(200).send({ data: data[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// create admin
const createAdmin = async (req, res) => {
    try {
        const { user_name,  password } = req.body;
        const data = await connection.query(`INSERT INTO admin (user_name, password) VALUES (?, ?)`, [user_name, password]);
        if(!data){
            return res.status(400).send({
                success: false,
                message: 'Create admin failed'
            })
        }
        res.status(200).send({ message: 'Create admin success' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// update admin
const updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_name, password } = req.body;
        const data = await connection.query(`UPDATE admin SET user_name = ?, password = ? WHERE admin_id = ?`, [user_name, password, id]);
        if(!data){
            return res.status(400).send({
                success: false,
                message: 'Update admin failed'
            })
        }
        res.status(200).send({ message: 'Update admin success' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// delete admin
const deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await connection.query(`DELETE FROM admin WHERE admin_id = ?`, [id]);
        if(!data){
            return res.status(400).send({
                success: false,
                message: 'Delete admin failed'
            })
        }
        res.status(200).send({ message: 'Delete admin success' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    getAllAdmin,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin
}