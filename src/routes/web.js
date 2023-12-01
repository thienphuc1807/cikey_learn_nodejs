const express = require("express");
const router = express.Router();
const {
    getHomePage,
    addNewUser,
    getCreateUserPage,
    getUpdateUserPage,
} = require("../controllers/homeController");

// router.method(path,handler)
router.get("/", getHomePage);
router.get("/create", getCreateUserPage);
router.get("/update/:id", getUpdateUserPage);
router.post("/create-new-user", addNewUser);

module.exports = router;
