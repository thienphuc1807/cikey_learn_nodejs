const getPage = (req, res) => {
    res.send("Hello World by from CiKey!");
};

const getHomePage = (req, res) => {
    res.render("home");
};

module.exports = {
    getHomePage,
    getPage,
};
