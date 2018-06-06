function afk(message, prefix, client) {
	const fs = require("fs");
	var msg = message;
	var raison = message.content.substr(5);

	let afk = JSON.parse(fs.readFileSync("./modules/perso/afk.json" , "utf8"));

	if (message.content.startsWith(prefix + "afk" + raison)) {
		if (afk[message.author.id].reason) {
			return message.channel.send({
				embed: {
					color: 0xFF0000,
					description: ":x:**Erreur !** tu est déjà AFK -_-"
				}
			});
		} else {
			if (raison.length === 0) {
				afk[message.author.id] = {"reason" : message.content.substr(5)};
			} else {
				message.channel.send({
					embed: {
						color: 0xFF0000,
						description:`Tu es désormé **AFK** pour raison ${raison}`
					}
				}).then(x => DeleteQueue.add(x, 10000));

				afk[message.author.id] = {"reason": message.content.substr(5)};
			}
			fs.writeFile("./modules/perso/afk.json", JSON.stringify(afk), (err) => { if (err) console.error(err) });
		}
	}

	if(message.content.startsWith(prefix + "reafk")) {
		if(afk[msg.author.id]) {
			delete afk[msg.author.id].reason;
			msg.channel.send({
				embed: {
					color: 0xFF0000,
					description: "J'ai enlevé ton AFK, car t'est de retour ;)"
				}
			});
			fs.writeFile("./modules/perso/afk.json", JSON.stringify(afk), (err) => { if (err) console.error(err) });
		}
	}

	var mentionned = message.mentions.users.first();
	
	if(msg.mentions.users.size > 0 ) {
		if(afk[msg.mentions.users.first().id]) {
			if(afk[msg.mentions.users.first().id].reason) {
				message.channel.send({
					embed: {
						color: 0xFF0000,
						description: `${mentionned.username} est **AFK** : ${afk[msg.mentions.users.first().id].reason}`
					}
				}) 
			} else {
				return;
			}
		}
	}
}

module.exports = afk;