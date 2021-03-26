// @ts-nocheck
const Discord = require('discord.js');
const express = require('express');
const app = express();
const config = require('./config/config');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const CronJob = require('cron').CronJob;

let jwordjail = [{name: "not a name", counter: 0}];

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
  let channel = client.channels.cache.get('807844491977424926');
  channel.leave();
});

const job = new CronJob('00 00 04 * * 0-6', async () => {
    console.log('Himno Time!');
    let channel = client.channels.cache.get('807844491977424926');
    let connection = await channel.join();
    let dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=cDAjDDdPqvA', { filter: 'audioonly' }));
    dispatcher.setVolume(0.5); 
    dispatcher.on('finish', () => {
        dispatcher.destroy();
        channel.leave();
    });
  }, async () => {
    dispatcher.destroy();
    channel.leave();
    return;
  },
  true,
);

const jailJob = new CronJob('00 00 04 * * Monday', async () =>{
  
  }, async()=>{

  },
  true,
);

//Culo-prestas function
client.on('message', msg => {
  let splited = msg.content.split(' ');
  for(let i = 0; i < splited.length; i++){
    let s = splited[i];
    if(s.toUpperCase() === 'CULO' ) {
      console.log("Somebody said a bad word!");
      msg.reply('Prestas');
      return;
    }
  }
});

client.on('message', msg =>{
  let splited = msg.content.split(' ');
  for(let i = 0; i < splited.length; i++){
    let s = splited[i];
    if(s.toUpperCase() === 'JOTO' ) {
      homofoboJail(msg);
      return;
    }
  }
});

function homofoboJail(message){
  let us = null;
  for(let i = 0; i < jwordjail.length; i++){
    if(jwordjail[i].name == message.author.username){
      jwordjail[i].counter ++;
      us = jwordjail[i];
      message.reply('<:PeepoCop:728085789321330708> ¡ALTO AHI '+us.name+ ' HOMOFOBO QLIAO! <:PeepoCop:728085789321330708> Haz dicho la J word '+us.counter + ' veces. Te estaré vigilando.');
      return;
    }
    else if(i == (jwordjail.length-1)){
      let user = {
        name : message.author.username,
        counter: 1
      }
      jwordjail.push(user);
      us = user;
      message.reply('<:PeepoCop:728085789321330708> ¡ALTO AHI '+us.name+ ' HOMOFOBO QLIAO! <:PeepoCop:728085789321330708> Haz dicho la J word '+us.counter +' vez. Te estaré vigilando.');
      return;
    }
  }
}

//Landing page
app.get('/',(req,res)=>{
  res.send('<h1>Hora Nacional!!</h1></br><p>Mexíco despertó cabrones.</p>')
});
client.login(config.BOTSECRET);
app.listen(process.env.PORT || port);