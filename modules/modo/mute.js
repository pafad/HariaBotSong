function mute(message, bot) {
	if(message.member.hasPermission('KICK_MEMBERS')){
		var args = message.content.startsWith("h$mute ");
		var mrole = message.guild.roles.find('name','botMute');
		var amute = message.mentions.members.first();
		var msg = message.channel.send()
		var bmute = args[1];
		if(mrole){
			if(amute!=bmute) return message.channel.send(':x: syntax invalide')
			if(amute){
				if(args.length>2){
					args.shift();
					args.shift();
					var reason = args.join(' ');
				} else {
					reason = 'Sans raison.'
				}
				if(amute.roles.exists('name','botMute')){
					amute.removeRole(mrole);
					message.channel.send(`:ok_hand: **${amute.user.username}** a été démuté ${reason}`, reason)
				}else{
					amute.addRole(mrole);
					message.channel.send(`:ok_hand: **${amute.user.username}** a été mute ${reason}`, reason)
				}
			}else{
				message.channel.send(":x: Veuillez mentionner la personne à mute")
			}
		}else{
			try{
				message.guild.createRole({
					name:'botMute',
					color: 0x000000
				}).then(r=>{
					message.channel.send("Role `botMute` n'existe pas... je viens d'en créer un.\nessayez de ban la personne dans quelques instants.");
					message.guild.channels.findAll('type','text').map(c =>{
						c.overwritePermissions(r,{'SEND_MESSAGES': false});
					});
				})
			}catch(e){
				message.channel.send("J'ai pas assez de permissions.```js\n"+e+"```")
			}
		}
	}else{
		message.channel.send(":x: Vous n'avez pas de permission");
	}
}
module.exports = mute;
