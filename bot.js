var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.setPresence( { "idle_since":null,"game":{"name":"Support"}} );
;
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '-') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'inc':
                bot.sendMessage({
                    to: channelID,
                    message: 'This ticket will be deleted due to user inactivity'
                });
            break;
         }
     }
});