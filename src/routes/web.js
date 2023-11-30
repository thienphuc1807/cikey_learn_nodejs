const express = require("express");
const router = express.Router();
const { getHomePage, addNewUser } = require("../controllers/homeController");

// router.method(path,handler)
router.get("/", getHomePage);

router.post("/create-new-user", addNewUser);

module.exports = router;
