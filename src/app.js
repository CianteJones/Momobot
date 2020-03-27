const Discord = require('discord.js');

const commandHandler = require('./commands');

const {
    GUILD_ID,
    WELCOME_CHANNEL_ID,
    RULES_MESSAGE_ID,
    VILLAGER_ROLE_ID
} = require('./config');

require('dotenv').config();

const client = new Discord.Client();

client.once('ready', () => {
    console.log(`Logged in as: ${client.user.tag}`);

    // Put pinned message in cache
    client.channels.cache.get(WELCOME_CHANNEL_ID).messages.fetchPinned();

    client.user.setPresence({
        status: 'online',
        game: {
            name: 'Getting Developed ^_^',
            type: 'WATCHING',
        },
    });
});


client.on('message', commandHandler);

client.on('messageReactionAdd', (reaction, user) => {
    // console.log(reaction);
    const role = client.guilds.cache.get(GUILD_ID).roles.cache.get(VILLAGER_ROLE_ID);
    const member = client.guilds.cache.get(GUILD_ID).members.cache.get(user.id);
    if(member.roles.cache.size <= 2 && !member.roles.cache.has(VILLAGER_ROLE_ID)) {
        member.roles.add(role)
            .then(console.log('Adding Role!'))
            .catch(console.error);
    }
});

client.login(process.env.BOT_TOKEN);
