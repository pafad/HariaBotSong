function helpici(message, bot){
if (message.content === `h$helpici`) {
    message.channel.send({embed:{footer:{text: "By Hariamane",icon_url: "https://cdn.discordapp.com/avatars/300896265078571009/853decbb9091b9a045c198c68e4866eb.png?size=128"},color: 0xFF0000,
            description: 
            "**Commandes utils :**\n\n" +
					 "**Commandes utils :**\n\n" +
					":white_check_mark:h$annonce : Permet de faire un annonce dans son propre serveur.\n" +
					":white_check_mark:h$afk : si vous êtes indisponible.\n"+
					":white_check_mark:h$botmessage : Cette commande est réservé au développeur.\n" +
					":white_check_mark:h$join : Cette commande te permet d'ajouter ce bot dans ton serveur.\n" +
					":white_check_mark:h$discord : Cette commande te permet de me rejoindre.\n" +
					":white_check_mark:h$support : Cette commande te permet de contacter le support technique du bot.\n\n" +
					"**Commandes jeux :**\n\n" +
					":white_check_mark:h$ping : Renvoie pong avec le temps écoulé en ms (millisecondes).\n\n" +
					"**Autres commandes :**\n\n"+
					":x:h$mp : Envoyer un message privé a quelqu'un.\n" +
					":white_check_mark:h$Rainbow : Demandez un rainbow pour son serveur.\n" +
					":white_check_mark:h$say : Faire parler le bot.\n" +
					":white_check_mark:h$botconnected : Pour savoir si le bot est connecté.\n" +
					":white_check_mark:h$ping : Renvoie pong avec le temps écoulé en ms (millisecondes).\n\n" +
					"**Commandes modérateur :**\n\n" +
					":white_check_mark:h$ban : Cette commande c'est pour ban un utilisateur.\n" +
					":white_check_mark:h$kick : Cette commande c'est pour kicker un utilisateur.\n" +
					":x:h$mute : Cette commande c'est pour mute les gens en texte.\n" +
					":white_check_mark:h$purge : Cette commande c'est pour effacers des messages en un coup en mettant la valeurs.\n\n" +
					"**Commandes radio :**\n\n" +
					":white_check_mark:h$webradioplay <flux_radio> : Pour écouter de la radio.\n" +
					":white_check_mark:h$webradiostop : Pour stopper la radio.\n\n" +
					"**Commandes audio :**\n\n" +
					":white_check_mark:h$helpaudio: Listes des commandes audio (MP).\n" +
					":white_check_mark:h$helpaudioici: Listes des commandes audio (serveur)."
            }
        });
    }
}
module.exports = helpici;
