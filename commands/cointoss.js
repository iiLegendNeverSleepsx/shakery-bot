module.exports.run = async (bot, message) => {
    const { premiumaccess } = require("/app/bot.js");
    if (premiumaccess.includes(message.author.role)) return message.reply("xdlol");
	if (premiumaccess) {
	 message.reply(`You flipped ${(Math.floor(Math.random() * 2)) ? "heads" : "tails"}!`).catch(() => bot.safeSend(message, module.exports.help.name));
    }
};
module.exports.help = {
	name: "cointoss",
	usage: "cointoss",
	description: "A fun command that flips a coin.",
	longdes: "Gives you either heads or tails.",
	mentionedperm: "PREMIUMACCESS",
	category: "Premium"
};
