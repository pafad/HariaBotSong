// CODE DE HARIAMANE BOT: HARIABOTSONG MERCI DE PAS TOUCHEZ LE CODE SI BESOIN DE MISE A JOUR CONTACTEZ MOI EH JE PREND EN CHARGE LA BETA ET JE ENVOYE LE NEW CODE h$h$h$h$h$
// By Hariamane Bêta 0.0.1V


//                         CODE HORS SUJET DU BOT/CE CODE EST POUR LES OPTIONS ET LA CONFUGERATION DU BOT

const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login(process.env.Discord_token ||  process.argv[2]);

bot.on('ready', function() {
 bot.user.setGame('h$help V.01, by Hariamane').catch(console.error)
})

bot.on('message', function (message) {
    if (message.content === 'h$help') {
      message.channel.send({embed: { color: 0xFF0000, description: "**Command Fonda/Admin:**\nh$annonce : ecrit ton annonce" }}) 
    }
})

//                             CODE DU BOT ( COMMAND )


bot.on('message', function (message) {
  if(message.content.startsWith('h$annonce')&&message.author.id=='300896265078571009') {
      serv = bot.guilds.array()
      text = message.content.substr(9)
      for(i=0;i<serv.length;i++){
      serv[i].channels.find('type','text').send({embed: { color: 0xFF0000, description:text}})
}}})


