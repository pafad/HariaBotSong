const fs = require("fs")
var msg = message;
var prefixe = "h$";

let afk = JSON.parse(fs.readFileSync("afk.json" , "utf8"));
if message.content.startsWith(prefixe + "renafk")){
  if(afk[msg.author.id]) {
    delete afk[msg.author.id];
if(msg.member.nickname === null) {
  msg.channel.send({embed: { color: 0xFF0000, description:"J'ai enlèver ton AFK, car tes de retour ;)"}});
}else{
      msg.channel.send({embed: { color: 0xFF0000, description:"J'ai enlèver ton AFK, car tes de retour ;)"}});
}
fs writeFile("afks.json", JSON.stringify(afk), (err) => { if (err)console.error(err);));
}else{
message.channel.send({embed: { color: 0xFF0000, description:":x:**Erreur !** tu est déjà AFK"}});
}
}


if (message.content.startswith(h$ + "afk")||message.content === prefix + "afk") {
  if (afk[message.author.id]) {
  return message.channel.send({embed: { color: 0xFF0000, description:":x:**Erreur !** tu est déjà AFK -_-"}});
}else{
 let args1 = message.content.split(" ").slice(1);
  if (args1.length === 0) {
   afk[message.author.id] = {"reason" : true};
   message.delete();
    message.channel.send({embed: { color: 0xFF0000, description:'Tu es désormé **AFK**, met $(prefixe)remafk**pour enlèvé ton afk'}}).then(x => DeleteQueue.add(x, 10000));
  }else{
    afk[message.author.id] = {"reason" : args1.join( " ")};
   message.delete();
    message.channel.send({embed: { color: 0xFF0000, description:'Tu es désormé **AFK**, met $(prefixe)remafk**pour enlèvé ton afk'}}).then(x => DeleteQueue.add(x, 10000));
  }
  fs.writeFile("afk.json", JSON.stringify(afk), (err) =>( if (err) 
  console.error(err);)};
}
}

 var mentionned = message.mentions.users.first();
if(msg.mentions.users.size > 0 {
  if(afk[msg.mentions.users.first().id]) {
  if(afk[msg.mentions.users.first().id].reason === true) {
message.channel.send({embed: { color: 0xFF0000, description:'@$(mentionned.username) is **AFK**: pas de raison'}}) 
  }else{
    message.channel.send({embed: { color: 0xFF0000, description:'@$(mentionned.username) is **AFK**: $(afk[msg.mentions.users.first().id].reason'}}) 
  }
  
  
  
