function help(message, bot) {
	if (message.content === "h$help") {
		message.channel.send({embed:{ color: 0xFF0000, description:":envelope_with_arrow: Help envoyer en mp !"}})
	     message.author.send({embed:{footer:{text: "By Hariamane",icon_url: "https://cdn.discordapp.com/avatars/300896265078571009/853decbb9091b9a045c198c68e4866eb.png?size=128"},color: 0xFF0000, description: "\n\n" +
