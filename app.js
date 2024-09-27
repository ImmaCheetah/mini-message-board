require("dotenv").config();
const express = require('express');
const path = require("node:path");
const CustomError = require('./errorHandling/CustomError')

const app = express();
const PORT = process.env.PORT || 3000;
const indexRouter = require('./routes/indexRouter')

app.set("views", path.join(__dirname, "views/pages"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "/public");
app.use(express.static(assetsPath));


app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)

app.use((req, res, next) => {
    next(
        new CustomError('Page Not Found', 'The page you are looking for does not exist', 404)
    )
})

app.use((err, req, res, next) => {
    res.status(err.statusCode).render('error', {error: err});
});

app.listen(process.env.PORT, () => console.log('App running on port', PORT))