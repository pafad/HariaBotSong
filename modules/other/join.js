function join(message, bot) {
	if (message.content === "h$join") {
		message.channel.send({
			embed: {
				color: 0xFF0000,
				title: "https://discordapp.com/oauth2/authorize?client_id=329551988222066689&scope=bot"
			}
		});
	}
}

module.exports = join;