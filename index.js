"use_strict";
const Discord = require("discord.js");
const bot = new Discord.Client();
const connection = new Map();
let broadcast;

bot.on("ready", function() {
	bot.user.setGame("h$help/h$helpici Alpha v0.1 by Hariamane", "https://twitch.tv/Hariamane").catch(console.error)
});

// Envoi un MP lorsqu'un nouvel utilisateur arrive sur un serveur Discord
bot.on("guildMemberAdd", function (member) {
	member.createDM().then(function (channel) {
		return channel.send("Bienvenue sur le serveur, " + member.displayName)
	}).catch(console.error);
});

// ANNONCE
const annonce = require("./modules/owner/annonce.js");
const botmessage = require("./modules/owner/botmessage.js");
const owneronly = require("./modules/owner/owneronly.js");

// AIDE (HELP)
const help = require("./modules/other/help.js");

// POUR METTRE LE BOT SUR SON SERVEUR DISCORD (JOIN)
const join = require("./modules/other/join.js");

// POUR REJOINDRE LE SERVEUR DISCORD DU BOT (DISCORD)
const srvdiscord = require("./modules/other/srvdiscord.js");

// JEUX
const ping = require("./modules/other/ping.js");

// MODÉRATION
const ban = require("./modules/modo/ban.js");
const kick = require("./modules/modo/kick.js");
const clear = require("./modules/modo/purge.js");

// RADIO
const webradio = require("./modules/perso/webradio.js");

// MUSIQUE
const audio = require("./modules/audio/audio.js");
audio(bot);

bot.on("message", message => {
	annonce(message, bot);
	botmessage(message, bot);
	owneronly(message, bot);
	help(message, bot);
	join(message, bot);
	srvdiscord(message, bot);
	ping(message, bot);
	ban(message, bot);
	kick(message, bot);
	webradio(message, bot, connection, broadcast);
});

bot.login(process.env.Discord_token || process.argv[2]);
