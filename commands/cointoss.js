const bot = require("../bot.js");
const client = bot;
const client.premiumacess = require("../bot.js");
module.exports.run = async (bot, message, args) => {
if (client.premiumaccess.includes(message.author.role)) {
message.reply(`You flipped ${(Math.floor(Math.random() * 2)) ? "heads" : "tails"}!`).catch(() => bot.safeSend(message, module.exports.help.name));
	}
};
module.exports.help = {
	name: "cointoss",
	usage: "cointoss",
	description: "Gives you heads or tails.",
	longdes: "A cointoss command.",
	mentionedperm: "PREMIUM",
	category: "Premium"
};
