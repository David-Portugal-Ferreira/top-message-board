const { Router } = require("express");
const indexRouter = Router();
const messages = require('../db');
const getForm = require('../controllers/formController');
const addMessage = require('../controllers/addMessageController');
const seeMessage = require('../controllers/seeMessageController');
const indexController = require('../controllers/indexController');

indexRouter.get('/', indexController);
indexRouter.get('/new', getForm);
indexRouter.post('/new', addMessage);
indexRouter.get('/see-message/:id', seeMessage);

module.exports = indexRouter;