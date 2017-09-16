// CODE DE HARIAMANE BOT: HARIABOTSONG MERCI DE PAS TOUCHEZ LE CODE SI BESOIN DE MISE A JOUR CONTACTEZ MOI EH JE PREND EN CHARGE LA BETA ET JE ENVOYE LE NEW CODE h$h$h$h$h$
// By Hariamane Bêta 0.0.1V


//                         CODE HORS SUJET DU BOT/CE CODE EST POUR LES OPTIONS ET LA CONFUGERATION DU BOT

const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login(process.env.Discord_token ||  process.argv[2]);

bot.on('ready', function() {
 bot.user.setGame('h$help Bêta 0.1, by Hariamane').catch(console.error)
})

bot.on('message', function (message) {
    if (message.content === 'h$help') {
      message.channel.send({embed:{footer:{text:'By Hariamane',icon_url:'lien ici'}, color:0xFF0000, description: "[**Commands:**]()\n\n**command privé or setthing:**\nh$annonce : écrit ton annonce, il s'affichera dans tous les serveur.\nh$join : Pour invité le bot sur un serveur ;)." }}) 
    }
})

//                             COMMAND PRIVE OR SETTHINGS ( COMMAND )


bot.on('message', function (message) {
  if(message.content.startsWith('h$annonce')&&message.author.id=='300896265078571009')
 {
      serv = bot.guilds.array()
      text = message.content.substr(9)
      for(i=0;i<serv.length;i++){
      serv[i].channels.find('type','text').send({embed: { color: 0xFF0000, description:text}})  
}} else if(!message.author.bot && message.content.startsWith('h$annonce') ) { message.channel.send('Erreur vous avez les perm dans le bot');}
})

bot.on('message',function (message) {
  if (message.content === 'h$join') {
    message.channel.send({embed: { color: 0xFF0000,('Tu veux invité le bot pas de problème il est heberger H24: https://discordapp.com/oauth2/authorize?client_id=329551988222066689&scope=bot&permissions=2146958591
Discord');
  }
});


