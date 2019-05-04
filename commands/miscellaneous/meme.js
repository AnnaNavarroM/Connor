const { RichEmbed } = require("discord.js")
const { pink } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "meme",
        description: "Sends a meme from a website!",
        usage: "!meme",
        category: "miscellaneous",
        accessableby: "Members",
    },
    run: async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    fetch(`https://api-to.get-a.life/meme`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("Whoops! There seems to  be a problem. Please, try again!")

        let mEmbed = new RichEmbed()
        .setColor(pink)
        .setAuthor(`Here's a meme to make you happy!`, message.guild.iconURL)
        .setImage(body.url)
        .setTimestamp()
        .setFooter("Chloe, your Android hostess.")

            message.channel.send(mEmbed)
            msg.delete();
        })
    }
}