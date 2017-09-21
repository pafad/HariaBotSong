function kick(message, bot) {
	if (message.content.startsWith("h$kick")) {
		// Easy way to get member object though mentions.
		var member = message.mentions.members.first();
		// Kick
		member.kick().then((member) => {
			// Successmessage
			message.channel.send(":wave: " + member.displayName + " à bien été kické :point_right:");
		}).catch(() => {
			// Failmessage
			message.channel.send("Accès refusé");
		});
	}
}

module.exports = kick;