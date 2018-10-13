const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "a!";


db.defaults({}).write()

var servers = {};

client.login("");

  
client.on("ready", () => {
  
    console.log("Je suis prêt !");
    client.user.setGame("Anti-Vent");
});

  
  client.on('message', async message => { 
  
      if(message.content === "Bonjour"){
          message.reply("Salut");
          console.log('Le bot dit bonjour');
        }
