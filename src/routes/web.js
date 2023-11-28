const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World by from CiKey!");
});

router.get("/home", (req, res) => {
    res.render("home");
});

module.exports = router;
