function support(message, bot) {
    if (message.content.startsWith("h$support")) {

        message.channel.send({embed: { color: 0xFF0000, description:":floppy_disk: Rapport envoyer a Hariamane!"}})
       var Rapport = message.content.substr(10);
       bot.users.get('300896265078571009','306119836503900161').send({embed:{footer:{text: "By Hariamane",icon_url: "https://cdn.discordapp.com/avatars/300896265078571009/853decbb9091b9a045c198c68e4866eb.png?size=128"},color: 0xFF0000, description: 
`Rapport: ${Rapport} \nPseudo de la personne : @${message.author.username}\nSur le server : ${message.guild.name}\nDans le salon  #${message.channel.name}}`)
}};
module.exports = support;
