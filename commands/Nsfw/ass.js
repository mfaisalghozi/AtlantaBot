const Discord = require('discord.js');
const superagent = require('snekfetch');

const rp = require('request-promise-native');

module.exports = {
    name: 'ass',
    category: 'nsfw',
    run: async (bot, message, args) => {
        if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')

        return rp.get('http://api.obutts.ru/butts/0/1/random')
        .then(JSON.parse)
        .then(res => {
            return rp.get({
                url: 'http://media.obutts.ru/' + res[0].preview,
                encoding: null
            });
        }).then(res => {

            const lewdembed = new Discord.MessageEmbed()
                .setTitle("Ass")
                .setColor(`#000000`)
                .setImage("attachment://file.png").attachFiles([{
                    attachment: res,
                    name: "file.png"
                }])

            message.channel.send(lewdembed);
            message.delete();
        });
    }
}