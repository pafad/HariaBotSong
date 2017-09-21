function botmessage(message, bot) {
	if(message.content === "h$botmessage") {
		if(message.author.id === "300896265078571009") {
			var servers = message.content.substr(9);
			var serv = bot.guilds.array();
			var text = message.content.substr(12);

			for(i=0; i<serv.length; i++) {
				serv[i].channels.find("type", "text").send({
					embed: {
						color: 0xFF0000,
						description: text
					}
				});
				message.delete(servers);
			}
		}
	} else {
		message.channel.send({
			embed: {
				color: 0xFF0000,
				description: "Erreur\n:x:Vous avez pas les permissions nécessaires ou il y a que le développeur qui à accès à la commande. Pour voir ou le bot est connecté, demander sur le serveur officiel. Merci."
			}
		});
	}
}

module.exports = botmessage;