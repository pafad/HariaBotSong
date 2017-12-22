function support(message, bot) {
    if (message.content.startsWith("h$support")) {

        message.channel.send({embed: { color: 0xFF0000, description:":floppy_disk: Rapport envoyer a Hariamane!"}})
       var Rapport = message.content.substr(10);
              //support du bot
       bot.users.get('306119836503900161').send(`Rapport: ${Rapport} \nPseudo de la personne: @${message.author.username}\nSur le serveur: ${message.guild.name}\nDans le salon:  #${message.channel.name}\nId de l'utilisateur: ${message.author.id}\nDiscrimiminateur: #${message.author.discriminator}`)
       bot.users.get('300896265078571009').send(`Rapport: ${Rapport} \nPseudo de la personne: @${message.author.username}\nSur le serveur: ${message.guild.name}\nDans le salon:  #${message.channel.name}\nId de l'utilisateur: ${message.author.id}\nDiscrimiminateur: #${message.author.discriminator}`)
}};

 
module.exports = support;
