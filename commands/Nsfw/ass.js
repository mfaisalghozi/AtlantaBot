const Command = require("../../base/Command.js"),
	Discord = require("discord.js"),
    rp = require('request-promise-native')
class AssNsfw extends Command {

	constructor (client) {
		super(client, {
			name: "ass",
			dirname: __dirname,
			enabled: true,
			guildOnly: true,
			aliases: ["ass"],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: true,
			ownerOnly: false,
			cooldown: 1000
		});
	}

	async run (message) {
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

module.exports = AssNsfw;