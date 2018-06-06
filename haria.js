'use_strict';
const discord = require("discord.js");
const client = new discord.Client();
const config = require("./configbot.json");
const prefix = config.prefix;
const owner = config.owner;
const connection = new Map();

var snekfetch = require("snekfetch");
var address = require("address");

let broadcast;

/* -------------------- Rainbow -------------------- */
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
		client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
			  .catch(console.error);
		
		if(config.logging) {
			console.log(`[ColorChanger] Changement de couleur à ${rainbow[place]} dans le serveur : ${servers[index]}`);
		}
		if(place == (size - 1)) {
			place = 0;
		} else {
			place++;
		}
	}
}
/* --------------- Fin du code rainbow --------------- */

/* -------------------- Partie connexion au bot -------------------- */
client.on("ready", () => {
	console.log("Connexion sous le token " + process.env.Discord_token || process.argv[2]);

	address(function (err, addrs) {
		console.log("Connecté sous l'adresse " + addrs.ip + "");
		console.log("client.login : OK !");
		console.log(client.user.tag + " est sur " + client.guilds.size + " serveur(s) avec " + client.users.size + " utilisateur(s) connecté(s) au total");

		let games = [prefix + `help | `+ client.guilds.size +` serveur(s) avec `+ client.users.size +` utilisateur(s) connecté(s) au total`, `Pour l'inviter, taper `+ prefix +`invite`, 
		`Préfixe (prefix) : ` + prefix + ``, `${client.user.tag} est un bot multifonction crée par !✨⌖αɓςϯɾαɕƘ-δαɾƘ⌖✨`, `Version 2.0.0`, 
		`Vous voulez avoir des infos sur le bot ? Taper `+ prefix +`infos`, `Besoin de savoir les commandes disponible ? Taper `+ prefix +`help`];
		setInterval(() => {
			client.user.setActivity(games[Math.floor(Math.random() * games.length)], {url: "https://twitch.tv/hariamane", type: "STREAMING"})
		},20000);
	});
});

// Envoi un MP lorsqu'un nouvel utilisateur arrive sur un serveur Discord
client.on("guildMemberAdd", function (member) {
	member.createDM().then(function (channel) {
		return channel.send("Bienvenue sur le serveur, " + member.guild.name + member.displayName)
	}).catch(console.error);
});
/* --------------- Fin de Partie de connexion au bot --------------- */

/**
 * Constante Audio
 */
const audio = require("./modules/audio/audio.js");
audio(client);

/**
 * Constante Général
 */
const userinfo = require("./modules/general/userinfo.js");
const invite = require("./modules/general/invite.js");
const srvinfo = require("./modules/general/serverinfo.js");

/**
 * Constante Jeux (Games)
 */
const ping = require("./modules/games/ping.js");

/**
 * Constante Modérateur
 */
const purge = require("./modules/modo/purge.js");
const kick = require("./modules/modo/kick.js");
const ban = require("./modules/modo/ban.js");
const mute = require("./modules/modo/mute.js");

/**
 * Constante Other (Autre)
 */
const help = require("./modules/other/help.js");
const helpici = require("./modules/other/helpici.js");
const helpaudio = require("./modules/other/helpaudio.js");
const support = require("./modules/other/support.js");
const srvdiscord = require("./modules/other/srvdiscord.js");

/**
 * Constante Owner (Propriétaire)
 */
const annonce = require("./modules/owner/annonce.js");
const botmessage = require("./modules/owner/botmessage.js");
const die = require("./modules/owner/die.js");
const botconnected = require("./modules/owner/botconnected.js");

/**
 * Constante Perso
 */
const say = require("./modules/perso/say.js");
const afk = require("./modules/perso/afk.js");
const rainbowcolor = require("./modules/perso/rainbow.js");
const webradio = require("./modules/perso/webradio.js");

/**
 * Constante VCS
 */
const vcs = require ("./modules/vcs/vcs.js");
const vcs_regles = require ("./modules/vcs/vcs_regles.js");
const vcs_image = require ("./modules/vcs/vcs_image.js");
const vcs_help = require ("./modules/vcs/vcs_help.js");
const vcs_ban = require ("./modules/vcs/vcs_ban.js");
const vcs_add = require ("./modules/vcs/vcs_add.js");

client.on("message", message => {
	userinfo(message, prefix, client);
	invite(message, prefix, client);
	srvinfo(message, prefix, client);
	ping(message, prefix, client);
	purge(message, prefix, client);
	kick(message, prefix, client);
	ban(message, prefix, client);
	mute(message, prefix, client);
	help(message, prefix, client);
	helpici(message, prefix, client);
	helpaudio(message, prefix, client);
	support(message, prefix, client);
	srvdiscord(message, prefix, client);
	annonce(message, prefix, client);
	botmessage(message, prefix, client);
	die(message, prefix, client);
	botconnected(message, prefix, client);
	say(message, prefix, client);
	afk(message, prefix, client);
	rainbowcolor(message, prefix, client);
	webradio(message, prefix, client, connection, broadcast);
	vcs(message, prefix, client);
	vcs_regles(message, prefix, client);
	vcs_image(message, prefix, client);
	vcs_help(message, prefix, client);
	vcs_ban(message, prefix, client);
	vcs_add(message, prefix, client);
});

client.login(process.env.Discord_token || process.argv[2]);
