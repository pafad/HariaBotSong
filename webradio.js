-function webradio(message, client, connection, broadcast) {
 +function webradio(message, bot, connection, broadcast) {
      if(message.content.startsWith("h$webradioplay")) {
          var fluxwebradio = message.content.substr(15);
          message.member.voiceChannel.join()
