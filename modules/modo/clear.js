
    if (message.content == "h$clear") {
        try {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                messages = message.channel.fetchMessages();
                message.channel.bulkDelete(messages);
            }
        } catch(e) {
            message.channel.send("ERROR: ERROR CLEARING CHANNEL.");
            console.log(e);
        }
    }

});
