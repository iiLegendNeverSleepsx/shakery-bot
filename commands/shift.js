const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You cannot run this command. You must be a MR+!");
	let embed = new Discord.RichEmbed()
		.setTitle("Shakery Shift")
		.setColor("#63dfff")
		.setDescription("Hello everyone! There is a shift going on at the cafe! Come on and join me for a luxrious time! https://www.roblox.com/games/2693333108/Shakery-V2")
		.setFooter(`Shift hosted by ${message.author.tag}`, message.author.displayAvatarURL)
	  .setThumbnail("https://cdn.discordapp.com/attachments/541388616774057984/546105276491759658/asdas.png");
          bot.channels.get("548243671800217600").send("@here", {embed: embed}).then(() => {
		message.reply("Message sent!");
	}).catch(() => {
		message.reply("Something went wrong when announcing, please check my permissions and try again.");
	});
};
module.exports.help = {
	name: "shift",
	usage: "shift",
	description: "Shift command.",
	longdes: "Shift Command.",
	mentionedperm: "KICK_MEMBERS",
	category: "Utility"
};
