/* eslint no-case-declarations: 0, no-empty: 0 */
const Composer = require('telegraf/composer');
const composer = new Composer();
const { onlyPrivate } = require('../middlewares');

composer.start(onlyPrivate, async ctx => {
  ctx.reply(`I'm nyaa.si website bot and i can help you to find some torrents on nyaa.si right here, in our beautiful Telegram!`, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: `Let's find some torrents!`,
            switch_inline_query_current_chat: ''
          }
        ]
      ]
    }
  })
});

module.exports = app => {
  app.use(composer.middleware())
};
