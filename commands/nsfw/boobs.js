const { Command } = require("discord.js-commando");
const createEmbed = require("@utils/CreateEmbed");

const superagent = require("superagent");

module.exports = class BoobsCommand extends Command {
    constructor(client) {
        super(client, {
            name: "boobs",
            aliases: ["tits"],
            group: "nsfw",
            memberName: "boobs",
            description: "Sends a picture of boobs.",
            nsfw: true
        });
    };

    async run(message) {
        superagent.get("https://nekobot.xyz/api/image?type=boobs").end((err, response) => {
            let embed = createEmbed({
                title: "Ashlyn: NSFW",
                image: (err || response.body.message),
                thumbnail: false
            });

            return message.embed(embed);
        });
    };
};