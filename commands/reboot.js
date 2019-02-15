module.exports.run = async (bot, message) => {
	const allowedid = ['250082335238651905','529635957306032130','293060399106883584'];
	if (allowedid.includes(message.author.id)) {
		message.react("✅");
		bot.destroy();
		bot.login(process.env.BOT_T0KEN);
		let timestamp = new Date();
		await console.log("I have successfully rebooted!");
		await message.channel.send("All done, I have rebooted my systems!");
	}
};

module.exports.help = {
	name: "reboot",
	usage: "reboot",
	description: "nil",
	longdes: "Restarts the bot.",
	mentionedperm: "DEVELOPER",
	category: "Developer"
};
