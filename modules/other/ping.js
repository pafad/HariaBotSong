function ping(message, bot) {
	if(message.content === "h$ping") {
		let start = Date.now();
		message.channel.send({
			embed: {
				color: 0xFF0000,
				title: "Ping en cours ..."
			}
		}).then(m => {
			let end = Date.now();
			m.edit({
				embed: {
					color: 0xFF0000,
					title: `:ping_pong: Pong : **${Math.round(end - start)}** ms`
				}
			});
		});
	}
}

module.exports = ping;