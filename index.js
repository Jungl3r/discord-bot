const Discord = require("discord.js");

const Client = new Discord.Client;

Client.on("ready", () => {
    console.log("Le bot est actuellement opérationnel");
});

Client.on('ready', () => {
    Client.user.setActivity('Jungl3r Cup', {type: 'STREAMING' , url: 'https://www.twitch.tv/jungl3rtv' })
});

Client.login(process.env.TOKEN);
