function ping(message, prefix, client) {
    if(message.content.startsWith(prefix + "ping")) {
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

        console.log("Commande exécuté : ping | Serveur : " + message.guild.name);
    }
}

module.exports = ping;