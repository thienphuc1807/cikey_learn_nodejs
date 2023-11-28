require("dotenv").config();
const express = require("express"); // common js
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
// get the client
const mysql = require("mysql2");

const app = express(); // app express
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME || "localhost";

// console.log(process.env);

// create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "123456",
    database: "hoidanit",
});

connection.query("SELECT * FROM Users u", function (err, results, fields) {
    console.log(results); // results contains rows returned by server
});

// config template engine and static files
configViewEngine(app);

// routes
app.use("/", webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
