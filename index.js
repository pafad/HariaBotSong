// CODE DE HARIAMANE BOT: HARIABOTSONG MERCI DE PAS TOUCHEZ LE CODE SI BESOIN DE MISE A JOUR CONTACTEZ MOI EH JE PREND EN CHARGE LA BETA ET JE ENVOYE LE NEW CODE h$h$h$h$h$
// By Hariamane Bêta 0.0.1V


//                         CODE HORS SUJET DU BOT/CE CODE EST POUR LES OPTIONS ET LA CONFUGERATION DU BOT

const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login(process.env.Discord_token ||  process.argv[2]);

bot.on('ready', function() {
 bot.user.setGame('h$help Bêta 0.1, by Hariamane').catch(console.error)
})

bot.on('message', function (message) {
    if (message.content === 'h$help') {
      message.channel.send({embed:{footer:{text:'By Hariamane',icon_url:' https://cdn.discordapp.com/avatars/300896265078571009/853decbb9091b9a045c198c68e4866eb.png?size=128'}, color:0xFF0000, description: "[**Commandes:**]()\n\n**commandes utils:**\n\n✔h$annonce :  Cette commande te permet de pub pour ton discord. Il s'affiche sur tous les serveurs dont le bot en fait partie. \n✔h$join : Cette commande te permet d'ajouter ce bot dans ton serveur.\n✔h$discord : Cette commande te permet de me rejoindre.\n:x:h$contact : Cette commande te permet de contacter le support technique du bot.\n\n**Commandes Jeux:**\n✔h$ping" }}) 
    }
})

//                             COMMAND PRIVE OR SETTHINGS ( COMMAND )

bot.on('guildMemberAdd', function (member){
    member.createDM().then(function (channel){
    return channel.send('Bienvenu(e) sur le serveur,  ' + member.displayName)
    }).catch(console.error)
})

bot.on("message",function(message){if(message.content.startsWith("h$annonce")) {
        if (message.author.id == "300896265078571009" || message.author.id === "283144121718276096" || message.author.id === "307588259968581634") {
            var messageactu = message.content.substr(9);

            message.channel.send({embed: { color: 0xFF0000,title:"Hey @everyone, " + messageactu}});
            message.delete(messageactu);
        } else {
            message.reply("Erreur\n:x:Vous n'avez pas les permissions nécessaires");
        }

        console.log("Commande exécuté : news");
    }})


bot.on('message',function (message) {
  if (message.content === 'h$join') {
   message.channel.send({embed: { color: 0xFF0000,title:'https://discordapp.com/oauth2/authorize?client_id=329551988222066689&scope=bot&permissions=2146958591%27%7D%7D)%27%7D%7D)%7D%7D)%27%7D%7D'}})
  }
});

bot.on('message',function (message) {
  if (message.content === 'h$discord') {
   message.channel.send({embed: { color: 0xFF0000,title:'Cette commande te permet de me rejoindre: https://discord.gg/u9P2tpQ'}})
  }
});

//                            COMMAND JEUX


bot.on('message',function (message) {
  if (message.content === 'h$ping') {
    message.channel.send({embed: { color: 0xFF0000,title:'Pong! :ping_pong: '+ `${Date.now() - message.createdTimestamp}` + ' ms`'}})
}
});




