const connection = require("../config/database");

const getAllUsers = async () => {
    const promisePool = connection.promise();
    const [rows, fields] = await promisePool.query(`SELECT * FROM Users u`);
    return rows;
};

const getUserById = async (userId) => {
    const promisePool = connection.promise();
    const [rows, fields] = await promisePool.query(
        "SELECT * FROM Users u WHERE id = ?",
        [userId]
    );
    console.log(rows);
    let user = rows && rows.length > 0 ? rows[0] : {};
    return user;
};

module.exports = {
    getAllUsers,
    getUserById,
};
