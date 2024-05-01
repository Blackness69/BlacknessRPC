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
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1233782937795821660/1235196535847915623/images_1_1.jpg?ex=66337dea&is=66322c6a&hm=e5e652064f09bf70b4ade7de7f71b8abb73a9af61b41ff67447b78576e7894b7&')
    .setAssetsLargeText('Developer of CattyPal')
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1233782937795821660/1235196527962619914/IMG_20240423_210648-removebg-preview.png?ex=66337de9&is=66322c69&hm=62632096c1e488d4ab7b93f0f5d84f46494b5fd613db8148a3c1104848dd15d9&')
    .setAssetsSmallText('🥀!NotBlackness </>')
        .addButton('CattyPal Support Server', "https://discord.com/invite/yyudU8K6fe")
    .addButton('Add CattyPal', "https://discord.com/oauth2/authorize?client_id=1229438321395109929&permissions=8&scope=bot+applications.commands")

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})

require('dotenv').config();
keepAlive();
client.login(process.env.token || readFileSync('token.txt', 'utf-8')); //Your account token

// man put ur token in secrets