const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
const keepAlive = require("./server")

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - Hogaya re tera jake dekh le`
  )
  bitly_axel = "https://bit.ly/3oQZWb0"

  const r = new Discord.RichPresence()
    .setApplicationId('1079010612769722508')
    .setType('LISTENING') 
    .setURL('https://bit.ly/3oQZWb0')
    .setState('JavaScript Discord Bot Developer')

    .setName('🥀!NotBlacknes </>')
    .setDetails('I Love Coding Soo Much <3')


    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1209078672993165312/1232035529411792936/images_1_1.jpg?ex=6627fe00&is=6626ac80&hm=38980b252589ed501195b0578b6faa2ad3574db3eed3f29de29101e982bebbf9&')
    .setAssetsLargeText('Developer of CattyPal')
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1209078672993165312/1232035502157332510/IMG_20240422_193744.jpg?ex=6627fdf9&is=6626ac79&hm=b3c77e896ee05f3b9cf9708092d723f37ef9f68c74221a2348e69aa57b35a244&')
    .setAssetsSmallText('🥀!NotBlackness </>')
        .addButton('CattyPal Support Server', "https://discord.com/invite/286Faxc5nd")
    .addButton('Add CattyPal', "https://discord.com/oauth2/authorize?client_id=1229438321395109929&permissions=8&scope=bot+applications.commands")

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})

require('dotenv').config();
keepAlive();
client.login(process.env.token) //Your account token

// man put ur token in secrets