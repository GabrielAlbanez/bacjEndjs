//arquivo de conexão com o banco
const mysql = require('mysql2/promise')
require('dotenv').config();


console.log(process.env.DB_PASSWORD)

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})



module.exports = connection