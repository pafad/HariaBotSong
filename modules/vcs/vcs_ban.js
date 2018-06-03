function vcs_ban(message, bot) {
    if(message.content === "h$vcsban") {
        const request = require("request");
        const fs = require("fs");
        const superagent = require("superagent");
        
        var args = message.content.split(" ");

        if(message.author.id === "300896265078571009" || message.author.id === "130979396134633472") {
            var url = "https://api.myjson.com/bins/cdlz6";

            request(url, (err, res, body) => {
                console.log(args);
                console.log('Chargement ...');

                if(err || res.statusCode !== 200) return;
                console.log('Chargé avec succès !');

                var objet = JSON.parse(body);
                objet[args] = {};

                request({ url: url, method: 'PUT', json: objet});
                bot.channels.findAll('name', 'haria-vcs').map(c => c.send('', {
                    embed: {
                        color: Math.floor(Math.random() * 16777214) + 1,
                        fields: [{
                            name:':gear: -> Bannissement du vcs',
                            value:`${message.author.tag} a banni: ${args} du vcs`
                        },
                        {
                            name: `Depuis le serveur : ${message.guild.name}`,
                            value: ":gear: -> Raison : " + args[1]
                        }],
                        timestamp: new Date(),
                        footer: {
                            text: `vcs-ban`,
                        }
                    }
                }));
            })
        } else {
            message.channel.send("tu n'est pas un modérateur du vcs")
            return;
        }
    }
}

module.exports = vcs_ban;
