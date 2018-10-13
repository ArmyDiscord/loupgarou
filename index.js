const Discord = require('discord.js');

const bot = new Discord.Client();

var prefix = "*";

bot.login(process.env.TOKEN);

bot.on("ready", async () => {

console.log(`${bot.user.tag} is Online!`);

bot.user.setActivity("Anti-Vent", {type: "WATCHING"});

bot.user.setStatus("online");

});

bot.on('message', async message => { 

    if(message.content === "Bonjour"){
        message.reply("Salut");
    }

    if(message.content === "bjr"){
        message.reply("Salut");
    }

    if(message.content === "bonjour"){
        message.reply("Salut");
    }

    if(message.content === "Bjr"){
        message.reply("Salut");
    }

    if(message.content === "Bonsoir"){
        message.reply("Bonsoir");
    }

    if(message.content === "Bsr"){
        message.reply("Bonsoir");
    }

    if(message.content === "bonsoir"){
        message.reply("Bonsoir");
    }

    if(message.content === "bsr"){
        message.reply("Bonsoir");
    }

    if(message.content === "Hey"){
        message.reply("Salut");
    }

    if(message.content === "hey"){
        message.reply("Salut");
    }

    if(message.content === "Hey"){
        message.reply("Salut");
    }

    if(message.content === "Hey !"){
        message.reply("Salut");
    }

    if(message.content === "hey !"){
        message.reply("Salut");
    }

    if(message.content === "salut"){
        message.reply("Salut");
    }

    if(message.content === "slt"){
        message.reply("Salut");
    }

    if(message.content === "Slt"){
        message.reply("Salut");
    }

    if(message.content === "Re"){
        message.reply("Re");
    }

    if(message.content === "re"){
        message.reply("Re");
    }

    if(message.content === "Hello"){
        message.reply("Salut");
    }

    if(message.content === "hello"){
        message.reply("Salut");
    }

    if(message.content === "Coucou"){
        message.reply("Salut");
    }

    if(message.content === "cc"){
        message.reply("Salut");
    }

    if(message.content === "Hi"){
        message.reply("Salut");
    }

    if(message.content === "Hi !"){
        message.reply("Salut");
    }

    if(message.content === "hi"){
        message.reply("Salut");
    }

    if(message.content === "hi !"){
        message.reply("Salut");
    }
});
