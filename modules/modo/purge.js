function purge(message, bot) {
	if(message.content === "h$purge") {
		const user = message.mentions.users.first();
		
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.author.send('<:7orNad0_negative_check_mark:400045843287375873> {$message.author}, je n’ai pas les permissions nécessaires pour effacer un/des message(s)')
			.then(msg => msg.delete({
				timeout: 10000
			}));
		const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
		if (!amount) return message.author.send('vous devez spécifier un nombre de messages à supprimer !')
			.then(msg => msg.delete({
				timeout: 10000
			}));
		if (!amount && !user) return message.channel.send('vous devez spécifier un utilisateur et le nombre, ou juste une quantité, de messages à supprimer !')
			.then(msg => msg.delete({
				timeout: 10000
			}));
		message.channel.messages.fetch({
				limit: amount
			, })
			.then((messages) => {
				if (user) {
					const filterBy = user ? user.id : bot.user.id;
					messages = messages.filter(m => m.author.id === filterBy)
						.array()
						.slice(0, amount);
				}
				message.channel.bulkDelete(messages).then(ok =>
					message.channel.send("Suppression de " + amount + " message(s)")
						.then(message => setTimeout(function(){message.delete()}, 1000))
				).catch(error => console.log(error.stack));
			});
	}
}

module.exports = purge;
