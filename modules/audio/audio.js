function audio(bot) {
	const yt = require("ytdl-core");
	var search = require("youtube-search");
	var request = require("request");
	var opts = {
		maxResults: 1,
		key: "AIzaSyAgwJ2eFLG8U53oSwukzAO1G5ScZ55vyN8"
	};

	let queue = {};

	const commands = {
		'playyt': (msg) => {
			if (queue[msg.guild.id] === undefined) return msg.channel.send("Pour lancer la musique, ajouter en une en faisant h$add");
			if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
			if (queue[msg.guild.id].playing) return msg.channel.send({embed: { color: 0xFF0000, description:"Déjà en cours de lecture"}});
			let dispatcher;
			queue[msg.guild.id].playing = true;

			console.log(queue);
			
			(function play(song) {
				console.log(song);

				if (song === undefined) return msg.channel.send({embed: { color: 0xFF0000, description:":x: La file d'attente est vide"}}).then(() => {
					queue[msg.guild.id].playing = false;
					msg.member.voiceChannel.leave();
					bot.user.setGame("h$help/h$helpici Bêtav2,5|Sur ${client.guilds.size} serveurs, by Hariamane", "https://twitch.tv/Hariamane").catch(console.error)
				});

				msg.channel.send({embed: { color: 0xFF0000, description:`Je vais jouer **${song.title}** qui a été demandé par **${song.requester}**`}});
				bot.user.setGame(`${song.title}`,"https://twitch.tv/Hariamane");
				dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : 1 });
				let collector = msg.channel.createCollector(m => m);

				collector.on("message", m => {
					if (m.content === "h$pause") {
						msg.channel.send("Mis en pause").then(() => {dispatcher.pause();});
					} else if (m.content === "h$resume") {
						msg.channel.send({embed: { color: 0xFF0000, description:"Relancé"}}).then(() => {dispatcher.resume();});
					} else if (m.content === "h$next") {
						msg.channel.send({embed: { color: 0xFF0000, description:"Suivant"}}).then(() => {dispatcher.end();});
					} else if (m.content === "h$volume+") {
						if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.send({embed: { color: 0xFF0000, description:`Volume : ${Math.round(dispatcher.volume*50)}%`}});
						dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
						msg.channel.send(`Volume : ${Math.round(dispatcher.volume*50)}%`);
					} else if (m.content === "h$volume-") {
						if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.send({embed: { color: 0xFF0000, description:`Volume : ${Math.round(dispatcher.volume*50)}%`}});
						dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
						msg.channel.send(`Volume : ${Math.round(dispatcher.volume*50)}%`);
					} else if (m.content === "h$time") {
						msg.channel.send({embed: { color: 0xFF0000, description:`Temps : ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`}});
					}
				});

				dispatcher.on("end", () => {
					collector.stop();
					play(queue[msg.guild.id].songs.shift());
				});

				dispatcher.on("error", (err) => {
					return msg.channel.send({embed: { color: 0xFF0000, description:":x:Erreur : " + err}}).then(() => {
						collector.stop();
						play(queue[msg.guild.id].songs.shift());
					});
				});
			})(queue[msg.guild.id].songs.shift());
		},

		'add': (msg) => {
			let test = msg.content.substr(5);
			if (test == "" || test === undefined) return msg.channel.send({embed: { color: 0xFF0000, description:"Veuillez recommencer en saisissant une recherche"}}));
			search(test, opts, function(faux, results) {
				if(faux) return msg.reply("Erreur 404");
				console.dir(results);
				const url = results[0].link;
			
				yt.getInfo(url, (err, info) => {
					if(err) return msg.channel.send({embed: { color: 0xFF0000, description:':x:Erreur du lien : ' + err}});
					if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
					queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
					msg.channel.send({embed: { color: 0xFF0000, description:`Ajout à la file d'attente **${info.title}**`}});
				});
			});

			return new Promise((resolve, reject) => {
				const voiceChannel = msg.member.voiceChannel;
				if (!voiceChannel || voiceChannel.type !== "voice") return msg.reply({embed: { color: 0xFF0000, description:":x:Je ne peux pas me connecter à un canal vocal"}});
				voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
			});
		},

		'addlist': (msg) => {
			let test = msg.content.substr(9);
			if (test == "" || test === undefined) return msg.channel.send({embed: { color: 0xFF0000, description:"Veuillez recommencer en saisissant une recherche"}});

			/* Vérification de l'URL */

			const tester = "https://www.youtube.com/playlist?list=";
				var autre = msg.content.substring(9, 47);
				console.log(autre)

				if(autre == tester) {
					var api = "&key=AIzaSyAgwJ2eFLG8U53oSwukzAO1G5ScZ55vyN8";
					var listing = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=";
					var ide = msg.content.substr(47);
					console.log(ide)
					request.get(listing + ide + api, function(err, response) {
						var data = JSON.parse(response.body);
						console.log(data);
						var errr = "404";
						if(data.error) return console.log("404")
						var resultat = data.pageInfo.totalResults
						console.log(resultat);
						var premier = 0;

						do {
							var add = data.items[premier].snippet.resourceId.videoId;
							var url = "https://www.youtube.com/watch?v=" + add;

							yt.getInfo(url, (err, info) => {
								if(err) return msg.channel.send({embed: { color: 0xFF0000, description:":x:Erreur du lien : " + err}});
								if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
								queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
								msg.channel.send(`Ajout à la file d'attente **${info.title}**`);
							});

							console.log(add)
							premier++;
						} while(premier < resultat)
					});
				} else {
					return msg.reply({embed: { color: 0xFF0000, description:":x:L'URL n'a pas été bien saisie :(\nL'URL doir commencer par ceci : " + tester}})
				}
		},

		'queue': (msg) => {
			if (queue[msg.guild.id] === undefined) return msg.channel.send("Pour visualiser la file d'attente, ajouter une musique en faisant h$add");
			let tosend = [];
			queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Demandé par : ${song.requester}`);});
			msg.channel.send({embed: { color: 0xFF0000, description:`__**Liste des musiques en attente sur ${msg.guild.name}**__\nActuellement **${tosend.length}** musique(s) à sa liste ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``}});
		}
	};

	bot.on("message", msg => {
		if (!msg.content.startsWith("h$")) return;
		if (commands.hasOwnProperty(msg.content.toLowerCase().slice("h$".length).split(" ")[0])) commands[msg.content.toLowerCase().slice("h$".length).split(" ")[0]](msg);
	});
}

module.exports = audio;
