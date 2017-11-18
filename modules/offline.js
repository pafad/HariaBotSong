function offline(message, bot) {
if (message.content == "h$offline") {
        if(message.author.id == "300896265078571009") {
            message.channel.send("Arrêt en cours ...");
            console.log("Arrêt en cours ...");
            console.log("/ Je suis désormais hors ligne (offline) /");
            client.destroy();
            process.exit();
        } else {
            message.channel.send(":x: **Erreur** :x: ! Tu n'es pas l'owner !");}
    }}};
    module.exports = offline;
