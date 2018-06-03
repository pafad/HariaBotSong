function vcs_regles(message, bot) {
    if(message.content === "h$vcsregles") {
        if(message.channel.name === "haria-vcs") {
            return;
        } else {
            message.channel.send({
                embed: { 
                    color: Math.floor(Math.random() * 16777214) + 1,
                    fields: [{
                        name: "Règlement de vcs",
                        value: "Salut à vous utilisateurs du vcs. Voici un petit règlement à suivre."
                    },
                    {
                        name:":gear: -> Règle 1:",
                        value:"Ne spammez pas les vcs."
                    },
                    {
                       name:":gear: -> Règle 2:",
                       value:"Ne faites pas votre pub dans les vcs c'est pas fait pour ça."
                    },
                    {
                        name:":gear: -> Règle 3:",
                        value:"Insultez pas dans les vcs."
                    },
                    {
                        name:":gear: -> Règle 4:",
                        value:"Ne mettez pas de contenu pornographique ou gore dans la commande vcs-image."
                    },
                    {
                        name:":gear: -> Règle 5:",
                        value:"Toute formes de rascime y sont interdit."
                    },
                    {
                      name:"Amusez-vous bien !",
                      value: "Cordialement: !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨"
                    }],
                    timestamp: new Date(),
                    footer: {
                        text:"Règlement by !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨"
                    }    
                }
            })
        }
    }
}

module.exports = vcs_regles;
