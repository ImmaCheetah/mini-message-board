#! /usr/bin/env node
const { Client } = require("pg");
require("dotenv").config();
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };


const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (25),
  message VARCHAR (300),
  added VARCHAR (60)
);

INSERT INTO messages (username, message, added) 
VALUES
  ('Sava', 'Into the void', '${new Date().toLocaleString("en-US", options)}'),
  ('Gorlami', 'A river there chief', '${new Date().toLocaleString("en-US", options)}');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.POOL_PORT}/${process.env.DB}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
