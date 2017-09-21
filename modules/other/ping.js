function ping(message, bot) {
	if(message.content === "h$ping") {
		let start = Date.now();
		message.channel.send("Ping en cours ...").then(m => {
			let end = Date.now();
			m.edit(`Pong : **${Math.round(end - start)}** ms`);
		});
	}
}

module.exports = ping;