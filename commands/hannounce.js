const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You cannot run this command. You must be a HR+!");
	let embed = new Discord.RichEmbed()
		.setTitle("Shakery Announcement")
		.setColor("#ff4b4b")
		.setDescription(args.join(" "))
		.setFooter(`Announcement made by ${message.author.tag}`, message.author.displayAvatarURL)
	        .setThumbnail("https://cdn.discordapp.com/attachments/541388616774057984/546105276491759658/asdas.png");
          bot.channels.get("548242441610854414").send("@here", {embed: embed}).then(() => {
		message.reply("Message sent!");
	}).catch(() => {
		message.reply("Something went wrong when announcing, please check my permissions and try again.");
	});
};
module.exports.help = {
	name: "hannounce",
	usage: "hannounce <txt>",
	description: "Announcement command using here.",
	longdes: "An announcement command using here.",
	mentionedperm: "MANAGE_ROLES",
	category: "Utility"
};
