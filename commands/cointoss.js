module.exports = { run: async (bot, message) => {
if (premiumaccess.includes(message.author.id)) {
		message.reply(`You flipped ${(Math.floor(Math.random() * 2)) ? "heads" : "tails"}!`).catch(() => bot.safeSend(message, module.exports.help.name));
