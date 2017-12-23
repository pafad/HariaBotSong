function botconnected (message, bot) {
	if(message.content === "h$botconnected") {
		if(message.author.id === "300896265078571009") {
			message.author.send("`Je suis connecté sur ces serveurs :\n`")
			.then(m => {
				bot.guilds.map(g => {
					message.author.send("\n```" + g.name + "```"); 
				});
			})
			.catch(err => {
				console.log(err);
			});
		} else {
			message.channel.send({
				embed: {
					color: 0xFF0000,
					description: "Erreur\n:x:Vous avez pas les permissions nécessaires ou il y a que le développeur qui à accès à la commande. Pour voir ou le bot est connecté, demander sur le serveur officiel. Merci."
				}
			});
		}
	}
}

module.exports = botconnected;
