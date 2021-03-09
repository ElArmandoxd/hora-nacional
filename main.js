const Discord = require('discord.js');
const config = require('./config/config');
const client = new Discord.Client();

client.on('ready', ()=>{
    console.log("bip bop, bot listo");
});

client.login(config.BOTSECRET);