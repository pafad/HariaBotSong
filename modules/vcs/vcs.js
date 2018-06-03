function vcs(message, bot) {
    if(message.content === "h$vcs") {
        if(message.channel.type === "dm") return;
            if(!message.guild.channels.exists("name", "vcs")) {
                message.channel.send("je n'ai pas trouvé de channel nommé `vcs` fait h$vcsadd pour en créer un.")
                return;
            } else {
                if(message.channel.name !== "vcs") {
                    return;
                } else {
                    bot.channels.findAll("name", "vcs").map(c => c.send({
                        embed: {
                            color: Math.floor(Math.random() * 16777214) + 1,
                            thumbnail: { 
                                url: message.author.avatarURL 
                            }, 
                            fields: [{
                                name: `${message.author.tag}(${message.author.id})`, 
                                value: message.content.substr(5)
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
