const {messages} = require('../db')

function indexController(req, res) {
    res.render('index.ejs', { messages: messages });
}

module.exports = indexController;