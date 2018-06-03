function vcs_help(message, bot) {
    if(message.content === "h$vcshelp") {
        message.channel.send({
            embed: {
                color: Math.floor(Math.random() * 16777214) + 1,
                title: "Commandes de vcs",
                fields: [{
                    name: "h$vcs <texte>",
                    value: "Pour envoyer une message pour tous les channels `vcs`"
                },
                {
                    name: "h$vcsimage",
                    value: "Pour partager une image dans les channels `vcs`"
                },
                {
                    name: "h$vcsregles",
                    value: "Règlement du vcs"
                },
                {
                    name: "h$vcsban",
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
