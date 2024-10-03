const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM message_board");
    return rows;
}


module.exports = {
    getAllMessages,
  };