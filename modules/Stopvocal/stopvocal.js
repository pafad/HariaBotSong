 if(message.content.startsWith("h$webradiostop")) {
        message.member.voiceChannel.leave();
        message.channel.send({embed: { color: 0xFF0000, description:"Arrêt du vocal. Merci de nous avoir écouté !"}});
