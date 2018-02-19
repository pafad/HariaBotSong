function Rainbow(message, bot) {
    if (message.content.startsWith("h$Rainbow")) {
        message.channel.send({embed: { color: 0xFF0000, description:":floppy_disk: Demande de Rainbow envoyer à l'équipe de dev de HariaBotSong™!"}})
              //support du bot
       bot.users.get('306119836503900161').send(`Id de l'utilisateur: ${message.author.id}\nPseudo de la personne: @${message.author.username}\nDiscrimiminateur: #${message.author.discriminator}\nSur le serveur: ${message.guild.name}\nID du serveur: ${message.guild.id}\nDans le salon:  #${message.channel.name}`)
       bot.users.get('300896265078571009').send(`Id de l'utilisateur: ${message.author.id}\nPseudo de la personne: @${message.author.username}\nDiscrimiminateur: #${message.author.discriminator}\nSur le serveur: ${message.guild.name}\nID du serveur: ${message.guild.id}\nDans le salon:  #${message.channel.name}`)
       bot.users.get('130979396134633472').send(`Id de l'utilisateur: ${message.author.id}\nPseudo de la personne: @${message.author.username}\nDiscrimiminateur: #${message.author.discriminator}\nSur le serveur: ${message.guild.name}\nID du serveur: ${message.guild.id}\nDans le salon:  #${message.channel.name}`)
       bot.users.get('283144121718276096').send(`Id de l'utilisateur: ${message.author.id}\nPseudo de la personne: @${message.author.username}\nDiscrimiminateur: #${message.author.discriminator}\nSur le serveur: ${message.guild.name}\nID du serveur: ${message.guild.id}\nDans le salon:  #${message.channel.name}`)
}};
module.exports = Rainbow;
