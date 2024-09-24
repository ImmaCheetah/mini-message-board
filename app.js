require("dotenv").config();
const express = require('express');
const path = require("node:path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views/pages"));
app.set("view engine", "ejs");

const indexRouter = require('./routes/indexRouter')

app.use('/', indexRouter)
app.use('/new', indexRouter)

app.listen(process.env.PORT, () => console.log('App running on port', PORT))