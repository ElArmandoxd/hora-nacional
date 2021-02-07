// @ts-nocheck
const Discord = require('discord.js');
const express = require('express');
const app = expres();
const config = require('./config/config');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const CronJob = require('cron').CronJob;

const port = 3000;

app.listen(process.env.PORT || port)

client.on('ready', () => {
  console.log(`
──────────▄██▄▄
─▄▄█████▄─██▀
▀█████████▄██▄
▒▒▀██████████▀▒ 
▒▒▒▒▒█▄█▄▄▒▒▒▒▒

█ █▄░█ █▄▀ █▄█   █▀▀ ▄▀█ █▀█ ▀█▀ ▄▀█ █ █▄░█
█ █░▀█ █░█ ░█░   █▄▄ █▀█ █▀▀ ░█░ █▀█ █ █░▀█

Hora Nacional v 1.0.0

https://www.youtube.com/channel/UCPK3kiwEbpd2m5oGkA2Go8g
  `)
    console.log(`Logged in as ${client.user.tag}!`);
});

var job = new CronJob('00 00 00 * * 0-6', async function() {
    console.log('Himno Time!');
    let channel = client.channels.cache.get('807844491977424926');
    let connection = await channel.join();
    var dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=cDAjDDdPqvA&ab_channel=HimnosdeM%C3%A9xico', { filter: 'audioonly' }));
    dispatcher.setVolume(0.5); // half the volume
    dispatcher.on('finish', () => {
        console.log('Finished playing!');
          dispatcher.destroy();
          console.log("Se acabó el himno");
    });
  }, async function () {
    dispatcher.destroy();
    console.log("Se acabó el himno");
  },
  true,
);

client.on('message', msg => {
  if (msg.content === 'culo') {
    msg.reply('prestas');
  }
});

client.login(config.BOTSECRET);