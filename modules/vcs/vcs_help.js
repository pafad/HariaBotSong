function vcs_help(message, prefix, client) {
    if(message.content.startsWith(prefix + "vcshelp")) {
        message.channel.send({
            embed: {
                color: Math.floor(Math.random() * 16777214) + 1,
                title: "Commandes de vcs",
                fields: [{
                    name: prefix + "vcs <texte>",
                    value: "Pour envoyer une message pour tous les channels `vcs`"
                },
                {
                    name: prefix + "vcsimage",
                    value: "Pour partager une image dans les channels `vcs`"
                },
                {
                    name: prefix + "vcsregles",
                    value: "Règlement du vcs"
                },
                {
                    name: prefix + "vcsban",
                    value: "Pour ban quelqu'un du vcs (uniquement modo !)"  
                }],
                timestamp: new Date(),
                footer: {
                    text: "vcshelp by !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨",
                    icon_url: client.user.avatarURL
                }
            }
        })
    }
}

module.exports = vcs_help;