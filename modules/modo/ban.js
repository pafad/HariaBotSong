function ban(message, bot) {
	if (message.content.startsWith("h$ban")) {
		// Easy way to get member object though mentions.
		var member = message.mentions.members.first();
		if (message.mentionned)
		// Ban
		member.ban().then((member) => {
			// Successmessage
			message.channel.send({embed: { color: 0xFF0000, description:":wave: " + member.displayName + " a été ban du serveur :ballot_box_with_check:"}}).catch(console.erreur);
		}).catch(() => {
			// Failmessage
			message.channel.send({embed: { color: 0xFF0000, description:":x: **Erreur :** Vous n'avez pas les permissions !"}}).catch(console.erreur);
		});
	}
}

module.exports = ban;
