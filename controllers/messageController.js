const { v4: uuidv4 } = require('uuid');
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };

const messages = [
    {
      text: "I am looking into the void",
      user: "Sava",
      added: new Date().toLocaleString("en-US", options),
      id: uuidv4()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date().toLocaleString("en-US", options),
      id: uuidv4()
    }
  ];

function getIndex(req, res) {
    res.render('index', {messages: messages, title: 'Message Board'})
}

function getForm(req, res) {
    res.render('form', {title: 'New Message'})
}

function getMessage(req, res) {
    res.render('message', {messages: messages, param: req.params, title: 'Message'})
}

function createMessage(req, res) {
    messages.push({ text: req.body.message, user: req.body.name, added: new Date().toLocaleString("en-US", options), id: uuidv4() });

    res.redirect('/')
}

module.exports = {getIndex, getForm, getMessage, createMessage};
