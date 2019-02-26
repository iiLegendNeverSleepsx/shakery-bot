const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.reply("You cannot run this command. You must be a HR+!");
	let embed = new Discord.RichEmbed()
		.setTitle("QOTD")
		.setColor("#63dfff")
		.setDescription(args.join(" "))
		.setFooter(`QOTD announced by ${message.author.tag}`, message.author.displayAvatarURL)
	  .setThumbnail("https://cdn.discordapp.com/attachments/541388616774057984/546105276491759658/asdas.png");
          bot.channels.get("548251105738358805").send("@here", {embed: embed}).then(() => {
		message.reply("Message sent!");
	}).catch(() => {
		message.reply("Something went wrong when announcing, please check my permissions and try again.");
	});
};
module.exports.help = {
	name: "qotd",
	usage: "qotd <txt>",
	description: "Qotd command.",
	longdes: "Qotd Command.",
	mentionedperm: "MANAGE_MESSAGE",
	category: "Utility"
};
