function webradio(message, prefix, client, connection, broadcast) {
    if(message.content.startsWith(prefix + "webradioplay")) {
        const ffmpeg = require("ffmpeg");
        const opusscript = require("opusscript");
        
        var fluxwebradio = message.content.substr(15);

        if(!fluxwebradio) {
            message.reply("Veuillez indiquer le flux de la webradio que vous souhaitez écouter ! **Exemple :** " + prefix + "webradioplay http://live-kiss.sharp-stream.com/kiss100.mp3");
        } else {
            message.member.voiceChannel.join()
            .then(connection => {
                require("http").get(fluxwebradio, (res) => {
                    connection.playStream(res);
                    message.channel.send({
                        embed: {
                            color: 0xFF0000,
                            title: "Lecture d'une webradio",
                            description: "Nous vous souhaitons une bonne écoute !",
                            fields: [{
                                name: "Bonne écoute de la webradio suivante",
                                value: ":radio: " + fluxwebradio
                            }],
                            footer: {
                                icon_url: client.user.avatarURL,
                                text: "Écoute d'une webradio développé par !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨"
                            }
                        }
                    });
                });
            });
        }
        console.log("Commande exécuté : webradioplay | Serveur : " + message.guild.name);
    }

    if(message.content.startsWith(prefix + "webradiostop")) {
        message.member.voiceChannel.leave();
        message.channel.send("Arrêt de la webradio. Merci de nous avoir écouté !");
        console.log("Commande exécuté : webradiostop | Serveur : " + message.guild.name);
    }
}

module.exports = webradio;