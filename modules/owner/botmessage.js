function botmessage(message, prefix, client) {
	if(message.content.startsWith(prefix + "botmessage") && message.author.id == "300896265078571009") {
		serv = client.guilds.array();
		text = message.content.substr(12);

		for(i=0;i<serv.length;i++) {
			serv[i].channels.find("type", "text").send(text);
		}
	}
}

module.exports = botmessage;