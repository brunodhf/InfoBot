var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: Bot1');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // It will listen for messages that will start with `-`
    if (message.substring(0, 1) == '-') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // -command
            case 'map':
                bot.sendMessage({
                    to: channelID,
                    message: 'http://map.justanearthserver.net/'
                });
                break;
            case 'store':
                bot.sendMessage({
                    to: channelID,
                    message: 'http://shop.justanearthserver.net/'
                });
                break;
            case 'ip':
                bot.sendMessage({
                    to: channelID,
                    message: '**JAVA:** justanearthserver.net **BEDROCK:** IP: 157.90.221.184 Port: 4344'
                });
                break;
            case 'discord':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://discord.gg/qha8hS8'
                });
                break;
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'Under development...'
                });
                break;
            case 'rules':
                bot.sendMessage({
                    to: channelID,
                    message: 'http://bit.ly/3qdCHmh'
                });
                break;
            case 'new':
                // Creates a channel called #ticket-[number] with -new https://discord.com/developers/docs/resources/guild#create-guild-channel
                // only staff members & ticket creator can see channel (& send messages) https://discord.com/developers/docs/resources/channel#edit-channel-permissions
                // ticket bot pings a random staff member on the bot "Support message"
                // channel position https://discord.com/developers/docs/resources/channel#modify-channel
                // close ticket https://discord.com/developers/docs/resources/channel#deleteclose-channel
                // -close to close ticket
                var server = message.guild;
                var name = "ticket-[]";
            
                server.createChannel(name, "text");
                bot.sendMessage({
                    to: channelID,
                    message: ''
                });
            break;
         }
     }
});