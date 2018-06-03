function purge(message, bot) {
	if(message.content === "h$purge") {
		let myrole = message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES"); //Récupère les droits nécessaires
		let yourole = message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"); //Récupère les droits nécessaires

		if (!myrole) { 
			return message.author.send("<:7orNad0_negative_check_mark:400045843287375873> "+ message.author +", je n'ai pas les permissions nécessaires pour effacer un/des message(s)");
		}

		if (!yourole) {
			return message.author.send("<:7orNad0_negative_check_mark:400045843287375873> "+ message.author +", vous n'avez pas les permissions nécessaires");
		}

		const user = message.mentions.users.first();
		const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2]);

		if (!amount) return message.reply("vous devez spécifier un nombre de messages à supprimer !");
		if (!amount && !user) return message.reply("vous devez spécifier un utilisateur et le nombre, ou juste une quantité, de messages à supprimer !");

		message.channel.fetchMessages({
			limit: amount,
		}).then((messages) => {
			if (user) {
				const filterBy = user ? user.id : bot.user.id;
				messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
			}
			message.channel.bulkDelete(messages).then(ok =>
				message.channel.send("Suppression de " + amount + " message(s)")
				.then(message => setTimeout(function(){message.delete()}, 1000))
			).catch(error => console.log(error.stack));
		});
	}
}

module.exports = purge;
