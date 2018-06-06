function mute(message, prefix, client) {
	if(message.content.startsWith(prefix + "mute")) {
		// ---- Les droits nécéssaire à la commande ---- //
		let myrole = message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS"); // Récupération des droits nécéssaires du bot
		let yourole = message.guild.member(message.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS"); // Récupération des droits nécéssaires du membre

		if (!myrole) { 
			return message.author.send("Je n'ai pas les permissions nécessaires pour mute/démute un utilisateur");
		}

		if (!yourole) {
			return message.author.send("Vous n'avez pas les permissions nécessaires");
		}

		let muteRole = client.guilds.get(message.guild.id).roles.find("name", "Silence");
		var logs = message.guild.channels.find("name", "mod-log");
		var bienv = message.guild.channels.find("name", "general");
		// ---- Pour les malins ---- //
		var report = message.member.id;
		if(!message.mentions.users.first()) return message.channel.send("La commande est : " + prefix + "mute + @<utilisateur> + <raison>");
		if(!muteRole) return message.reply("Il n'y a pas de rôle de mute.").catch(console.error);
		var member = message.mentions.users.first();
		var reason = message.content.split(" ").slice(2).join(" ");
		if(!reason) reason = "Raison non disponible";
		if(message.mentions.users.size < 1) return message.reply("Vous devez mentionner quelqu'un pour le mute.").catch(console.error);

		if (message.guild.member(member).roles.has(muteRole.id)) {
			message.guild.member(member).removeRole(muteRole).then(() => {
				message.channel.send("L'utilisateur " + member + " a été démute pour la raison suivante : " + reason);
			});
		} else {
			message.guild.member(member).addRole(muteRole).then(() => {
				message.channel.send("L'utilisateur " + member + " a été mute pour la raison suivante : " + reason);
			});
		}

		logs.send({
            embed: {
                title: "Gestion des bans/kicks/mute",
                color: 0xFF0000,
                fields: [{
                    name: '_ _',
                    value: '_ _'
                },{
                    name: "Mute de " + member.tag + " par " + message.author.tag,
                    value: "Raison : " + reason
                }]
            }
        });
	}
}

module.exports = mute;