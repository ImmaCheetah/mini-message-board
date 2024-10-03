const pool = require("./pool");
const formattedDate = require("../helper/dateFormatter")

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage(username, text) {
    await pool.query(`INSERT INTO messages (username, message, added) VALUES ($1, $2, $3)`, [username, text, formattedDate()])
}

module.exports = {
    getAllMessages,
    insertMessage,
  };