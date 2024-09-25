const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 2
  }
];

indexRouter.get('/', (req, res) => {
  res.render('index', {messages: messages})
})

indexRouter.get('/new', (req, res) => {
  res.render('form')
})

indexRouter.get('/message/:id', (req, res) => {
  res.render('message')
})

indexRouter.post('/new', (req, res) => {
  messages.push({ text: req.body.message, user: req.body.name, added: new Date() });

  res.redirect('/')
})

module.exports = indexRouter;