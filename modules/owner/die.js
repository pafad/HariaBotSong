function die(message, prefix, client){
    if(message.content.startsWith(prefix + "die")) {
		if(message.author.id === "300896265078571009") {
            message.channel.send("Déconnexion ...");
            client.user.setPresence("invisible");
			setTimeout(() => {
				process.exit();
			}, 600);
		} else {
			message.channel.send(`:x: ${message.author}, tu n'est pas mon developpeur.`)
		}
	}
}

module.exports = die;