module.exports.run = async (bot, message) => {
const premiumaccess = ['556196885946302468','556196932221927454'];
    if (premiumaccess.includes(message.author.role)) then =>
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
