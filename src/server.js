require("dotenv").config();
const express = require("express"); // common js
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); // app express
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME || "localhost";

// console.log(process.env);

connection.query("SELECT * FROM Users u", function (err, results, fields) {
    console.log(results); // results contains rows returned by server
});

// config req.body
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// config template engine and static files
configViewEngine(app);

// routes
app.use("/", webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
