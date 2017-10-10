const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "mysql-hariaman.alwaysdata.net",
  user: "hariaman",
  password: "password",
  database: "hariaman_bot"
});
connection.connect();

bot.on('message', message => {
  if (message.channel.type != 'dm') {
    var getvalueof = message.author;
    if(getvalueof.bot == true){
           return;
       }
  var content = message.content;
  var info_message = {
      "authorId": message.author.username,
      "message": content,
      "guildId": message.guild.name,
      "IdOfGuild": message.guild.id,
      "salon" : bot.channels.get(message.channel.id).name
    }
    connection.query("INSERT INTO messages SET ?", info_message, function(error) {
      if (error) {
        console.log(error);
        return;
      }
    })
  }
});
