require("dotenv").config();
const express = require("express"); // common js
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const app = express(); // app express
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME || "localhost";

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
