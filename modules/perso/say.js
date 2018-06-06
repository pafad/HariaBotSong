function say(message, prefix, client) {
	if (message.content.startsWith(prefix + "say")) {
		var msg = message.content.substr(6);
		message.delete(message.author);
		message.channel.send(msg);
	}
}

module.exports = say;