const express = require("express");
const router = express.Router();
const {
    getHomePage,
    addNewUser,
    getCreateUserPage,
    getUpdateUserPage,
    updateUser,
    getDeleteUserPage,
    deleteUser
} = require("../controllers/homeController");

// router.method(path,handler)
router.get("/", getHomePage);
router.get("/create", getCreateUserPage);
router.get("/update/:id", getUpdateUserPage);
router.get("/delete/:id", getDeleteUserPage);
router.post("/create-new-user", addNewUser);
router.post("/update-user", updateUser);
router.post("/delete-user", deleteUser);

module.exports = router;
