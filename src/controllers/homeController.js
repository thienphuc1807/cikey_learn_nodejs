const connection = require("../config/database");

const getHomePage = (req, res) => {
    return res.render("home");
};

// add new user into database
const addNewUser = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;
    connection.query(
        `INSERT INTO Users (email,name,city)
        VALUES (?, ?, ?);`,
        [email, name, city],
        function (err, results) {
            console.log(results);
        }
    );
    return res.send("Success");
};

module.exports = {
    getHomePage,
    addNewUser,
};
