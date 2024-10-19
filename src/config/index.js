const mysql = require('mysql2/promise');

const connection =  mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mambau2001',
    database: 'games_db',
  });

  module.exports = connection;