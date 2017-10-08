function bruits(message, bot) {
	if (message.content.startsWith("h$bruits")) {
  message.channel.send({embed: { color: 0xFF0000, description:"**Listes des commandes  bruits:**\n\n:x:Les commandes son en dev!:x:"}});
  }};
  module.exports = bruits;
