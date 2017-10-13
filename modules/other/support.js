function support(message, bot) {
    if (message.content.startsWith("h$support")) {

        message.channel.send(":floppy_disk:  Rapport du bug envoyer au créateur! ")
       var bug = message.content.substr(5);
       bot.users.get('300896265078571009').send(`Il y a un bug : : ${bug} \nPseudo de la personne : @${message.author.username}\nSur le server : ${message.guild.name}\nDans le salon  #${message.channel.name}`)

    }}
);

module.exports = support;
