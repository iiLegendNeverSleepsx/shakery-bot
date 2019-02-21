const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot run this command. You must be a HR+!");
	let embed = new Discord.RichEmbed()
		.setTitle("Shakery Announcement")
		.setColor("#ff4b4b")
		.setDescription(args.join(" "))
	        .setThumbnail("https://cdn.discordapp.com/attachments/541388616774057984/546105276491759658/asdas.png")
		.setFooter(`Announcement made by ${message.author.tag}`, message.author.displayAvatarURL);
	bot.channels.get("548242441610854414").send("@everyone", {embed: embed}).then(() => {
		message.reply("Message sent!");
	}).catch(() => {
		message.reply("Something went wrong when announcing, please check my permissions and try again.");
	});
};
module.exports.help = {
	name: "eannounce",
	usage: "eannounce <txt>",
	description: "Announcement command using everyone.",
	longdes: "An announcement command using everyone.",
	mentionedperm: "MANAGE_ROLES",
	category: "Utility"
};
