function evalcmd(message, prefix, client, process.env.Discord_token || process.argv[2]) {
	if(message.content.startsWith(prefix + "eval")) {
		if(message.author.id !== "300896265078571009") return;

		var args = message.content.split(' ').slice(1);
		const token = process.env.Discord_token || process.argv[2];

		try {
			evaluer(client, message, args, token)
				.then(evaled => {
					if(evaled == 'bad') return;

					message.channel.send({
						embed: {
							color: 0x0000FF,
							title: "Résultat de l'éval",
							description: "_ _",
							fields: [{
								name: ":inbox_tray: **Entrée**",
								value: "```" + message.content.substr(7) + "```"
							},{
								name: ":outbox_tray: **Sortie**",
								value: `\`\`\`js\n${evaled.substr(0,1000)} ` + `...\`\`\`` //message.channel.sendCode("js", `${code}`)
							}],
							footer: {
								icon_url: client.user.avatarURL,
								text: "Résultat de l'éval. Développé par !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨"
							}
						}
					});
				})
		} catch (err) {
			message.channel.send({
				embed: {
					color: 0x0000FF,
					title: "Résultat de l'éval",
					description: "_ _",
					fields: [{
						name: ":inbox_tray: **Entrée**",
						value: "```" + message.content.substr(7) + "```"
					},{
						name: ":outbox_tray: **Sortie**",
						value: `\`\`\`js\n${err}\`\`\`` //message.channel.sendCode("js", `${err}`)
					}],
					footer: {
						icon_url: client.user.avatarURL,
						text: "Résultat de l'éval. Développé par !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨"
					}
				}
			})
		}

		async function evaluer(client, message, args, process.env.Discord_token || process.argv[2]) {
			try {
				const code = args.join(" ");
				let evaled = await eval(code);
				if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);
				let evalué = evaled.replace(process.env.Discord_token || process.argv[2], "Impossible de compléter éval en raison du token.");
				return evalué;
			} catch (e) {
				message.channel.send({
					embed: {
						color: 0x0000FF,
						title: "Résultat de l'éval",
						description: "_ _",
						fields: [{
							name: ":inbox_tray: **Entrée**",
							value: "```" + message.content.substr(7) + "```"
						},{
							name: ":outbox_tray: **Sortie**",
							value: `\`\`\`json\n${e}\`\`\`` //message.channel.sendCode("js", `${err}`)
						}],
						footer: {
							icon_url: client.user.avatarURL,
							text: "Résultat de l'éval. Développé par !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨"
						}
					}
				});
				return 'bad'
			}
		}
	}
}

module.exports = evalcmd;