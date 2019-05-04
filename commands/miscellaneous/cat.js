const { RichEmbed } = require("discord.js")
const { pink } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "cat",
        description: "sends a picture of a cat!",
        usage: "!cat",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["catto"]
    },
    run: async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    fetch(`http://aws.random.cat/meow`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("Whoops! There seems to  be a problem. Please, try again!")

        let cEmbed = new RichEmbed()
        .setColor(pink)
        .setAuthor(`I like cats!`, message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()
        .setFooter("Chloe, your Android hostess.")

            message.channel.send(cEmbed)
            msg.delete();
        })
    }
}