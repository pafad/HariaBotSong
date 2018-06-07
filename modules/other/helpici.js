function helpici(message, prefix, client) {
	if (message.content.startsWith(prefix + "herehelp")) {
		message.channel.send({
			embed: {
				footer: {
					text: "Par !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨",
					icon_url: "https://cdn.discordapp.com/avatars/300896265078571009/599f13a95e220e4e24e16480d6635648.png?size=2048"},
					color: 0xFF0000,
					description:
					"**Commandes utiles :**\n" +
					":white_check_mark:"+ prefix +"annonce : Permet de faire un annonce dans son propre serveur.\n" +
					":white_check_mark:"+ prefix +"afk : si vous êtes indisponible.\n"+
					":white_check_mark:"+ prefix +"botmessage : Cette commande est réservé au développeur.\n" +
					":white_check_mark:"+ prefix +"join : Cette commande te permet d'ajouter ce bot dans ton serveur.\n" +
					":white_check_mark:"+ prefix +"discord : Cette commande te permet de me rejoindre.\n" +
					":white_check_mark:"+ prefix +"support : Cette commande te permet de contacter le support technique du bot.\n\n" +
					"**Autres commandes :**\n" +
					":x:h$mp : Envoyer un message privé a quelqu'un.\n" +
					":white_check_mark:"+ prefix +"rainbow : Demandez un rainbow pour son serveur.\n" +
					":white_check_mark:"+ prefix +"say : Faire parler le bot.\n" +
					":white_check_mark:"+ prefix +"botconnected : Pour savoir si le bot est connecté.\n" +
					":white_check_mark:"+ prefix +"ping : Renvoie pong avec le temps écoulé en ms (millisecondes).\n" +
					":white_check_mark:"+ prefix +"vcs : Chat virtuelle pour comuniqué entre serveur sans pouvoir si rendre.\n\n" +
					"**Commandes modérateur :**\n" +
					":white_check_mark:"+ prefix +"ban : Cette commande c'est pour ban un utilisateur.\n" +
					":white_check_mark:"+ prefix +"kick : Cette commande c'est pour kicker un utilisateur.\n" +
					":white_check_mark:"+ prefix +"mute : Cette commande c'est pour mute les gens en texte.\n" +
					":white_check_mark:"+ prefix +"purge : Cette commande c'est pour effacers des messages en un coup en mettant la valeur.\n\n" +
					"**Commandes radio :**\n" +
					":white_check_mark:"+ prefix +"webradioplay <flux_radio> : Pour écouter de la radio.\n" +
					":white_check_mark:"+ prefix +"webradiostop : Pour stopper la radio.\n\n" +
					"**Commandes audio :**\n" +
					":white_check_mark:"+ prefix +"helpaudio : Listes des commandes audio (MP).\n" +
					":white_check_mark:"+ prefix +"helpaudioici : Listes des commandes audio (serveur)."
            }
        });
    }
}

module.exports = helpici;
