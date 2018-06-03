function vcs(message, bot) {
    if(message.content === "h$vcs") {
        if(message.channel.type === "dm") return;
            if(!message.guild.channels.exists("name", "haria-vcs")) {
                message.channel.send("je n'ai pas trouvé de channel nommé `haria-vcs` fait h$vcsadd pour en créer un.")
                return;
            } else {
                if(message.channel.name !== "haria-vcs") {
                    return;
                } else {
                    bot.channels.findAll("name", "haria-vcs").map(c => c.send({
                        embed: {
                            color: Math.floor(Math.random() * 16777214) + 1,
                            thumbnail: { 
                                url: message.author.avatarURL 
                            }, 
                            fields: [{
                                name: `${message.author.tag} (${message.author.id})`, 
                                value: message.content.substr(7)
                            },
                            { 
                                name: ":gear: -> Serveur:",
                                value: message.guild.name 
                            }],
                            timestamp: new Date(), 
                            footer: { 
                                text: "vcs"
                            } 
                        } 
                    }))
                }
            }
    }
}

module.exports = vcs;
