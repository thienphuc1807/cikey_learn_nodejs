const express = require("express");
const router = express.Router();
const { getPage, getHomePage } = require("../controllers/homeController");

// router.method(path,handler)
router.get("/", getPage);
router.get("/home", getHomePage);

module.exports = router;
