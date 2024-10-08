const db = require("../db/queries");

async function getIndex(req, res) {
    try {
        const messages = await db.getAllMessages();
        res.render('index', {messages: messages, title: 'Message Board'})
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

function getForm(req, res) {
    res.render('form', {title: 'New Message'})
}

async function getMessage(req, res) {
    try {
        const messages = await db.getAllMessages()
        res.render('message', {messages: messages, param: req.params, title: 'Message'})
    } catch (error) {
        console.log(error)
    }
}

async function createMessage(req, res) {
    try {
        const {name, message} = req.body;
        await db.insertMessage(name, message)
    } catch (error) {
        console.log(error)
    }

    res.redirect('/')
}

module.exports = {getIndex, getForm, getMessage, createMessage};
