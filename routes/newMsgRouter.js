const { Router } = require("express");

const newMsgRouter = Router();

newMsgRouter.get('/', (req, res) => {
  res.send('msgs')
})

module.exports = newMsgRouter;