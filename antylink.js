const Discord = require('discord.js');
const client = new Discord.Client();

const roladziwkoooopermisje = ''; // ID ROLI KTORA MOZE WYSYLAC LINKI 

client.on('ready', () => {
  console.log(`Twoja matka utonela zjadla kolbe wyplynela pod nazwa: ${client.user.tag}`);
});

client.on('message', (message) => {
  if (message.content.includes('dsc.gg') || message.content.includes('discord.gg')) {
    const member = message.guild.member(message.author);
    if (!member.roles.cache.has(roladziwkoooopermisje)) {
      message.delete();
      message.reply('Kurwo nie wysylaj linkow!');
    }
  }
});