function ban(message, prefix, client) {
    if(message.content.startsWith(prefix + "ban")) {
        // ---- Les droits nécéssaires à la commande ---- //
        let myrole = message.guild.member(client.user).hasPermission("KICK_MEMBERS"); // Récupération des droits nécéssaire du bot
        let yourole = message.guild.member(message.author).hasPermission("KICK_MEMBERS"); // Récupération des droits nécéssaire du membre

        if (!myrole) { 
            return message.author.send("Je n'ai pas les permissions nécessaires pour bannir un utilisateur");
        }

        if (!yourole) {
            return message.author.send("Vous n'avez pas les permissions nécessaires");
        }

        var logs = message.guild.channels.find("name", "mod-log");
        var bienv = message.guild.channels.find("name", "general");
        // ---- Pour les malins ---- //
        var report = message.member.id;
        if(!message.mentions.users.first()) return message.channel.send("La commande est : " + prefix + "ban + @<utilisateur> + <raison>");
        var member = message.mentions.users.first();
        var reason = message.content.split(" ").slice(2).join(" ");
        if(!reason) reason = "Raison non disponible";
        if(!message.guild.members.get(member.id).bannable) return message.channel.send("L'utilisateur ne peut pas être banni");
        message.guild.members.get(member.id).ban();
        logs.send({
            embed: {
                title: "Gestion des bans/kicks/mute",
                color: 0xFF0000,
                fields: [{
                    name: '_ _',
                    value: '_ _'
                },{
                    name: "Ban de " + member.tag + " par " + message.author.tag,
                    value: "Raison : " + reason
                }]
            }
        });
    }
}

module.exports = ban;