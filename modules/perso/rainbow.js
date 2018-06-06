function rainbowcolor(message, prefix, client) {
	if (message.content.startsWith(prefix + "rainbow")) {
		message.channel.send({
			embed: {
				color: 0xFF0000,
				description: ":floppy_disk: Demande de Rainbow envoyé à l'équipe dev d'HariaBotSong™ !"
			}
		})
		//support du bot
		client.users.get('306119836503900161').send(`**Demande Rainbow :**\nId de l'utilisateur : ${message.author.id}\nPseudo de la personne : @${message.author.username}\nDiscrimiminateur : #${message.author.discriminator}\nSur le serveur : ${message.guild.name}\nID du serveur : ${message.guild.id}\nDans le salon : #${message.channel.name}`);
		client.users.get('300896265078571009').send(`**Demande Rainbow :**\nId de l'utilisateur : ${message.author.id}\nPseudo de la personne : @${message.author.username}\nDiscrimiminateur : #${message.author.discriminator}\nSur le serveur : ${message.guild.name}\nID du serveur : ${message.guild.id}\nDans le salon : #${message.channel.name}`)
		client.users.get('130979396134633472').send(`**Demande Rainbow :**\nId de l'utilisateur : ${message.author.id}\nPseudo de la personne : @${message.author.username}\nDiscrimiminateur : #${message.author.discriminator}\nSur le serveur : ${message.guild.name}\nID du serveur : ${message.guild.id}\nDans le salon : #${message.channel.name}`)
		client.users.get('283144121718276096').send(`**Demande Rainbow :**\nId de l'utilisateur : ${message.author.id}\nPseudo de la personne : @${message.author.username}\nDiscrimiminateur : #${message.author.discriminator}\nSur le serveur : ${message.guild.name}\nID du serveur : ${message.guild.id}\nDans le salon : #${message.channel.name}`)
	}
}

module.exports = rainbowcolor;