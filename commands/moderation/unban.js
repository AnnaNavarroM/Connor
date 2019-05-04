const { RichEmbed } = require("discord.js")
const { redlight } = require("../../colours.json");

module.exports = {
    config: {
        name: "unban",
        description: "Unban a user from the guild!",
        usage: "!unban",
        category: "moderation",
        accessableby: "Administrators",
        aliases: ["ub", "unbanish"]
    },
    run: async (bot, message, args) => {

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You don't have permission to perform this command!")

		
	if(isNaN(args[0])) return message.channel.send("You need to provide an ID.")
    let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return message.channel.send("Please, provide a user ID in order to unban someone.")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "You didn't give me a reason."

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to perform this command.")|
    message.delete()
    try {
        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.tag} has been unbanned from the guild!`)
    } catch(e) {
        console.log(e.message)
    }}
}