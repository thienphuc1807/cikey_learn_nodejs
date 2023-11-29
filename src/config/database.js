require("dotenv").config();
// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST, // string
    port: process.env.DB_PORT, // number
    user: process.env.DB_USER, // string
    password: process.env.DB_PASSWORD, // string
    database: process.env.DB_NAME, // string
});

module.exports = connection;
