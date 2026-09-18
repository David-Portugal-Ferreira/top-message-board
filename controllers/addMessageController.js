const addMessageToArray = require('../db')

function addMessage(req, res) {
    addMessageToArray(req.body);
    res.redirect('/');
}

module.exports = addMessage;