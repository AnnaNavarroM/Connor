const { Client, Collection } = require("discord.js");
const { token } = require("./botconfig.json");
const { RichEmbed } = require("discord.js")
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

/*Join*/
bot.on('guildMemberAdd', member =>{
    let embed = new RichEmbed()
        .setColor("#ff68a6")
        .setDescription(`Hello! ${member.displayName} Welcome to the DETROIT experience. I'm an Android and I'll be your hostess. Don't forget to introduce yourself in the introductions channel and read our general rules. I hope you have a pleasant experience!`)
        .setImage("https://media.giphy.com/media/h1u8MfSBJjaK1uocIu/giphy.gif")
        .setFooter("Chloe, your Android hostess.")
    member.guild.channels.get('571120764779102236').send(embed)
});

/*Quit*/
bot.on('guildMemberRemove', member =>{
    let embed = new RichEmbed()
        .setColor("#ff68a6")
        .setDescription(`I'm very sorry to see you leave ${member.displayName}. I mean... I guess I was hoping you could stay a little bit longer. But it's okay! If you ever happen to miss us, please, don't hesitate in coming back. I'll be waiting for you!`)
        .setImage("https://media.giphy.com/media/RHPNNdsCjcVea89srf/giphy.gif")
        .setFooter("Chloe, your Android hostess.")
    member.guild.channels.get('571141662726684683').send(embed)
 
});

bot.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Deviant"));
   
}),

bot.login(token);