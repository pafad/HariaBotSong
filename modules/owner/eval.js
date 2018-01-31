function eval(message, bot){
    if(message.content === 'h$eval'){
    if(message.author.id !== '300896265078571009'){
        message.channel.send(`:x: ${message.author} Tu n'est pas mon developpeur.`)
        return;
    }else{
            try {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const code = args.join(" ");
  let evaled = eval(code);

  if (typeof evaled !== "string")
    evaled = require("util").inspect(evaled);

  message.channel.send(clean(evaled), {code:"xl"});
} catch (err) {
  message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
}
}
function clean(text) {
if (typeof(text) === "string")
return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
else
  return text;
        }
    }
}
module.exports = eval;