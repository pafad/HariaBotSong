function botreboot(message, bot) {
if (message.content == "h$botreboot")) {
        message.delete();

        if (message.author.id == "300896265078571009") {
            console.log("[!] ARRÊT")
            message.reply("**Redémarrage en cours ! :warning:**")
            client.destroy();
            console.log("[!] RECONNEXION")
            client.login(token)
        } else {
            message.reply("**Vous n'avez pas la permission** :cry:");
        }
    }
    module.exports = botreboot;
