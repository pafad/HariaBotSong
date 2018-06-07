function helpaudio(message, prefix, client) {
	if (message.content.startsWith(prefix + "audiohelp")) {
		message.channel.send({
			embed: {
				color: 0xFF0000,
				description:":envelope_with_arrow: Aide (Help) envoyé en mp !"
			}
		});

		message.author.send({
			embed: {
				footer: {
					text: "Par !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨",
					icon_url: "https://cdn.discordapp.com/avatars/300896265078571009/599f13a95e220e4e24e16480d6635648.png?size=2048"
				},
				color: 0xFF0000,
				description: "**[Commandes audio :]**\n\n" +
				":white_check_mark: "+ prefix +"playyt <recherche> ou "+ prefix +"playyt <URL vidéo YouTube> ou "+ prefix +"playyt <URL playlist YouTube> : Pour ajouter une musique recherché ou l'URL de la vidéo ou la playlist, met le bot dans un canal vocal et met en lecture la musique.\n" +
				":white_check_mark: "+ prefix +"skip : Pour arrêter la musique en cours de lecture et de passer à la suivante.\n" +
				":white_check_mark: "+ prefix +"stop : Pour arrêter la musique en cours, efface la file d'attente (s'il y en a) et quitte le canal vocal.\n" +
				":white_check_mark: "+ prefix +"volume ou "+ prefix +"volume <0, 5> : Affiche le volume actuel ou régler le volume entre 0 et 5.\n" +
				":white_check_mark: "+ prefix +"np : Affiche la musique en cours de lecture.\n" +
				":white_check_mark: "+ prefix +"queue :  Pour afficher la/les musique(s) qui est/sont dans la file d'attente.\n" +
				":white_check_mark: "+ prefix +"pause : Pour mettre la musique en cours de lecture en pause.\n" +
				":white_check_mark: "+ prefix +"resume : Pour remettre la musique qui était en pause de nouveau en lecture."
			}
		});
	}

	if (message.content.startsWith(prefix + "audioherehelp")) {
		message.channel.send({
			embed: {
				footer: {
					text: "Par !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨",
					icon_url: "https://cdn.discordapp.com/avatars/300896265078571009/599f13a95e220e4e24e16480d6635648.png?size=2048"
				},
				color: 0xFF0000,
				description: "**[Commandes audio :]**\n\n" +
				":white_check_mark: "+ prefix +"playyt <recherche> ou "+ prefix +"playyt <URL vidéo YouTube> ou "+ prefix +"playyt <URL playlist YouTube> : Pour ajouter une musique recherché ou l'URL de la vidéo ou la playlist, met le bot dans un canal vocal et met en lecture la musique.\n" +
				":white_check_mark: "+ prefix +"skip : Pour arrêter la musique en cours de lecture et de passer à la suivante.\n" +
				":white_check_mark: "+ prefix +"stop : Pour arrêter la musique en cours, efface la file d'attente (s'il y en a) et quitte le canal vocal.\n" +
				":white_check_mark: "+ prefix +"volume ou "+ prefix +"volume <0, 5> : Affiche le volume actuel ou régler le volume entre 0 et 5.\n" +
				":white_check_mark: "+ prefix +"np : Affiche la musique en cours de lecture.\n" +
				":white_check_mark: "+ prefix +"queue :  Pour afficher la/les musique(s) qui est/sont dans la file d'attente.\n" +
				":white_check_mark: "+ prefix +"pause : Pour mettre la musique en cours de lecture en pause.\n" +
				":white_check_mark: "+ prefix +"resume : Pour remettre la musique qui était en pause de nouveau en lecture."
			}
		});
	}
}

module.exports = helpaudio;
