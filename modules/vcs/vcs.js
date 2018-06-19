function vcs(message, prefix, client) {
    if(message.content.startsWith(prefix + "vcs")) {
        if(message.channel.type === "dm") return;
        
        if(!message.guild.channels.exists("name", "haria-vcs")) {
            message.channel.send("Je n'ai pas trouvé de channel nommé `haria-vcs`. Faites "+ prefix +"vcsadd pour en créer un.");
            return;
        } else {
            if(message.channel.name !== "haria-vcs") {
                return;
            } else {
                var message_vcs = message.content.substr(6);
                
                client.channels.findAll("name", "haria-vcs").map(c => c.send({
                    embed: {
                        color: Math.floor(Math.random() * 16777214) + 1,
                        thumbnail: { 
                            url: message.author.avatarURL 
                        }, 
                        fields: [{
                            name: `${message.author.tag} (${message.author.id})`,
                            value: message_vcs
                        },
                        { 
                            name: ":gear: -> Serveur :",
                            value: message.guild.name
                        }],
                        timestamp: new Date(), 
                        footer: { 
                            text: "vcs"
                        }
                    } 
                }))
                
                message.delete(message_vcs);
            }
        }
    }
}

module.exports = vcs;
