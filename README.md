**A discord bot that sends specific messages if certain commands are typed**

The bot uses the [discord.io](https://izy521.gitbooks.io/discord-io/content/) api for discord bots. It requires [node.js](https://github.com/nodejs) 0.10.x or a higher version.

### Api Installation
Stable version ```npm install discord.io```
Latest version ```npm install izy521/discord.io```

### Node.js Installation
https://nodejs.org/en/download/

### Commands
In this code [example](https://github.com/Broundonb/OldSupportBot/blob/main/bot.js) you will note that the part shown below, there are lines of code which can be duplicated or modified repeatedly such as:

```
            case 'ip':
                bot.sendMessage({
                    to: channelID,
                    message: '[ip link]'
                });
            break;

            case 'store':
                bot.sendMessage({
                    to: channelID,
                    message: '[store link]'
                });
            break;

            case 'map':
                bot.sendMessage({
                    to: channelID,
                    message: '[map link]'
                });
            break;
         }
     }
});
```
