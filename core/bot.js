// Telegraf connection
const Telegraf = require('telegraf').default;
const fs = require('fs');
const token = fs.readFile('./token/token.txt', 'utf8');
const bot = new Telegraf(token);
const logger = require('./database/logger');
const collection = require('./database');

bot.telegram.getMe()
    .then(botInfo => {
        bot.options.username = botInfo.username
    });

bot.context.db = collection;

bot.use(logger());

module.exports = {
    bot
};

bot.launch();

console.log('Bot started');
