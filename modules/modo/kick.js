function kick(message, prefix, client) {
    if(message.content.startsWith(prefix + "kick")) {
        // ---- Les droits nécéssaire à la commande ---- //
        let myrole = message.guild.member(client.user).hasPermission("KICK_MEMBERS"); // Récupération des droits nécéssaires du bot
        let yourole = message.guild.member(message.author).hasPermission("KICK_MEMBERS"); // Récupération des droits nécéssaires du membre

        if (!myrole) { 
            return message.author.send("Je n'ai pas les permissions nécessaires pour kicker un utilisateur");
        }

        if (!yourole) {
            return message.author.send("Vous n'avez pas les permissions nécessaires");
        }

        var logs = message.guild.channels.find("name", "mod-log");
        var bienv = message.guild.channels.find("name", "general");
        // ---- Pour les malins ---- //
        var report = message.member.id;
        if(!message.mentions.users.first()) return message.channel.send("La commande est : " + prefix + "kick + @<utilisateur> + <raison>");
        var member = message.mentions.users.first();
        var reason = message.content.split(" ").slice(2).join(" ");
        if(!reason) reason = "Raison non disponible";
        if(!message.guild.members.get(member.id).kickable) return message.channel.send("L'utilisateur ne peut pas être kick");
        message.guild.members.get(member.id).kick();
        logs.send({
            embed: {
                title: "Gestion des bans/kicks/mute",
                color: 0xFF0000,
                fields: [{
                    name: '_ _',
                    value: '_ _'
                },{
                    name: "Kick de " + member.tag + " par " + message.author.tag,
                    value: "Raison : " + reason
                }]
            }
        });
    }
}

module.exports = kick;