const {messages} = require('../db')

function seeMessage(req, res) {
    res.render('message.ejs', { messages: messages, position: req.params.id });
}

module.exports = seeMessage;