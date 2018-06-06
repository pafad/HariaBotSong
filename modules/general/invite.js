function invite(message, prefix, client) {
	if(message.content.startsWith(prefix + "join")) {
		message.reply("voici le lien pour m'ajouter sur votre serveur Discord : <https://discordapp.com/oauth2/authorize?client_id=329551988222066689&scope=bot&permissions=317942910>");

		console.log("Commande exécuté : join | Serveur : " + message.guild.name);
	}
}

module.exports = invite;