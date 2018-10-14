const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();

var prefix = "a!";

var cp ="a!";

bot.login(process.env.TOKEN);

bot.on("ready", async () => {

console.log(`${bot.user.tag} is Online!`);

bot.user.setActivity("Anti-Vent", {type: "WATCHING"});

bot.user.setStatus("online");

});

bot.on('message', async message => { 

    if(message.content === "Bonjour"){
        message.reply("Bonjour");
    }

    if(message.content === "bjr"){
        message.reply("Bonjour");
    }

    if(message.content === "bonjour"){
        message.reply("Bonjour");
    }

    if(message.content === "Bjr"){
        message.reply("Bonjour");
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
        message.reply("Hey");
    }

    if(message.content === "hey"){
        message.reply("Hey");
    }

    if(message.content === "Hey Salut"){
        message.reply("Hey");
    }

    if(message.content === "Hey salut"){
        message.reply("Hey");
    }

    if(message.content === "hey salut"){
        message.reply("Hey");
    }

    if(message.content === "Hey !"){
        message.reply("Hey");
    }

    if(message.content === "hey !"){
        message.reply("Hey");
    }

    if(message.content === "Salut"){
        message.reply("Salut");
    }

    if(message.content === "salut"){
        message.reply("Salut");
    }

    if(message.content === "Salut !"){
        message.reply("Salut");
    }

    if(message.content === "salut !"){
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
        message.reply("Hello");
    }

    if(message.content === "hello"){
        message.reply("Hello");
    }

    if(message.content === "Coucou"){
        message.reply("Coucou");
    }

    if(message.content === "cc"){
        message.reply("Coucou");
    }

    if(message.content === "Cc"){
        message.reply("Coucou");
    }

    if(message.content === "coucou les amis"){
        message.reply("Coucou");
    }

    if(message.content === "Coucou les amis"){
        message.reply("Coucou");
    }

    if(message.content === "Kuku"){
        message.reply("Coucou");
    }

    if(message.content === "kuku"){
        message.reply("Coucou");
    }

    if(message.content === "Hi"){
        message.reply("Hi");
    }

    if(message.content === "Hi !"){
        message.reply("Hi");
    }

    if(message.content === "hi"){
        message.reply("Hi");
    }

    if(message.content === "hi !"){
        message.reply("Hi");
    }
});


  client.on('message', async message => {
    if(message.content.startsWith(prefix + "countserver")) {
        if(message.author.id == "418152273391124481") {
        message.channel.send(client.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
    }

    if (message.content.startsWith(prefix + "invitation")) {
        message.reply("Envie d'inviter le bot Anti-Vent ? Voici le lien : https://discordapp.com/oauth2/authorize?client_id=500566994442125312&scope=bot&permissions=67648");
        console.log('guild');
    }
}})
