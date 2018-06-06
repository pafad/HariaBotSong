function annonce(message, prefix, client) {
	if(message.content.startsWith(prefix + "annonce")) {
		var messageactu = message.content.substr(9);

		message.channel.send("Hey @everyone, " + messageactu);
		message.delete(messageactu);
	}
}

module.exports = annonce;