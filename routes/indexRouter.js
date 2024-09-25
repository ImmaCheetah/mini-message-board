const { Router } = require("express");
const { v4: uuidv4 } = require('uuid');
const indexRouter = Router();

const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const today  = new Date();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: today.toLocaleString("en-US", options),
    id: uuidv4()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: today.toLocaleString("en-US", options),
    id: uuidv4()
  }
];

indexRouter.get('/', (req, res) => {
  res.render('index', {messages: messages})
})

indexRouter.get('/new', (req, res) => {
  res.render('form')
})

indexRouter.get('/message/:id', (req, res) => {
  console.log("Params:", req.params);
  res.render('message', {messages: messages, param: req.params})
})

indexRouter.post('/new', (req, res) => {
  messages.push({ text: req.body.message, user: req.body.name, added: today.toLocaleString("en-US", options), id: uuidv4() });

  res.redirect('/')
})

module.exports = indexRouter;