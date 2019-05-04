const { RichEmbed } = require("discord.js")
const { aqua } = require("../../colours.json");
const fetch = require('node-fetch');


module.exports = { 
    config: {
        name: "dog",
        description: "Sends a picture of a dog!",
        usage: "!dog",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["doggo", "puppy"]
    },
    run: async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("Whoops! There seems to  be a problem. Please, try again!")

        let dEmbed = new RichEmbed()
        .setColor(aqua)
        .setAuthor(`I like dogs!`, message.guild.iconURL)
        .setImage(body.message)
        .setTimestamp()
        .setFooter("Connor, the Android sent by Cyberlife.")

            message.channel.send(dEmbed)
            msg.delete();
        })
    }
}
