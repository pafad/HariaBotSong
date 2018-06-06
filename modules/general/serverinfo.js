function srvinfo(message, prefix, client) {
	if(message.content.startsWith(prefix + "srvinfo")) {
		console.log("Commande exécuté : srvinfo | Serveur : " + message.guild.name);

		var guildId = message.guild.id;
		var guildInfo = client.guilds.get(guildId);
		var guildCreatedAt = new Date(guildInfo.createdAt);
		var members_online = message.guild.members.filter(m => m.presence.status === "online").size;
		var members_dnd = message.guild.members.filter(m => m.presence.status === "dnd").size;
		var members_offline = message.guild.members.filter(m => m.presence.status === "offline").size;
		var members_idle = message.guild.members.filter(m => m.presence.status === "idle").size;

		message.channel.send({
			embed: {
				color: 0x00FFBF,
				title: "Infos d'un serveur Discord",
				description: "Infos sur le serveur " + guildInfo.name,
				thumbnail: {
					url: guildInfo.iconURL
				},
				fields: [{
					name: "Nom du serveur",
					value: "`" + guildInfo.name + "`",
					inline: true
				},{
					name: "ID du serveur",
					value: "`" + guildId + "`",
					inline: true
				},{
					name: "Région du serveur",
					value: guildInfo.region,
					inline: true
				},{
					name: "Nombre d'utilisateurs",
					value: guildInfo.memberCount,
					inline: true
				},{
					name: "Date de création du serveur",
					value: guildCreatedAt.getDate() + "/" + (guildCreatedAt.getMonth() + 1) + "/" + guildCreatedAt.getFullYear() + " à " + guildCreatedAt.getHours() + ":" + guildCreatedAt.getMinutes() + ":" + guildCreatedAt.getSeconds(),
					inline: true
				},{
					name: "Propriétaire du serveur",
					value: "`" + guildInfo.owner.user.username + "#" + guildInfo.owner.user.discriminator + "`",
					inline: true
				},{
					name: "Statut des utilisateurs",
					value: "En ligne : " + members_online + "\n" +
					"Absent : " + members_idle + "\n" +
					"Occupé : " + members_dnd + "\n" +
					"Hors ligne/Invisible : " + members_offline
				}],
				footer: {
					icon_url: client.user.avatarURL,
					text: "Infos d'un serveur Discord. Développé par !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨"
				}
			}
		})
	}
}

module.exports = srvinfo;