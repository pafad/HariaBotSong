function botconnected(message, prefix, client) {
	if(message.content.startsWith(prefix + "botconnected")) {
		if(message.author.id === "300896265078571009") {
			message.channel.send({
				embed: {
					color: 0xFF0000,
					description: ":envelope_with_arrow: J'ai envoyé en mp la liste des serveurs auquel j'y suis !"
				}
			})
			message.author.send("__**Je suis sur ces serveurs :**__")
			.then(m => {
				let index = 0;
				client.guilds.map(g => { message.author.send(`**${++index} -** ${g.name}`) }).join('\n');
			})
			.catch(err => {
				console.log(err);
			});
		} else {
			message.channel.send({
				embed: {
					color: 0xFF0000,
					description: "Erreur\n:x: Vous avez pas les permissions nécessaires ou il y a que le développeur qui à accès à la commande. Pour voir ou le bot est connecté, demander sur le serveur officiel. Merci."
				}
			});
		}
	}
}

module.exports = botconnected;