function say(message, bot) {
    if (message.content.startsWith("h$say")) {
        var msg = message.content.substr(6);
        message.delete(message.author)
        message.channel.send(msg);
    }};
module.exports = say;
