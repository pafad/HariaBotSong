function annonce(message, bot) {
	if(message.content.startsWith("h$annonce")) {
               var messageactu = message.content.substr(9);
			message.channel.send({
					title: "Hey @everyone, " + messageactu});
			message.delete(messageactu);
			}});
		}
	}
}

module.exports = annonce;
