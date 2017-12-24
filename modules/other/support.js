function support(message, bot) {
    if (message.content.startsWith("h$support")) {

        message.channel.send({embed: { color: 0xFF0000, description:":floppy_disk: Rapport envoyer à l'équipe de dev de HariaBotSong™!"}})
       var Rapport = message.content.substr(10);
              //support du bot
       bot.users.get('306119836503900161').send(`Rapport: ${Rapport} \nId de l'utilisateur: ${message.author.id}\nPseudo de la personne: @${message.author.username}\nDiscrimiminateur: #${message.author.discriminator}\nSur le serveur: ${message.guild.name}\nDans le salon:  #${message.channel.name}`)
       bot.users.get('300896265078571009').send(`Rapport: ${Rapport} \nId de l'utilisateur: ${message.author.id}\nPseudo de la personne: @${message.author.username}\nDiscrimiminateur: #${message.author.discriminator}\nSur le serveur: ${message.guild.name}\nDans le salon:  #${message.channel.name}`)
       bot.users.get('130979396134633472').send(`Rapport: ${Rapport} \nId de l'utilisateur: ${message.author.id}\nPseudo de la personne: @${message.author.username}\nDiscrimiminateur: #${message.author.discriminator}\nSur le serveur: ${message.guild.name}\nDans le salon:  #${message.channel.name}`)
       bot.users.get('283144121718276096').send(`Rapport: ${Rapport} \nId de l'utilisateur: ${message.author.id}\nPseudo de la personne: @${message.author.username}\nDiscrimiminateur: #${message.author.discriminator}\nSur le serveur: ${message.guild.name}\nDans le salon:  #${message.channel.name}`)
}};
module.exports = support;
