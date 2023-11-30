const express = require("express");
const router = express.Router();
const { getHomePage } = require("../controllers/homeController");

// router.method(path,handler)
router.get("/", getHomePage);

module.exports = router;
