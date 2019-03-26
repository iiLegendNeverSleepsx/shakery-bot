const Discord = require("discord.js");
const fs = require("fs"); 

const special = {
  "293060399106883584": "Bot Administrator & Developer"
}

module.exports.run = async (bot, message, args) => {
    const user = (message.mentions.members.first() || response.guild.members.get(args[0]))
    
    if (!user) return message.reply('Oops! That is not a valid user!')
    
    const embed = new Discord.RichEmbed()
    .setTitle(user.user.username + '\'s Info')
    .setColor("#94d8ff")
    .addField('Display Colour', user.displayHexColor)
    .addField('Highest Role', user.highestRole)
    .addField('ID', user.id)
    .addField('Server ID', bot.guilds.get(message.guild.id).id;)
    .setThumbnail(user.user.avatarURL)
    
    if (user.nickname && user.nickname != null) {
       embed.addField('Nickname', user.nickname)
    }
    
    if (special[user.id]) {
      embed.addField('Official Note', special[user.id])
    }
	
    embed.addField('Options', '[View Avatar](' + user.user.avatarURL + ')')
    message.channel.send({embed})
}

module.exports.help = {
	name: "userinfo",
	usage: "whois",
	description: "Get info on a user",
	longdes: "Gets information on a user.",
	mentionedperm: "None",
  category: "Moderation"
}
