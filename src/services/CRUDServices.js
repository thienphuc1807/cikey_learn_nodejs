const connection = require("../config/database");

const getAllUsers = async () => {
    const promisePool = connection.promise();
    const [rows, fields] = await promisePool.query(`SELECT * FROM Users u`);
    return rows;
};

module.exports = {
    getAllUsers,
};
