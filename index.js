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

    .setName('🥀!NotBlacknes </>')
    .setDetails('I Love Coding Soo Much <3')


    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1233782937795821660/1236686412166856735/images_1_1.jpg?ex=6638e979&is=663797f9&hm=3a8cd0214b3cd46fb2019dc3027a9b717f6e0177da7ca4ceebdaf1fe92ffd287&')
    .setAssetsLargeText('Developer of CattyPal')
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1233782937795821660/1236686399999180861/IMG_20240423_210648-removebg-preview.png?ex=6638e976&is=663797f6&hm=a237809c2c5d20f98b13e58006d5d4402a07935e2031ce86baaf55ea3f462730&')
    .setAssetsSmallText('🥀!NotBlackness </>')
        .addButton('CattyPal Support Server', "https://discord.com/invite/yyudU8K6fe")
    .addButton('Add CattyPal', "https://discord.com/oauth2/authorize?client_id=1229438321395109929&permissions=8&scope=bot+applications.commands")

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" });
})

require('dotenv').config();
keepAlive();
client.login(process.env.token || readFileSync('token.txt', 'utf-8')); //Your account token

// man put ur token in secrets