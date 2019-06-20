const Composer = require('telegraf/composer');
const composer = new Composer();
const { bot } =  require('../core/bot.js');
const { onlyPrivate } = require('../middlewares');
const _ = require('lodash');
require('underscore');

let greetings = [
    "Hi", "hi",
    "Hello", "hello",
    "Howdy", "howdy"
];

let randomGreetingsResponse = _.sample([
    "Hello my friend",
    "Hi, dear",
    "Howdy!"
]);

bot.hears(greetings, onlyPrivate, async ctx => {
    ctx.reply(greetingsResponse);
});

module.exports = app => {
    app.use(composer.middleware())
};
