module.exports = {
    config: {
        name: "shutdown",
        description: "shuts down the bot!",
        usage: "!shutdown",
        category: "moderation",
        accessableby: "Bot Owner",
        aliases: ["botstop"]
    },
    run: async (bot, message, args) => {

    if(message.author.id != "293076950044639243") return message.channel.send("You're my owner.")

    try {
        await message.channel.send("If you'll excuse me, I must go into standby mode for a moment. I'll be back in just a little bit!")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
    


    }
}