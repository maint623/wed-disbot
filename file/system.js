const { Client, Intents, Collection,MessageAttachment } = require("discord.js"),
client = new Client( { intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES ] })
const fs = require('fs')
const express = require('express')
const app = express()
const bp = require('body-parser') 
app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())
const { token } = require("../config.json")

client.on("ready", () => {
    console.log(`bot tag : ${client.user.tag}`);
    console.log(`127.0.0.1:3000/message`);
    console.log(`127.0.0.1:3000/png`);
    console.log(`127.0.0.1:3000/embed`);
    console.log(`127.0.0.1:3000/log`);
  });

client.on("message", (message) => {
    
    if (message.author.bot) return;
    let today1 = new Date();  
    var today = new Date();  
  let year1 = today1.getFullYear(); // 년도
  let month1 = today1.getMonth() + 1;  // 월 
  var day = ('0' + today.getDate()).slice(-2);
  var hours = ('0' + today1.getHours()).slice(-2); 
  var minutes = ('0' + today1.getMinutes()).slice(-2);
  var seconds = ('0' + today1.getSeconds()).slice(-2); 
  var timeString = hours + ':' + minutes  + ':' + seconds;
    filePath = `./file/chatlog/chatlog - ${message.guild.id}.txt`;
  console.log(`${year1}년 ${month1}월 ${day}일 | ${timeString} | ${message.guild} | ${message.channel.name} / ${message.channel.id} | ${message.author.username} | ${message.content}`);
  fs.appendFile(filePath, `<br>${year1}년 ${month1}월 ${day}일 | ${timeString} | ${message.guild} | ${message.channel.name} / ${message.channel.id} | ${message.author.username} | ${message.content}</br> \n`, function (err) {
      if (err) throw err;
    });

    

    

})

exports.png = async function(req,res,message){
    const fileimg = new MessageAttachment(`./file/img/${req.file.filename}`)
    const channel = client.channels.cache.get(`${req.body.id}`);
    channel.send({files: [fileimg]});
}

exports.send = async function(req,res,message){
    let today1 = new Date();  
    var today = new Date();  
  let year1 = today1.getFullYear(); // 년도
  let month1 = today1.getMonth() + 1;  // 월
  let date1 = today1.getDate();  // 날짜
  let day1 = today1.getDay();  // 요일   
  var day = ('0' + today.getDate()).slice(-2);
  var hours = ('0' + today1.getHours()).slice(-2); 
  var minutes = ('0' + today1.getMinutes()).slice(-2);
  var seconds = ('0' + today1.getSeconds()).slice(-2); 
  var timeString = hours + ':' + minutes  + ':' + seconds;
    const channel = client.channels.cache.get(`${req.body.ch}`);
    channel.send(`${req.body.text}`);
}

exports.embed = async function(req,res,message){
    if(req.body.d1){
        if(req.body.d2){
            if(req.body.d3){
                if(req.body.d4){
                    if(req.body.d5){
                        const Discord = require('discord.js');
                        const embed = new Discord.MessageEmbed()
                        .setTitle(`${req.body.title}`)
                        .setDescription(`${req.body.Description}`) 
                        .addFields({name: `${req.body.d1}`, value: `${req.body.d11}`})
                        .addFields({name: `${req.body.d2}`, value: `${req.body.d22}`})
                        .addFields({name: `${req.body.d3}`, value: `${req.body.d33}`})
                        .addFields({name: `${req.body.d4}`, value: `${req.body.d44}`})
                        .addFields({name: `${req.body.d5}`, value: `${req.body.d55}`})
                        const channel = client.channels.cache.get(`${req.body.ch}`); 
                        channel.send({ embeds: [embed] });
                    }else{
                        const Discord = require('discord.js');
                        const embed = new Discord.MessageEmbed()
                        .setTitle(`${req.body.title}`)
                        .setDescription(`${req.body.Description}`) 
                        .addFields({name: `${req.body.d1}`, value: `${req.body.d11}`})
                        .addFields({name: `${req.body.d2}`, value: `${req.body.d22}`})
                        .addFields({name: `${req.body.d3}`, value: `${req.body.d33}`})
                        .addFields({name: `${req.body.d4}`, value: `${req.body.d44}`})
                        const channel = client.channels.cache.get(`${req.body.ch}`); 
                        channel.send({ embeds: [embed] });
                    }
                }else{
                    const Discord = require('discord.js');
                        const embed = new Discord.MessageEmbed()
                        .setTitle(`${req.body.title}`)
                        .setDescription(`${req.body.Description}`) 
                        .addFields({name: `${req.body.d1}`, value: `${req.body.d11}`})
                        .addFields({name: `${req.body.d2}`, value: `${req.body.d22}`})
                        .addFields({name: `${req.body.d3}`, value: `${req.body.d33}`})
                        const channel = client.channels.cache.get(`${req.body.ch}`); 
                        channel.send({ embeds: [embed] });
                }
            }else{
                const Discord = require('discord.js');
                        const embed = new Discord.MessageEmbed()
                        .setTitle(`${req.body.title}`)
                        .setDescription(`${req.body.Description}`) 
                        .addFields({name: `${req.body.d1}`, value: `${req.body.d11}`})
                        .addFields({name: `${req.body.d2}`, value: `${req.body.d22}`})
                        const channel = client.channels.cache.get(`${req.body.ch}`); 
                        channel.send({ embeds: [embed] });
            }
        }else{
            const Discord = require('discord.js');
                        const embed = new Discord.MessageEmbed()
                        .setTitle(`${req.body.title}`)
                        .setDescription(`${req.body.Description}`) 
                        .addFields({name: `${req.body.d1}`, value: `${req.body.d11}`})
                        const channel = client.channels.cache.get(`${req.body.ch}`); 
                        channel.send({ embeds: [embed] });
        }
    }else{
        const Discord = require('discord.js');
                        const embed = new Discord.MessageEmbed()
                        .setTitle(`${req.body.title}`)
                        .setDescription(`${req.body.Description}`) 
                        const channel = client.channels.cache.get(`${req.body.ch}`); 
                        channel.send({ embeds: [embed] });
    }
}
client.login(token);
//${req.body.text3} content: 'Hello!',  .addFields({name: `${req.body.d4}`, value: `${req.body.d44}`})
//${req.body.ch}  .addFields({name: `${req.body.d1}`, value: `${req.body.d11}`})