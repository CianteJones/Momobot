module.exports = {
    name: 'purge',
    category: 'administration',
    description: 'Remove <num> messages from the channel.',
    run: async (msg, args) => {
        msg.delete();
        if (!args.length) {
            return msg.channel.send('Input number of messages to purge.')
                .then((m) => m.delete({ timeout: 5000 }))
                .catch((console.error));
        }

        if (isNaN(args[0])) {
            return msg.channel.send('Input a number.')
                .then((m) => m.delete({ timeout: 5000 }))
                .catch((console.error));
        }

        const fetched = await msg.channel.messages.fetch({ limit: args[0] });
        return msg.channel.bulkDelete(fetched)
            .then(console.log(`${fetched.size} messages found, deleting...`))
            .catch(console.error);
    },
};
