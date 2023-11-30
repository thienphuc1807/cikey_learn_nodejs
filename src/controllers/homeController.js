const connection = require("../config/database");

const getHomePage = (req, res) => {
    return res.render("home");
};

const getCreateUserPage = (req, res) => {
    return res.render("createUser");
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
    res.send("Success");
};

module.exports = {
    getHomePage,
    addNewUser,
    getCreateUserPage,
};
