const Discord = require('discord.js-selfbot-v13');
const { readFileSync } = require('fs');

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

    .setName('🥀! NotBlacknes </>')
    .setDetails('Discord Bots Developer.')


    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/avatars/1233698268584870010/59af548103283e995527e9cbfe59d640.webp?size=2048')
    .setAssetsLargeText('Developer of Raditic Bot, CattyPal Bot')
    .setAssetsSmallImage('https://cdn.discordapp.com/avatars/1153611682250227764/f68f534e605abf7ab9d350b3bdcd7cdd.png?size=1024')
    .setAssetsSmallText('🥀!NotBlackness </>')
        .addButton('My Discord Server', "https://discord.com/invite/3H8Rn93ccD")
    .addButton('Add Raditic Bot', "https://discord.com/oauth2/authorize?client_id=1233698268584870010&permissions=8&integration_type=0&scope=bot+applications.commands")

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" });
})

require('dotenv').config();
keepAlive();
client.login(process.env.token || readFileSync('token.txt', 'utf-8')); //Your account token

// man put ur token in secrets