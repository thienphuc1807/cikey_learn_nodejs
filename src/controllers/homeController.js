const getHomePage = (req, res) => {
    return res.render("home");
};

const addNewUser = (req, res) => {
    console.log(req.body);
    return res.send("add new user");
};

module.exports = {
    getHomePage,
    addNewUser,
};
