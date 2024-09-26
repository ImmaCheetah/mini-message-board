const { Router } = require("express");
const indexRouter = Router();
const msgController = require('../controllers/messageController')

indexRouter.get('/', msgController.getIndex)

indexRouter.get('/new', msgController.getForm)

indexRouter.get('/message/:id', msgController.getMessage)

indexRouter.post('/new', msgController.createMessage)

module.exports = indexRouter;