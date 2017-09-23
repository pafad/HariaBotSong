function clear(message, bot) {
if (message.content.startsWith( "h$clear")) {
message.delete();
let modRole = message.guild.roles.find("name", "Mod");
if(!message.guild.roles.exists("name", "Mod")) {
return  message.channel.sendMessage("", {embed: {
title: "Erreur:",
color: 0xff0000,
description: " :no_entry_sign: Le rôle **Mod** n'existe pas dans ce serveur veuillez le créer pour Clear! :no_entry_sign: ",
footer: {
text: " "
}
}}).catch(console.error);
}
if(!message.member.roles.has(modRole.id)) {
return   message.channel.sendMessage("", {embed: {
title: "Erreur:",
color: 0xff0000,
description: " :no_entry_sign: Vous n'avez pas la permissions d'utiliser cette commande ! :no_entry_sign: ",
footer: {
text: " "
}
}}).catch(console.error);
}
var args = message.content.substr(7);
if(args.length === 0){
message.channel.sendMessage("", {embed: {
title: "Erreur:",
color: 0xff0000,
description: " :x: Vous n'avez pas précisé le nombre :x: ",
footer: {
text: " "
}
}});
}
else {
var msg;
if(args.length === +1){
msg = 100;
} else {
msg = parseInt(args[8]);
}
message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "Message",
color: 0x3366FF,
description: ":wastebasket: `" + args + "` messages supprimés!",
footer: {
text: " "
}
}});

}
}
