const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "lg!";

client.login(process.env.TOKEN);

client.on("ready", () => {

    console.log("Je suis prêt !");
    client.user.setGame("Loup Garou [lg!play]");

});

client.on('message', async message => { 

       if (message.content.startsWith(prefix + "play")) {
          let replies = ["1", "2", "3", "4", "5", "6"];
          let result = Math.floor((Math.random() * replies.length));
      
          message.delete().catch(O_o => {});
      
          try {
              let newembed = new Discord.RichEmbed()
                  .setAuthor("Un dé a été lancé !")
                  .setColor("RANDOM")
                  .setFooter("Roll - Loup Garou")
                  .setDescription("Roulé par : " + message.author.username + "\nRésultat : " + replies[result]);
      
              message.channel.send({
                  embed: newembed
              });
          } catch (e) {
              console.log(e.stack);
          };
      };
});

