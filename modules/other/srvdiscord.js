function srvdiscord(message, bot) {
	if (message.content === "h$discord") {
		message.channel.send({
			embed: {
				color: 0xFF0000,
				title: "Cette commande te permet de me rejoindre : https://discord.gg/u9P2tpQ"
			}
		});
	}
}

module.exports = srvdiscord;