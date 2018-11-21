const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot run this command. You must be a HR+!");
    message.channel.send("@here")
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Server Announcement",
    description: "\n",
	fields: [{
        name: "\n",
        value: args.join(" ")
	},
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Announce made by ${message.author.tag}"
   }
 }
}); message.delete();}
	    
module.exports.help = {
	name: "announce",
	usage: "announce <txt>",
	description: "Announcement command.",
	longdes: "An announcement command.",
	mentionedperm: "MANAGE_ROLES",
        category: "Utility"
}