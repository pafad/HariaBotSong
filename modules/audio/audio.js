function audio(client) {
	const YouTube = require("simple-youtube-api");
	const ytdl = require("ytdl-core");
	const config = require("../../configbot.json");
	const youtube = new YouTube("AIzaSyD9spKtN7MIp84ujaN6JkwGDHHP22OwuzY");
	const queue = new Map();

	var servers = {};
	var prefix = config.prefix;

	client.on("message", async message => {
		var args = message.content.substring(prefix.length).split(" ");
		if (!message.content.startsWith(prefix)) return;
		var searchString = args.slice(1).join(' ');
		var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
		var serverQueue = queue.get(message.guild.id);

		switch (args[0].toLowerCase()) {
			case "playyt":
				var voiceChannel = message.member.voiceChannel;
				if (!voiceChannel) return message.channel.send('Je suis désolé mais vous devez être dans un canal vocal pour jouer de la musique !');
				var permissions = voiceChannel.permissionsFor(message.client.user);
				if (!permissions.has('CONNECT')) {
					return message.channel.send('Je ne peux pas me connecter à votre canal vocal, assurez-vous que j’ai les permissions appropriées !');
				}
				if (!permissions.has('SPEAK')) {
					return message.channel.send('Je ne peux pas parler dans ce canal vocal, assurez-vous que j’ai les permissions appropriées !');
				}
				if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
					var playlist = await youtube.getPlaylist(url);
					var videos = await playlist.getVideos();
					for (const video of Object.values(videos)) {
						var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
						await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
					}
					return message.channel.send(`:white_check_mark: Playlist : **${playlist.title}** a bien été ajouté à la file d’attente !`);
				} else {
					try {
						var video = await youtube.getVideo(url);
					} catch (error) {
						try {
							var videos = await youtube.searchVideos(searchString, 10);
							var index = 0;
							message.channel.send(`
							__**Sélection de la musique :**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Veuillez fournir une valeur pour sélectionner l’un des résultats de recherche allant de 1 à 10.
							`);
							// eslint-disable-next-line max-depth
							try {
								var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
									maxMatches: 1,
									time: 10000,
									errors: ['time']
								});
							} catch (err) {
								console.error(err);
								return message.channel.send('Valeur non valide. Annulation de la sélection de la vidéo.');
							}
							var videoIndex = parseInt(response.first().content);
							var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
						} catch (err) {
							console.error(err);
							return message.channel.send(':sos: Je n’ai pas pu obtenir un résultat pour votre recherche.');
						}
					}
					return handleVideo(video, message, voiceChannel);
				}
			break;
			case "skip":
				if (!message.member.voiceChannel) return message.channel.send('Vous n’êtes pas dans un canal vocal !');
				if (!serverQueue) return message.channel.send('Il n’y a rien à jouer car je ne pourrais pas sauter (skip) pour toi.');
				serverQueue.connection.dispatcher.end('La commande Skip à été utilisé !');
				return undefined;
			break;
			case "stop":
				if (!message.member.voiceChannel) return message.channel.send('Vous n’êtes pas dans un canal vocal !');
				if (!serverQueue) return message.channel.send('Il n’y a rien à jouer car je ne pourrais pas stopper pour toi.');
				serverQueue.songs = [];
				serverQueue.connection.dispatcher.end('La commande Stop à été utilisé !');
				return undefined;
			break;
			case "volume":
				if (!message.member.voiceChannel) return message.channel.send('Vous n’êtes pas dans un canal vocal !');
				if (!serverQueue) return message.channel.send('Il n’y a rien à jouer.');
				if (!args[1]) return message.channel.send(`Le volume actuel est à **${serverQueue.volume}**`);
				serverQueue.volume = args[1];
				serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
				var volval;
				if (serverQueue.volume == 0) {
					volval = `───── :mute:`
				}
				if (serverQueue.volume == 1) {
					volval = `○──── :loud_sound:`
				}
				if (serverQueue.volume == 2) {
					volval = `─○─── :loud_sound:`
				}
				if (serverQueue.volume == 3) {
					volval = `──○── :loud_sound:`
				}
				if (serverQueue.volume == 4) {
					volval = `───○─ :loud_sound:`
				}
				if (serverQueue.volume == 5) {
					volval = `────○ :loud_sound:`
				}
            	return message.channel.send(`**${volval}**`);
			break;
			case "np":
				if (!serverQueue) return message.channel.send('Il n’y a rien à jouer.');
				return message.channel.send(`:notes: Lecture en cours : **${serverQueue.songs[0].title}** demandé par **${message.author.username}**`);
			break;
			case "queue":
				if (!serverQueue) return message.channel.send('Il n’y a rien à jouer.');
				return message.channel.send(`
				__**Musique(s) en file d’attente :**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Lecture en cours :** ${serverQueue.songs[0].title}
				`);
			break;
			case "pause":
				if (serverQueue && serverQueue.playing) {
					serverQueue.playing = false;
					serverQueue.connection.dispatcher.pause();
					return message.channel.send(':pause_button: J’ai mis en pause la musique pour vous !');
				}
				return message.channel.send('Il n’y a rien à jouer.');
			break;
			case "resume":
				if (serverQueue && !serverQueue.playing) {
					serverQueue.playing = true;
					serverQueue.connection.dispatcher.resume();
					return message.channel.send(':arrow_forward: J’ai repris la musique pour vous !');
				}
				return message.channel.send('Il n’y a rien à jouer.');


				return undefined;
			break;
		}
		async function handleVideo(video, message, voiceChannel, playlist = false) {
			var serverQueue = queue.get(message.guild.id);
			// console.log(video);
			var song = {
				id: video.id,
				title: video.title,
				url: `https://www.youtube.com/watch?v=${video.id}`
			};
			if (!serverQueue) {
				var queueConstruct = {
					textChannel: message.channel,
					voiceChannel: voiceChannel,
					connection: null,
					songs: [],
					volume: 5,
					playing: true
				};
				queue.set(message.guild.id, queueConstruct);

				queueConstruct.songs.push(song);

				try {
					var connection = await voiceChannel.join();
					queueConstruct.connection = connection;
					play(message.guild, queueConstruct.songs[0]);
				} catch (error) {
					console.error(`Je n’ai pas pu rejoindre le canal vocal : ${error}`);
					queue.delete(message.guild.id);
					return message.channel.send(`Je n’ai pas pu rejoindre le canal vocal : ${error}`);
				}
			} else {
				serverQueue.songs.push(song);
				// console.log(serverQueue.songs);
				if (playlist) return undefined;
				else return message.channel.send(`:white_check_mark: **${song.title}** a bien été ajouté a la file d’attente !`);
			}
			return undefined;
		}
		function play(guild, song) {
			var serverQueue = queue.get(guild.id);

			if (!song) {
				serverQueue.voiceChannel.leave();
				queue.delete(guild.id);
				return;
			}
			// console.log(serverQueue.songs);

			const dispatcher = serverQueue.connection.playStream(ytdl(song.url, { filter: "audioonly", quality: "250"}), { passes: 1 })
			.on('end', reason => {
				message.channel.send('La musique est terminée. Musique suivante ou il n’y a plus rien dans la file d’attente.');
				if (reason === 'Stream is not generating quickly enough.') console.log('Musique terminée.');
				else console.log(reason);
				serverQueue.songs.shift();
				play(guild, serverQueue.songs[0]);
			})
			.on('error', error => console.error(error));
				dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

				serverQueue.textChannel.send(`:notes: Je joue : **${song.title}** demandé par **${message.author.username}**`);
		}
	});
}

module.exports = audio;
