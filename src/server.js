const express = require("express"); // common js
const path = require("path"); // common js
// import express from "express";  // es module
require("dotenv").config();

const app = express(); // app express
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME || "localhost";

// console.log(process.env);

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Khai báo routes
app.get("/", (req, res) => {
    res.send("Hello World by from CiKey!");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
