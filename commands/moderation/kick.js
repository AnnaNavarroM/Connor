module.exports = {
    config: {
        name: "kick",
        description: "Kick a user from the guild!",
        usage: "!kick",
        category: "moderation",
        accessableby: "Moderator",
        aliases: ["k"]
    },
    run: async (bot, message, args) => {

    if(!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You don't have permission to perform this command!")

    let kickMember = message.mentions.members.first() || message.guild.members.get(args[0]) 
    if(!kickMember) return message.channel.send("Please, provide a user to kick.")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "You didn't give me a reason."

    if(!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to do this!")

    kickMember.send(`I'm very sorry, but you have been kicked from ${message.guild.name} for: ${reason}. I hope we can all learn a lesson from this experience.`).then(() => 
    kickMember.kick()).catch(err => console.log(err))

    message.channel.send(`**${kickMember.user.tag}** has been kicked`).then(m => m.delete(5000))

}}