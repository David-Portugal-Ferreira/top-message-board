const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

function addMessageToArray(message) {
    messages.push({ text: message.text, user: message.user, added: new Date() })
}

module.exports = {messages, addMessageToArray};