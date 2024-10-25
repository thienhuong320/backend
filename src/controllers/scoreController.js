const connection = require('../config/index');

// get all score
const getAllScore = async (req, res) => {
    try {
        const data = await connection.query(` SELECT
    score.score_id,
    JSON_OBJECT(
        'user_id', user.user_id,
        'user_name', user.user_name,
        'email', user.email
    ) AS user_info,
    JSON_OBJECT(
        'game_id', games.game_id,
        'game_name', games.game_name,
        'genre', games.genre
    ) AS game_info
FROM score
INNER JOIN user ON score.user_id = user.user_id
INNER JOIN games ON score.game_id = games.game_id;`);
        res.status(200).send({ data: data[0] });
        if(!data){
            return res.status(400).send({
                success: false,
                message: 'Get all score failed'
            })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllScore
}