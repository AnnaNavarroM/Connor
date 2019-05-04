module.exports = {
    config: {
        name: "softban",
        description: "Softbans a user from the guild!",
        usage: "!softban",
        category: "moderation",
        accessableby: "Administrators",
        aliases: ["sb", "sbanish", "sremove"]
    },
    run: async (bot, message, args) => {

   if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You don't have permission to perform this command!")

   let banMember = message.mentions.members.first() || message.guild.members.get(args[0]) 
   if(!banMember) return message.channel.send("Please, provide a user to ban!")

   let reason = args.slice(1).join(" ");
   if(!reason) reason = "You didn't give me a reason."

   if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to perform this command")

   banMember.send(`I'm very sorry, but you have been banned from ${message.guild.name} for: ${reason}. I hope we can all learn a lesson from this experience.`).then(() =>
   message.guild.ban(banMember, { days: 1, reason: reason})).then(() => message.guild.unban(banMember.id, { reason: "Softban"})).catch(err => console.log(err))

   message.channel.send(`**${banMember.user.tag}** has been banned`).then(m => m.delete(5000))

}}