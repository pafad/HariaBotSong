//                         CODE HORS SUJET DU BOT/CE CODE EST POUR LES OPTIONS ET LA CONFUGERATION DU BOT

const Discord = require('discord.js')
const client = new Discord.Client();
const bot = new Discord.Client();

bot.login(process.env.Discord_token ||  process.argv[2]);

bot.on('ready', function() {
 bot.user.setGame('h$help Bêta 0.1, by Hariamane').catch(console.error)
})

bot.on('message', function (message) {
    if (message.content === 'h$help') {
      message.channel.send({embed:{footer:{text:'By Hariamane',icon_url:' https://cdn.discordapp.com/avatars/300896265078571009/853decbb9091b9a045c198c68e4866eb.png?size=128'}, color:0xFF0000, description: "[**Commandes:**]()\n\n**commandes utils:**\n\n✔h$annonce :  Cette commande te permet de pub pour ton discord. Il s'affiche sur tous les serveurs dont le bot en fait partie.\n✔h$botmessage : Cette commande est réserver au développer.\n✔h$join : Cette commande te permet d'ajouter ce bot dans ton serveur.\n✔h$discord : Cette commande te permet de me rejoindre.\n:x:h$support : Cette commande te permet de contacter le support technique du bot.\n\n**Commandes Jeux:**\n✔h$ping\n:x:h$traduction : Le but C'est de traduire des phrases.\n\n**Commandes modérations :**\n:x:h$Ban : Cette commandes C'est pour ban les joueur.\n\n**Radio :**\n:x:h$webradioplay : Pour écouter de la radio.\n:x:h$webradiostop : Stoper la radio." }}) 
    
}})

//                             Message mp bienvenu(e)


bot.on('guildMemberAdd', function (member){
    member.createDM().then(function (channel){
    return channel.send('Bienvenu(e) sur le serveur,  ' + member.displayName)
    }).catch(console.error)
});

//                              COMMANDE

bot.on("message",function(message){if(message.content.startsWith("h$annonce"))  {
            var messageactu = message.content.substr(9);
            message.channel.send({embed: { color: 0xFF0000,title:"Hey @everyone, " + messageactu}});
            message.delete(messageactu);
        } else if(!message.author.bot && message.content.startsWith('h$annonce') ) { message.channel.send({embed: { color: 0xFF0000, description:'Erreur\n:x:Vous avez pas les permissions nécessaires'}})
    }});
 
bot.on('message', function (message) {if (message.content.startsWith('h$botmessage')&(message.author.id=='300896265078571009'))  {
    var messageactu = message.content.substr(9);
      serv = bot.guilds.array()
      text = message.content.substr(12)
      for(i=0;i<serv.length;i++){
      serv[i].channels.find('type','text').send({embed: { color: 0xFF0000, description:text}})
       message.delete(messageactu)
}} else if(!message.author.bot && message.content.startsWith('h$annonce') ) { message.channel.send({embed: { color: 0xFF0000, description:'**:x:Erreur**\n**Il y a que le développeur qui à accès à la commande, pour faire une annonce demander sur les erveur officiel, merci.**'}});}
})


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

//                              COMMAND modérations

bot.on('message',function (message) {
    if (message.content.startsWith("h$ban")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        if (message.mentionned)
        // ban
            member.ban().then((member) => {
                // Successmessage
                message.channel.send(":wave: " + member.displayName + " a été ban du server :ballot_box_with_check:").catch(console.erreur);
            }).catch(() => {
                // Failmessage
                message.channel.send(":x:**Error :** Vous n avez pas les permissions!").catch(console.erreur);

        });
    }
});



//                   RADIO

const connection = new Map();

let broadcast;

const webradio = require("/app/webradio.js");

client.on("message", message => {
    webradio(message, client, connection, broadcast);

});




