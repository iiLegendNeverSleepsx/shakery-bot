const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Invalid permissions! You need the `MANAGE_ROLES` permission!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("The user cannot be found.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role!");
  await(rMember.addRole(gRole.id));
});
};
module.exports.help = {
	name: "addrole",
	usage: "addrole <usr> <role>",
	description: "Gives a role specified.",
	longdes: "Gives a role specified.",
	mentionedperm: "MANAGE_ROLES",
	category: "Utility"
};
