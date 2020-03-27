module.exports = {
  name: 'avatar',
  category: 'user',
  description: 'Reply to the user with their profile picture',
  run: async (msg) => {
    await msg.channel.send(`${msg.author} ${msg.author.displayAvatarURL()}`)
      .then(console.log('Displayed avatar'))
      .catch((m) => m.channel.send('Sorry, Avatar does not exist').delete({ timeout: 5000 })
        .then(console.log('Sent Reply'))
        .catch(console.error));
  },
};
