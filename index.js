// @ts-nocheck
const Discord = require('discord.js');
const express = require('express');
const app = express();
const config = require('./config/config');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const CronJob = require('cron').CronJob;

const port = 3000;

client.on('ready', () => {
  console.log(`
                        __________▄██▄▄
                        ▄▄█████▄  ██▀
                        ▀█████████▄██▄
                        ▒▒▀██████████▀▒ 
                        ▒▒▒▒▒█▄█▄▄▒▒▒▒▒

          █ █▄░█ █▄▀ █▄█   █▀▀ ▄▀█ █▀█ ▀█▀ ▄▀█ █ █▄░█
          █ █░▀█ █░█ ░█░   █▄▄ █▀█ █▀▀ ░█░ █▀█ █ █░▀█

                      Hora Nacional v 1.10.0

    https://www.youtube.com/channel/UCPK3kiwEbpd2m5oGkA2Go8g
  `);
  console.log(`Logged in as ${client.user.tag}!`);
});

const job = new CronJob('22 00 00 * * 0-6', async function() {
    console.log('Himno Time!');
    let channel = client.channels.cache.get('807844491977424926');
    let connection = await channel.join();
    let dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=cDAjDDdPqvA&ab_channel=HimnosdeM%C3%A9xico', { filter: 'audioonly' }));
    dispatcher.setVolume(0.5); // half the volume
    dispatcher.on('finish', () => {
        console.log('Finished playing!');
        dispatcher.destroy();
        console.log("Se acabó el himno");
    });
  }, async function () {
    console.log("Se acabó el himno");
    return;
  },
  true,
);

client.on('message', msg => {
  if (msg.content === 'culo') {
    console.log(msg.user +" said a bad word!");
    msg.reply('Prestas');
  }
});

//Landing page
app.get('/',(req,res)=>{
  res.send('<h1>Hora Nacional!!</h1></br><p>Mexíco despertó cabrones.</p>')
});
client.login(config.BOTSECRET);
app.listen(process.env.PORT || port);