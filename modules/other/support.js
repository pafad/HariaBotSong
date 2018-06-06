function support(message, prefix, client) {
	if (message.content.startsWith(prefix + "support")) {
		if (client.guilds.get("345609318554533901").channels.find("name", "suggestion")) {
			var reporting = message.content.substr(10);
			var serveur_get = message.guild.name;
			var user_reporting = "@" + message.author.username + "#" + message.author.discriminator;

			client.guilds.get("345609318554533901").channels.find("name", "suggestion").send({
				embed: {
					color: 0xFAA02E,
					title: "Bug/Suggestion du bot HariaBotSong",
					description: "[" + user_reporting + "]()",
					fields: [{
						name: "_ _",
						value: "[" + reporting + "]()"
					},{
						name: "_ _",
						value: "Serveur : " + serveur_get
					}],
					footer: {
						icon_url: client.user.avatarURL,
						text: "Bug/Suggestion du bot HariaBotSong. Développé par !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨"
					}
				}
			});
		}
		else {
			message.reply("on dirait qu'il y a un souci. Soit le serveur n'existe pas/plus ou le canal textuel n'existe pas/plus.");
		}

		console.log("Commande exécuté : support | Serveur : " + message.guild.name);
	}
}

module.exports = support;