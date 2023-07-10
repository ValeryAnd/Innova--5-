require('dotenv').config()
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

try {
  connection.connect((error) => {
    if (error) {
      throw error;
    }
    console.log('Conectado a la base de datos!');
  });
} catch (error) {
  console.log('El error de conexión es:', error);
}
module.exports = connection;