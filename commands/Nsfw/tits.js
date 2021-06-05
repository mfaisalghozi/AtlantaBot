const Discord = require('discord.js');
const superagent = require('snekfetch');
const client = require('nekos.life');
const neko = new client();
const rp = require('request-promise-native');

module.exports = {
    name: 'tits',
    category: 'nsfw',
    run: async (bot, message, args) => {
        if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
        let tits;
        tits = await neko.nsfw.tits()
        const lewdembed = new Discord.MessageEmbed()
            .setTitle("tits")
            .setImage(tits.url)
            .setColor(`#000000`)
        message.channel.send(lewdembed);
        message.delete();
    }
}