const eightBall = ['It is certain.',
  'It is decidely so.',
  'Without a doubt.',
  'Outlook Good.',
  'Most likely.',
  'Concentrate and ask again.',
  'Cannot predict now.',
  'Better not tell you now.',
  'Ask again later.',
  'My reply is no.',
  'Very doubtful.',
  'My sources say no.',
  'Don\'t count on it.'];

module.exports = {
  name: '8ball',
  category: 'user',
  description: 'Ask the 8 ball any question!',
  run: async (msg, args) => {
    if (!args.length) return;
    const i = Math.floor(Math.random() * eightBall.length);
    const reply = eightBall[i];
    await msg.channel.send(`${msg.author} ${reply}`);
  },
};
