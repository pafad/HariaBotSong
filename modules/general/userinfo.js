function userinfo(message, prefix, client) {
	if(message.content.startsWith(prefix + "userinfo")) {
        const nom = message.mentions.users.first();
        var ingame = message.mentions.users.first().presence.game;

        if(!nom){
            return message.reply("Ajouter un utilisateur ou juste "+ prefix +"userinfo @<utilisateur> pour vous");
        }

        if(!ingame) {
            var games = "Joue à rien pour le moment";
        } else {
            var games = "Joue à " + message.mentions.users.first().presence.game.name;
        }

        var date = ((nom.id / 4194304) + 1420070400000);
        var mydate = new Date(date);
        var mois = ["Jan", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"][mydate.getMonth()];
        var createdAt =  mydate.getDate() + ' ' + mois + ' ' + mydate.getFullYear() + ' ' + mydate.getHours() + ':' + mydate.getMinutes();

        var joindate = client.guilds.get(message.guild.id).members.get(nom.id).joinedTimestamp;
        var joinmydate = new Date(joindate);
        var joinmois = ["Jan", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"][joinmydate.getMonth()];
        var joinedAt =  joinmydate.getDate() + ' ' + joinmois + ' ' + joinmydate.getFullYear() + ' ' + joinmydate.getHours() + ':' + joinmydate.getMinutes();

        var roles = client.guilds.get(message.guild.id).members.get(nom.id).roles.array().toString();

        message.channel.send({
            embed: {
                color: 0xE74C3C,
                title: nom.username + "#" + nom.discriminator,
                description: games,
                thumbnail: {
                    url: nom.avatarURL
                },
                fields: [{
                    name: "À rejoint Discord le",
                    value: createdAt,
                    inline: true
                },{
                    name: "À rejoint ce serveur le",
                    value: joinedAt,
                    inline: true
                },{
                    name: "Rôles",
                    value: `${roles}`
                }],
                footer: {
                    text: "ID Utilisateur : " + nom.id
                }
            }
        });

        console.log("Commande exécuté : userinfo | Serveur : " + message.guild.name);
    }
}

module.exports = userinfo;