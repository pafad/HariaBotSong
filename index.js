"use_strict";
const Discord = require("discord.js");
const bot = new Discord.Client();
const connection = new Map();
let broadcast;

bot.on("ready", function() {
    bot.user.setGame(`h$help/h$helpici | Sur ${bot.guilds.size} serveurs, Bêta v2.5 by Hariamane`, "https://www.twitch.tv/Hariamane")
});

// Envoi un MP lorsqu'un nouvel utilisateur arrive sur un serveur Discord
bot.on("guildMemberAdd", function (member) {
	member.createDM().then(function (channel) {
		return channel.send("Bienvenue sur le serveur," +serveur.name + member.displayName)
	}).catch(console.error);
});

// ANNONCE
const annonce = require("./modules/owner/annonce.js");
const botmessage = require("./modules/owner/botmessage.js");
const owneronly = require("./modules/owner/owneronly.js");

// AIDE (HELP)
const help = require("./modules/help.js");

const support = require("./modules/other/support.js");

// POUR METTRE LE BOT SUR SON SERVEUR DISCORD (JOIN)
const join = require("./modules/other/join.js");

// POUR REJOINDRE LE SERVEUR DISCORD DU BOT (DISCORD)
const srvdiscord = require("./modules/other/srvdiscord.js");

// JEUX
const ping = require("./modules/other/ping.js");

// AUTRES
const say = require("./modules/owner/say.js");
const spymsg = require("./modules/other/spymsg.js");

// MODÉRATION
const ban = require("./modules/modo/ban.js");
const kick = require("./modules/modo/kick.js");
const clear = require("./modules/modo/clear.js");


// RADIO
const webradio = require("./modules/perso/webradio.js");

// MUSIQUE
const audio = require("./modules/audio/audio.js");
audio(bot);

// Bruits
const bruits = require("./modules/bruits/bruits.js")
const insulte = require("./modules/bruits/insulte.js")

// STOP WebRadio/Musique
const stop = require("./modules/stopvocal/stopvocal.js");

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
	clear(message, bot);
	say(message, bot);
	bruits(message, bot);
	support(message, bot);
	say(message, bot);
	spymsg(bot, message)
	insulte(message, bot);
	webradio(message, bot, connection, broadcast);
	stop(message, bot, connection, broadcast);
});

bot.login(process.env.Discord_token || process.argv[2]);
