function purge(message, bot) {
	if(message.content === "h$purge") {
		const user = message.mentions.users.first();
		
		const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])

		if (!amount) return message.reply('vous devez spécifier un nombre de messages à supprimer !');
		if (!amount && !user) return message.reply('vous devez spécifier un utilisateur et le nombre, ou juste une quantité, de messages à supprimer !');
		
		message.channel.fetchMessages({
			limit: amount,
		}).then((messages) => {
			if (user) {
				const filterBy = user ? user.id : bot.user.id;
				messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
			}
			message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
		});
	}
}

module.exports = purge;
