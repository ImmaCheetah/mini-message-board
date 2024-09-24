require("dotenv").config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(process.env.PORT, () => console.log('App running on port', PORT))