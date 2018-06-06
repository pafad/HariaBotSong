function vcs_add(message, prefix, client) {
    if(message.content.startsWith(prefix + "vcsadd")) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) {
            message.channel.send("tu n'as pas la permission de gérer les salons.");
            return;
        } else {
            message.channel.send("Le canal #haria-vcs a été ajouté avec succès. Vous pouvez parler en faisant **"+ prefix +"vcs [texte]** sans les [].");
            message.guild.createChannel("haria-vcs").then(c => c.send({
                embed: {
                    color: Math.floor(Math.random() * 16777214) + 1,
                    fields: [{
                        name: "Règlement du vcs",
                        value: "Salut à vous utilisateurs du vcs. Voici un petit règlement à suivre."
                    },
                    {
                        name: ":gear: -> Règle 1 :",
                        value: "Ne spammez pas les vcs."
                    },
                    {
                        name: ":gear: -> Règle 2 :",
                        value: "Ne faites pas votre pub dans les vcs c'est pas fait pour ça."
                    },
                    {
                        name: ":gear: -> Règle 3 :",
                        value: "Insultez pas dans les vcs."
                    },
                    {
                        name: ":gear: -> Règle 4 :",
                        value: "Ne mettez pas de contenu pornographique ou gore dans la commande vcs-image."
                    },
                    {
                        name: ":gear: -> Règle 5 :",
                        value: "Toute forme de rascime y sont interdit."
                    },
                    {
                        name: "Amusez-vous bien !",
                        value: "Cordialement: !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨"
                    }],
                    timestamp: new Date(),
                    footer: {
                        text: "Règlement par !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨"
                    }
                }
            }))
        }
    }
}

module.exports = vcs_add;