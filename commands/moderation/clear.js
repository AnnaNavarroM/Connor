module.exports = {
    config: {
        name: "clear",
        description: "Clear messages from channel",
        usage: "!clear",
        category: "moderation",
        accessableby: "Moderator",
        aliases: ["delete", "bulk"]
    },
    run: async (bot, message, args) => {

        const deleteCount = parseInt(args[0], 10);
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You are not allowed to use this command.");
          
          if(!deleteCount || deleteCount < 1 || deleteCount > 100)
            return message.reply("Please, enter a number from 1 to 100 for me to delete.");
         
          const fetched = await message.channel.fetchMessages({limit: deleteCount});
          message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Unable to delete messages due to: ${error}`));
        

    }}            