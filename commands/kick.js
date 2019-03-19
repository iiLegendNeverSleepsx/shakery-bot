
module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR"))
		return message.reply("Insufficent permissions! You need to have the `KICK_MEMBERS` permission!");

	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	if (!member)
		return message.reply("Please mention a valid member of this server!");
	if (!member.kickable)
		return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

	let reason = args.slice(1).join(" ");
	if (!reason) reason = "No reason provided";

	const wUser = member;

	await member.kick(reason)
		.catch((error) => message.reply(`Sorry ${message.author}, I couldn't kick because of : ${error}`));
	require("../resources/embed.js").log("Moderation Action - Kick", `**User:** ${wUser.user.tag} \n**Moderator:** ${message.author.tag} \n**Reason:** ${reason}`, message);
	wUser.send(`Hey! You have been kicked from **${message.guild.name}** because of **${reason}**.`);
	message.channel.send(`Okay, ${wUser.user.tag} was kicked for ${reason}, ${message.author.tag}.`);
};

module.exports.help = {
	name: "kick",
	usage: "kick <user> [reason]",
	description: "nil",
	longdes: "Kicks the user given.",
	mentionedperm: "KICK_MEMBERS",
	category: "Moderation"
};
