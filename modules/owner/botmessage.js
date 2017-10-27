function botmessage(message, bot) {
  if(message.content.startsWith('h$botmessage')&&message.author.id=='300896265078571009') {
      serv = bot.guilds.array()
      text = message.content.substr(12)
      for(i=0;i<serv.length;i++){
      serv[i].channels.find('type','text').send(text)
}}};
module.exports = botmessage;
