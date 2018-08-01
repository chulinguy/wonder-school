const mysql = require('mysql');
const { password } = require('./keys.js');

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    database: 'wonder_school',
    password,
  });
}

module.exports = connection;
