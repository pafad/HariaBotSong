function webradio(message, bot, connection, broadcast) {
    if(message.content.startsWith("h$webradioplay")) {
        var fluxwebradio = message.content.substr(15);
        message.member.voiceChannel.join()
        .then(connection => {
            require("http").get(fluxwebradio, (res) => {
                connection.playStream(res);
                message.channel.send("Lecture du flux webradio suivante :\n```" + fluxwebradio + "```\nBonne écoute !");
            });
        });
        client.user.setGame(fluxwebradio).then(ok => {
            console.log("Changement de jeu effectué !");
        });

        console.log("Commande exécuté : webradioplay");
    }

    if(message.content.startsWith("h$webradiostop")) {
        message.member.voiceChannel.leave();
        message.channel.send("Arrêt de la webradio. Merci de nous avoir écouté !");
        console.log("Commande exécuté : webradiostop");
    }
}

module.exports = webradio;
