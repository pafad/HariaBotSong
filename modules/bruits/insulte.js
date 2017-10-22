function insulte(message, client) {
    const yt = require("ytdl-core");

    if(message.content.startsWith("h$tagueule")) {
        return new Promise((resolve, reject) => {
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel || voiceChannel.type !== "voice") return message.reply("Je ne peux pas me connecter à un canal vocal :(");
            voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
        });

        message.guild.voiceConnection.playStream(yt("https://www.youtube.com/watch?v=SxQrSMOm24I", { format: "bestaudio/best" }), { passes: 1 });
        message.member.voiceChannel.leave();
    }

    if(message.content.startsWith("h$nique ta mère") || message.content.startsWith("h$ntm") || message.content.startsWith("h$nik ta mère")) {
        return new Promise((resolve, reject) => {
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel || voiceChannel.type !== "voice") return message.reply("Je ne peux pas me connecter à un canal vocal :(");
            voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
        });

        message.guild.voiceConnection.playStream(yt("https://www.youtube.com/watch?v=xE1-rBVFjXc", { format: "bestaudio/best" }), { passes: 1 });
        message.member.voiceChannel.leave();
    }
}

module.exports = insulte;
