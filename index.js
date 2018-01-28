"use_strict";
const Discord = require("discord.js");
const bot = new Discord.Client();
const connection = new Map();
let broadcast;
const prefix = "h$"

bot.on("ready", function() {
    bot.user.setGame(`h$help/h$helpici|Sur ${bot.guilds.size} serveurs, Bêta v2.5 by Hariamane`, "https://www.twitch.tv/Hariamane")
});

// Envoi un MP lorsqu'un nouvel utilisateur arrive sur un serveur Discord
bot.on("guildMemberAdd", function (member) {
	member.createDM().then(function (channel) {
		return channel.send("Bienvenue sur le serveur," +serveur.name + member.displayName)
	}).catch(console.error);
});

//pour que les commandes marchent !
  if(!message.content.startsWith(prefix))return;
  // La meilleure façon de définir args. aie confiance !
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commandes/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err){
  return;
  }

// ANNONCE
const annonce = require("./modules/owner/annonce.js");
const botmessage = require("./modules/owner/botmessage.js");

// AIDE (HELP)
const help = require("./modules/help.js");
const helpaudio = require("./modules/audio/helpaudio.js");

const support = require("./modules/other/support.js");

// POUR METTRE LE BOT SUR SON SERVEUR DISCORD (JOIN)
const join = require("./modules/other/join.js");

// POUR REJOINDRE LE SERVEUR DISCORD DU BOT (DISCORD)
const srvdiscord = require("./modules/other/srvdiscord.js");

// JEUX
const ping = require("./modules/other/ping.js");

// AUTRES
const say = require("./modules/owner/say.js")
const botconnected = require("./modules/owner/botconnected.js")

// MODÉRATION
const ban = require("./modules/modo/ban.js");
const kick = require("./modules/modo/kick.js");

// RADIO
const webradio = require("./modules/perso/webradio.js");

// MUSIQUE
const audio = require("./modules/audio/audio.js");
audio(bot);

// Bruits
const bruits = require("./modules/bruits/bruits.js")
const insulte = require("./modules/bruits/insulte.js")


bot.on("message", message => {
	annonce(message, bot);
	botconnected(message, bot);
	botmessage(message, bot);
	help(message, bot);
	helpaudio(message, bot);
	join(message, bot);
	srvdiscord(message, bot);
	ping(message, bot);
	ban(message, bot);
	kick(message, bot);
	say(message, bot);
	bruits(message, bot);
	support(message, bot);
	insulte(message, bot);
	webradio(message, bot, connection, broadcast);
});

bot.login(process.env.Discord_token || process.argv[2]);
