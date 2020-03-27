// Command Handeler
const sendAvatar = require('./user/sendAvatar');
const eightBall = require('./user/8ball');
const ping = require('./info/ping');
const purge = require('./admin/purge');

const {
    ADMIN_ID,
    GUILD_ID,
    VILLAGER_ROLE_ID
} = require('../config');

const commands = {
    sendAvatar,
    ping,
    purge,
    '8ball': eightBall,
};

module.exports = async (msg) => {
    const { guild, author, member } = msg;
    if (author.bot) return;
    if (guild.id === GUILD_ID) {
        const args = msg.content.split(' ');
        if (args.length === 0 || args[0].charAt(0) !== '!') return;

        const command = args.shift().substring(1);
        if (command.length === 0) return;
        if (Object.keys(commands).includes(command)) {
            // Check admin privileges
            if (commands[command].category === 'administration' && !member.roles.cache.has(ADMIN_ID)) return;
            if (!(member.roles.cache.has(ADMIN_ID) || member.roles.cache.has(VILLAGER_ROLE_ID))) return;
            commands[command].run(msg, args);
        }
    }
};
