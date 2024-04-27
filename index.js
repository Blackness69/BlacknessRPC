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
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1209078672993165312/1232904347877113866/images_1_1.jpg?ex=662b2726&is=6629d5a6&hm=6fe37bf0827de6d24974fddc2e3f191933a9e5b6c4e71a64b00aacbfdb67de84&')
    .setAssetsLargeText('Developer of CattyPal')
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1209078672993165312/1232744735051874366/IMG_20240423_210648-removebg-preview.png?ex=662a9280&is=66294100&hm=1f857223fbec425669b783c584a260d25efea38926251b8f59c107584ecdeb79&')
    .setAssetsSmallText('🥀!NotBlackness </>')
        .addButton('CattyPal Support Server', "https://discord.com/invite/YfN898gyUG")
    .addButton('Add CattyPal', "https://discord.com/oauth2/authorize?client_id=1229438321395109929&permissions=8&scope=bot+applications.commands")

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})

require('dotenv').config();
keepAlive();
client.login(process.env.token || readFileSync('token.txt', 'utf-8')); //Your account token

// man put ur token in secrets