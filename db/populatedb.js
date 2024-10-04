#! /usr/bin/env node
const { Client } = require("pg");
const { argv } = require('node:process');
require("dotenv").config();
const formattedDate = require("../helper/dateFormatter");


const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (25),
  message VARCHAR (300),
  added VARCHAR (60)
);

INSERT INTO messages (username, message, added) 
VALUES
  ('Sava', 'Into the void', '${formattedDate()}'),
  ('Gorlami', 'A river there chief', '${formattedDate()}');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  console.log(client.connectionString)
  // const client = new Client({
  //   connectionString: `${argv[2]}?sslmode=require`,
  // });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
