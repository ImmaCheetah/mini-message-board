const { Router } = require("express");
const { v4: uuidv4 } = require('uuid');
const indexRouter = Router();

const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
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

indexRouter.get('/', (req, res) => {
  res.render('index', {messages: messages, title: 'Message Board'})
})

indexRouter.get('/new', (req, res) => {
  res.render('form', {title: 'New Message'})
})

indexRouter.get('/message/:id', (req, res) => {
  res.render('message', {messages: messages, param: req.params, title: 'Message'})
})

indexRouter.post('/new', (req, res) => {
  messages.push({ text: req.body.message, user: req.body.name, added: new Date().toLocaleString("en-US", options), id: uuidv4() });

  res.redirect('/')
})

module.exports = indexRouter;