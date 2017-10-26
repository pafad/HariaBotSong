function help(message, bot) {
	if (message.content === "h$helpaudio") {
		message.channel.send({embed:{ color: 0xFF0000, description:":envelope_with_arrow: Help envoyer en mp !"}})
	     message.author.send({embed:
				  {footer:{text: "By Hariamane",icon_url: "https://cdn.discordapp.com/avatars/300896265078571009/853decbb9091b9a045c198c68e4866eb.png?size=128"},
				  color: 0xFF0000, description: "**[Commandes audio :]**\n\n" +
				":white_check_mark:h$add : <recherche> ou h$add <URL vidéo> : Pour ajouter une musique recherché ou l'URL de la vidéo et met le bot dans un canal vocal.\n" +
				":white_check_mark:h$playyt : Pour mettre la musique en lecture.\n" +
				":white_check_mark:h$pause : Pour mettre la musique en cours de lecture en pause.\n" +
				":white_check_mark:h$resume : Pour remettre la musique qui était en pause de nouveau en lecture.\n" +
				":white_check_mark:h$next : Pour arrêter la musique en cours de lecture et de passer à la suivante.\n" +
				":white_check_mark:h$volume+ : Pour augmenter le volume de la musique en cours de lecture.\n" +
				":white_check_mark:h$volume- : Pour diminuer le volume de la musique en cours de lecture.\n" +
				":white_check_mark:h$time : Affiche le temps écoulé de la musique en cours de lecture.\n" +
				":white_check_mark:h$addlist : Pour ajouter une playlist YouTube.\n" +
				":white_check_mark:h$queue : Pour afficher la/les musique(s) qui est/sont dans la file d'attente." +
			}
		});
	}
