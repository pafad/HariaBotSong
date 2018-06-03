function vcs_image(message, bot) {
    if(message.content === "h$vcsimage") {
        var args = message.content.split(" ");
        
        if(!message.guild.channels.exists("name", "vcs")) {
            message.channel.send("Je n'ai pas trouvé de channel nommé `vcs` fait h$vcsadd pour en créer un.");
            return;
        } else {
            if(message.channel.name !== "vcs") {
                return;
            } else {
                client.channels.findAll("name", "vcs").map(c => c.send({
                    embed: {
                        color: Math.floor(Math.random() * 16777214) + 1,  
                        thumbnail: { 
                            url: message.author.avatarURL 
                        }, 
                        image: {
                            url: message.content.substr(10)
                        },                                                              
                        fields:[{
                            name: ":gear: -> Serveur :",
                            value: message.guild.name
                        }],
                        name: `${message.author.tag}(${message.author.id})`,
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

module.exports = vcs_image;
