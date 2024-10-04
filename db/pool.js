require("dotenv").config();
const { Pool } = require("pg");

// module.exports = new Pool({
//   host: process.env.HOST, 
//   user: process.env.USER,
//   database: process.env.DB,
//   password: process.env.PASSWORD,
//   port: process.env.POOL_PORT // The default port
// });

// module.exports = new Pool({
//   connectionString: `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?sslmode=require`
// });

module.exports = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});