module.exports = {
  name: 'ping',
  category: 'info',
  description: 'Returns latency and API ping',
  run: async (msg) => {
    await msg.channel.send('pong');
  },
};
