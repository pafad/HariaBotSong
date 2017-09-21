function annonce(message, bot) {
	if(message.content.startsWith("h$annonce")) {
		if(message.author.id === "300896265078571009") {
			var messageactu = message.content.substr(9);
			message.channel.send({
				embed: {
					color: 0xFF0000,
					title: "Hey @everyone, " + messageactu
				}
			});
			message.delete(messageactu);
		} else {
			message.channel.send({
				embed: {
					color: 0xFF0000,
					description: "Erreur\n:x:Vous avez pas les permissions nécessaires ou il y a que le développeur qui à accès à la commande. Pour faire une annonce, demander sur le serveur officiel. Merci."
				}
			});
		}
	}
}

module.exports = annonce;