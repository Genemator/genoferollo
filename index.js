// Adding ip dotenv
require('./env');

// Importing bot handler and tokens, everything
const { bot } = require('./core/bot');

// Actions and logics of the bot
require('./actions')(bot);

// Commands of the bot, there are not so many commands but they
// are the beginning for the bot. Just a startup folder....
require('./commands')(bot);
