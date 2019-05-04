const { Client, Collection } = require("discord.js");
const { token } = require("./botconfig.json");
const { RichEmbed } = require("discord.js")
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

const includesOneOfTheFollowing = (msg, list) => {
  for (const word of list) {
    if (msg.includes(word)) {
      return true;
    }
  }
  return false;
}

function HrandomMessage(){
  var randomNumber = Math.round(Math.random()*2); // 0, 1 or 2
  switch(randomNumber){
      case 0: return "Hello!";
      case 1: return "Hi! It's nice to see you.";
      case 2: return "Glad to see you're back!";
  }
}

const { RichEmbed } = require("discord.js")
const { aqua } = require("colours.json");

    let msg = message.content.toLowerCase();
     if (message.isMentioned(bot.user))
     if (includesOneOfTheFollowing(msg, ["hi","hello", "hey", "hiya", "heya", "heyo", "oi", "ei", "olá"])) {
         let Embed = new RichEmbed()
         .setColor(aqua)
         .sDescription(HrandomMessage)
     message.channel.send(Embed);
    }
    else if (includesOneOfTheFollowing(msg, ["your model", "model are you"])) {
      let Embed = new RichEmbed()
        .setColor(aqua)
        .setDescription("I'm an RK800 model. I'm a prototype!")
      message.channel.send(Embed);
    }

bot.login(process.env.TOKEN);
