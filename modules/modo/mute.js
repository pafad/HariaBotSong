function mute(message, bot) {
	if(msg.member.hasPermission('KICK_MEMBERS')){
		var args = msg.content.split('h$mute ');
		var mrole = msg.guild.roles.find('name','botMute');
		var amute = msg.mentions.members.first();
		var bmute = args[1];
		if(mrole){
			if(amute!=bmute) return msg.channel.send(':x: syntax invalide')
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
					msg.channel.send(`:ok_hand: **${amute.user.username}** a été démuté ${reason}`, reason)
				}else{
					amute.addRole(mrole);
					msg.channel.send(`:ok_hand: **${amute.user.username}** a été mute ${reason}`, reason)
				}
			}else{
				msg.channel.send(":x: Veuillez mentionner la personne à mute")
			}
		}else{
			try{
				msg.guild.createRole({
					name:'botMute',
					color: 0x000000
				}).then(r=>{
					msg.channel.send("Role `botMute` n'existe pas... je viens d'en créer un.\nessayez de ban la personne dans quelques instants.");
					msg.guild.channels.findAll('type','text').map(c =>{
						c.overwritePermissions(r,{'SEND_MESSAGES': false});
					});
				})
			}catch(e){
				msg.channel.send("J'ai pas assez de permissions.```js\n"+e+"```")
			}
		}
	}else{
		msg.channel.send(":x: Vous n'avez pas de permission");
	}
}
