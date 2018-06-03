"use_strict";
const Discord = require("discord.js");
const bot = new Discord.Client();
const connection = new Map();
let broadcast;
const config = require("./config.json");
const prefix = "h$";
 
//rainbow
const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
	var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
	var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
	var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

	rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
	var sin = Math.sin(Math.PI / size * 2 * i + phase);
	var int = Math.floor(sin * 127) + 128;
	var hex = int.toString(16);

	return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
	for (let index = 0; index < servers.length; ++index) {
		bot.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
			  .catch(console.error);
		
		if(config.logging) {
			console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
		}
		if(place == (size - 1)) {
			place = 0;
		} else {
			place++;
		}
	}
}
//fin du code rainbow
bot.on("ready", function() {
	console.log(`${bot.user.tag} connecté !`);
	
	let games = [prefix + `help | `+ bot.guilds.size +` serveur(s) avec `+ bot.users.size +` utilisateur(s) connecté(s) au total`, 
        `HariaBotSong est un bot multifonction crée par !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨`, `Besoin de savoir les commandes disponible ? Taper `+ prefix +`help`];
        setInterval(() => {
            bot.user.setActivity(games[Math.floor(Math.random() * games.length)], {url: "https://twitch.tv/hariamane", type: "STREAMING"})
        },20000);
	
	if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
	setInterval(changeColor, config.speed);
});

// Envoi un MP lorsqu'un nouvel utilisateur arrive sur un serveur Discord
bot.on("guildMemberAdd", function (member) {
	member.createDM().then(function (channel) {
		return channel.send("Bienvenue sur le serveur, " +serveur.name + member.displayName)
	}).catch(console.error);
});
// ANNONCE
const annonce = require("./modules/owner/annonce.js");
const botmessage = require("./modules/owner/botmessage.js");
// AIDE (HELP)
const help = require("./modules/help.js");
const helpici = require("./modules/helpici.js");
const helpaudio = require("./modules/audio/helpaudio.js"); 
const support = require("./modules/other/support.js");
// POUR METTRE LE BOT SUR SON SERVEUR DISCORD (JOIN)
const join = require("./modules/other/join.js");
// POUR REJOINDRE LE SERVEUR DISCORD DU BOT (DISCORD)
const srvdiscord = require("./modules/other/srvdiscord.js");
// JEUX
const ping = require("./modules/other/ping.js");
// AUTRES
const say = require("./modules/owner/say.js");
const botconnected = require("./modules/owner/botconnected.js");
const afk = require("./modules/other/afk.js");
const Rainbow = require("./modules/other/rainbow.js");
const vcs = require ("./modules/vcs/vcs.js");
const vcs_regles = require ("./modules/vcs/vcs_regles.js");
const vcs_image = require ("./modules/vcs/vcs_image.js");
const vcs_help = require ("./modules/vcs/vcs_help.js");
const vcs_ban = require ("./modules/vcs/vcs_ban.js");
const vcs_add = require ("./modules/vcs/vcs_add.js");

// MODÉRATION
const ban = require("./modules/modo/ban.js");
const kick = require("./modules/modo/kick.js");
const purge = require("./modules/modo/purge");
//owner
const eval = require("./modules/owner/eval");
const die = require("./modules/owner/die");
// RADIO
const webradio = require("./modules/perso/webradio.js");

// MUSIQUE
const audio = require("./modules/audio/audio.js");
audio(bot);
 
bot.on("message", message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	annonce(message, bot);
	vcs(message, bot);
	vcs_regles(bot, message)
	vcs_image(bot, message)
	vcs_help(bot, message)
	vcs_ban(bot, message)
	vcs_add(bot, message)
	botconnected(message, bot);
	botmessage(message, bot);
	help(message, bot);
	Rainbow(message, bot)
	helpaudio(message, bot);
	join(message, bot);
	srvdiscord(message, bot);
	ping(message, bot);
	ban(message, bot);
	kick(message, bot);
	say(message, bot);
	support(message, bot);
	webradio(message, bot, connection, broadcast);
	eval(message, bot);
	purge(message, bot);
	afk(message, bot);
	helpici(message, bot);
	die(message, bot);
});
 
bot.login(process.env.Discord_token || process.argv[2]);
