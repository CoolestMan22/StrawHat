const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("foot").setDescription("foot"),
  async execute(interaction, client) {
    // Wait TILL THIS CHECK ID DONE TO CONTINUE
    const Profile = await client.checkProfile(interaction.user);

    // Wait to continue till we get profile back
    await Profile;

    // If the user is banned, end the command
    if (Profile == "Banned") {
      return;
    }


    // Adds a monkey emoji, arrow pointing left, and spells out foot with reactions on the message above where the person did the command
    interaction.channel.messages.fetch({ limit: 1 }).then((messages) => {
      messages.first().react("🦶");
      messages.first().react("⬅️");
      messages.first().react("🇫");
      messages.first().react("🇴");
      messages.first().react("0️⃣");
      messages.first().react("🇹");
    });

    interaction.reply({
      content: "footed",
      ephemeral: true,
    });

    client.channels.cache
      .get("1013569553353150556")
      .send(
        `${interaction.user.tag} used the foot command in <#${interaction.channel.id}>`
      );
  },
};
