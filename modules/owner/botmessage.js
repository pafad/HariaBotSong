function botmessage(message, bot) {
  if(message.content.startsWith('h$botmessage')&&message.author.id=='300896265078571009') {
      serv = bot.guilds.array()
      text = message.content.substr(12)
      for(i=0;i<serv.length;i++){
      serv[i].channels.find('type','text').send(text)
      message.channel.send({embed:{color:0xFF0000,description:":Le message a étes bien envoyé sur tous les serveur la ou j'en fait partir !"}})
}}};
module.exports = botmessage;
