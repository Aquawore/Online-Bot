const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'Help-Command', []);
  }

 async run(client, message, args) {
   const messageToSay = args.join(" ");
   const sayEmbed = new Discord.MessageEmbed()
    .setTitle(`Commands for Dev. Bot`)
    .setDescription(`There are many commands that you can use on me. Here is a list that for them`)
    .addField('$say something', 'In place of something you can put whatever you want and the bot will say it.')
    .addField('$help','If your wondering what this command means do I really have to explain?')
    .addField('More commands coming soon!','If you have ideas ping the idea @Aquawore.')
    .setColor("#ed1b24")
    .setTimestamp()
    try {
      await message.channel.send(sayEmbed);
    }catch (err) {
      console.log(err);
      message.channel.send('I am not able to say that message.');

    }
      }
    }
