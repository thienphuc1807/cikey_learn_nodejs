const connection = require("../config/database");
const {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
} = require("../services/CRUDServices");

const getHomePage = async (req, res) => {
    let rows = await getAllUsers();
    return res.render("home", { listUser: rows });
};

const getCreateUserPage = (req, res) => {
    return res.render("createUser");
};
const getUpdateUserPage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    return res.render("updateUser", { userDetail: user });
};

// add new user into database
const addNewUser = async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;

    // connection.query(
    //     `INSERT INTO Users (email,name,city)
    //     VALUES (?, ?, ?);`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //     }
    // );

    const promisePool = connection.promise();
    const [rows, fields] = await promisePool.query(
        `INSERT INTO Users (email,name,city) VALUES (?, ?, ?)`,
        [email, name, city]
    );
    return res.send("Success");
};

const updateUser = async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;
    let userID = req.body.userID;

    await updateUserById(name, email, city, userID);

    res.redirect("/");
};

const getDeleteUserPage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    return res.render("deleteUser", { userDelete: user });
};

const deleteUser = async (req, res) => {
    const deleteId = req.body.userID;
    await deleteUserById(deleteId);
    res.redirect("/");
};

module.exports = {
    getHomePage,
    addNewUser,
    getCreateUserPage,
    getUpdateUserPage,
    updateUser,
    getDeleteUserPage,
    deleteUser,
};
