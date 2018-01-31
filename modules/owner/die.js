function die(message, bot){
    if(message.content === "h$die"){
		if(message.author.id === "300896265078571009"){
            message.channel.send("déconnection...");
            bot.user.setPresence("invisible");
			setTimeout(() => {
				process.exit();
			}, 600);
		}else{
			message.channel.send(`:x: ${message.author}, tu n'est pas mon developpeur.`)
		}
	}
}
module.exports = die;