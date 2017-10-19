const Discord = require('discord.js');
const ms = require('ms');
var getJSON = require('get-json');
var YTDL = require('ytdl-core');
const chalk = require('chalk');
var colors = require('colors');
var ytdl = require('youtube-dl')

var findYoutubeUrls = require('find-youtube-urls');
const SteamTotp = require('steam-totp');
var fs = require('fs');
var shuffle = require('shuffle-array');
var memes = require('dankmemes');
const GoogleImages = require('google-images');
var path = require('path');
var fs   = require('fs');

const configS = require('./ConfigSammy.json');
const configJ = require('./ConfigJack.json');
const configB = require('./ConfigBen.json');

var JackCode = SteamTotp.getAuthCode(configJ.sharedSecret);
var BenCode = SteamTotp.getAuthCode(configB.sharedSecret);
var SammyCode = SteamTotp.getAuthCode(configS.sharedSecret);

var settings = './settings.json';
var file = require(settings)

require('console-stamp')(console, '[HH:MM:ss]');

const TOKEN = file.TOKEN;
const GreenStyle = chalk.green;

var EmbedColors = [
    "0xFF0000", //red
    "0x00FF00", //green
    "0xFFFF00", //yellow
    "0xA52A2A", //brown
    "0xFFA500", //orange
    "0x0000FF" //blue
];

var fortunes = [
    "yes",
    "no",
    "maybe",
    "dont know, try again"
];

var hd = [
    "Heads",
    "Tails"
];

var cross = new Discord.RichEmbed()
         .addField("Crosshair:", "cl_crosshair_drawoutline \"0\" \n" +
                                "cl_crosshair_dynamic_maxdist_splitratio \"0.35\" \n" +
                                "cl_crosshair_dynamic_splitalpha_innermod \"1\" \n" +
                                "cl_crosshair_dynamic_splitalpha_outermod \"0.5\" \n" +
                                "cl_crosshair_dynamic_splitdist \"7\" \n" +
                                "cl_crosshair_outlinethickness \"1\" \n" +
                                "cl_crosshair_sniper_width \"1\" \n" +
                                "cl_crosshairalpha \"255\" \n" +
                                "cl_crosshaircolor \"1\" \n" +
                                "cl_crosshaircolor_b \"0\" \n" +
                                "cl_crosshaircolor_g \"0\" \n" +
                                "cl_crosshaircolor_r \"255\" \n" +
                                "cl_crosshairdot \"0\" \n" +
                                "cl_crosshairgap \"-3\" \n" +
                                "cl_crosshairgap_useweaponvalue \"0\" \n" +
                                "cl_crosshairscale \"0\" \n" +
                                "cl_crosshairsize \"2\" \n" +
                                "cl_crosshairstyle \"4\" \n" +
                                "cl_crosshairthickness \"1\" \n" +
                                "cl_crosshairusealpha \"1\" \n" +
                                "cl_fixedcrosshairgap \"-4.5\" \n", true)

         .addField("Copy Part 1:", "cl_crosshair_drawoutline 0; cl_crosshair_dynamic_maxdist_splitratio 0.35; cl_crosshair_dynamic_splitalpha_innermod 1; cl_crosshair_dynamic_splitalpha_outermod 0.5; cl_crosshair_dynamic_splitdist 7; cl_crosshair_outlinethickness 1", true)
         .addField("Copy Part 2:", "cl_crosshaircolor_r 255; cl_crosshairdot 0; cl_crosshairgap -3; cl_crosshairgap_useweaponvalue 0; cl_crosshairscale 0; cl_crosshairsize 2; cl_crosshairstyle 4; cl_crosshairthickness 1; cl_crosshairusealpha 1", true)
         .addField("Copy Part 3:", "cl_fixedcrosshairgap -4.5; cl_crosshair_sniper_width 1; cl_crosshairalpha 255; cl_crosshaircolor 1; cl_crosshaircolor_b 0; cl_crosshaircolor_g 0", true)

         .setColor(EmbedColors[Math.floor(Math.random() * EmbedColors.length)])
         .setFooter("ENTER PART 1 INTO CONSOLE THEN PRESS ENTER, THEN ENTER PART 2 INTO CONSOLE THEN PRESS ENTER, THEN COPY AND PASTE PART 3 INTO CONSOLE AND PRESS ENTER!")

var view = new Discord.RichEmbed()
        .addField("Viewmodel:", "viewmodel_fov \"68\" \n" +
                               "viewmodel_offset_x \"2.500000\" \n" +
                               "viewmodel_offset_y \"2.0\" \n" +
                               "viewmodel_offset_z \"-2.000000\" \n" +
                               "viewmodel_presetpos \"0\" \n", true)

        .addField("Copy & Paste:", "viewmodel_fov 68; viewmodel_offset_x 2.500000; viewmodel_offset_y 2.0; viewmodel_offset_z -2.000000; viewmodel_presetpos 0", true)

        .setColor(EmbedColors[Math.floor(Math.random() * EmbedColors.length)])
        .setFooter("COPY AND PASTE THE LINE OF COMMANDS INTO CONSOLE AND HIT ENTER TO GET BENS VIEWMODEL!")

var rules1 = new Discord.RichEmbed()
        .addField("Rules (1/2):", "---------------------------------------------------------------------------------------\n" +
                                  "__**1.**__ No spamming or flooding the chat with messages, symbols or pictures etc. \n" +
                                  "__**2.**__ Do not type in all Caps, Bold, Italic or other formats unless you're a  Admin. \n" +
                                  "__**3.**__ adult (18+), explicit images etc, go to the NSFW channel \n" +
                                  "__**4.**__ No racist or degrading content.\n" +
                                  "__**5.**__ No excessively cursing. \n" +
                                  "__**6.**__ No advertising other sites/discord servers without permission. \n" +
                                  "__**7.**__ No posting external links other than direct links to youtube\n", true)

        .setColor("0xFF0000")

var rules2 = new Discord.RichEmbed()
        .addField("Rules (2/2):", "__**8.**__ No using peoples usernames and/or posing as them. \n" +
                                  "__**9.**__ No begging or repeatedly asking for permissions in the chat. \n" +
                                  "__**10.**__. No offensive names or names which contain swear words. \n" +
                                  "__**11.**__ Do not argue with staff there decisions are final. \n" +
                                  "__**12.**__ Do not repeatedly message Moderators or Admins without permission \n" +
                                  "__**13.**__ Do not message people, Moderators or Admins with \"Stupid\" questions \n" +
                                  "---------------------------------------------------------------------------------------\n", true)

        .setColor("0xFF0000")

var role = new Discord.RichEmbed()
        .addField("Role Hierarchy", "-------------------------------------------------------------------------------------------------\n" +
                                    "__**Admin:**__ Highest Ranking Person On The Server always respect them or be penalized! \n" +
                                    "__**Bots:**__ These Are All of the bots on this server \n" +
                                    "__**Members:**__ Lowest Ranking person on the server, they have basic permissions and cannot access admin chanels \n" +
                                    "-------------------------------------------------------------------------------------------------\n", true)

        .setColor(EmbedColors[Math.floor(Math.random() * EmbedColors.length)])

function play(connection, message){
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function(){
        if(server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

function getYTinfo(yturl, response) {

    let domains = ['youtu.be', 'youtube.com'];

    let key = file.YT_API;

    let id = "";

    if(yturl.indexOf(domains[0]) > 0) {
        id = yturl.substring(yturl.lastIndexOf("/") + 1 );
    }
    else if(yturl.indexOf(domains[1]) > 0) {
        let lastPos = yturl.indexOf("&") > 0 ? yturl.indexOf("&") : 0;

        if(lastPos == 0) id = yturl.substring(yturl.indexOf("v=") +2);
        else id = yturl.substring(yturl.indexOf("v=") +2, lastPos);
    }
    else {
        return "Invalid URL";
    }

    let api_url = "https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2C+snippet&id=" + id + "&fields=etag%2CeventId%2Citems%2Ckind%2CnextPageToken%2CpageInfo%2CprevPageToken%2CtokenPagination%2CvisitorId&key=" + key;

    getJSON(api_url, function(err, data){
        var return_data = [];
        return_data['title'] = data.items[0].snippet.title;
        return_data['thumbnail'] = data.items[0].snippet.thumbnails.medium.url;
        return_data['channelTitle'] = data.items[0].snippet.channelTitle;
        let dur = data.items[0].contentDetails.duration;
        dur = dur.replace("PT", "");
        dur = dur.replace("H", ":");
        dur = dur.replace("M", ":");
        dur = dur.replace("S", "");
        return_data['duration'] = dur;

        response(return_data);
    });
}

var bot = new Discord.Client();

var servers = {};

bot.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general").send(member.toString() + " Welcome To The Comp Crew Official Server");

  member.addRole(member.guild.roles.find("name", "Members")).then(() => {
    console.log(`${message.author.username}` + " joined and has been given The Member Role");
  })
});

bot.on("ready", function(){
  console.log(GreenStyle("----------------------------------------"));
  console.log(GreenStyle("                BOT PAGE                "));
  console.log(GreenStyle("             BOT NOW ACTIVE             "));
  console.log(GreenStyle("----------------------------------------"));
  console.log(GreenStyle("Logging Woll Now Start...               "));
  console.log(GreenStyle("----------------------------------------"));

});

bot.on("message", function(message){
    if (message.author.equals(bot.user)) return;

    var prefix = (file.prefix[message.guild.id] == undefined) ? file.prefix["default"] : file.prefix[message.guild.id];

    //console.log(prefix);
    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {

      case "ping":
            console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "ping");
          message.channel.send(message.author.toString() + " " + "Pong!");
          break;

      case "memes":
            console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "memes");
            memes('all', 100, function(err, data) {

              var rand = Math.floor(Math.random() * 100);

              var test = data[rand];

              message.channel.send(test);
            });
          break;

      case "images":
        const client = new GoogleImages(file.CSE, file.API);
          var search = client.search(args.slice(1).join(" ")).then(function(images) {
            message.channel.send(images[Math.floor(Math.random() * images.length)].url);
            });

        break;

      case "codes":
      message.delete();
      if (message.author.id === "103509994074312704") {
        console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "codes");

        function myFunc(){
            var JackCode = SteamTotp.getAuthCode(configJ.sharedSecret);
            var BenCode = SteamTotp.getAuthCode(configB.sharedSecret);
            var SammyCode = SteamTotp.getAuthCode(configS.sharedSecret);

            var codess = new Discord.RichEmbed()
                .setColor(EmbedColors[Math.floor(Math.random() * EmbedColors.length)])
                .addField("__**Bens Code:**__", BenCode)
                .addField("__**Jacks Code:**__", JackCode)
                .addField("__**Sammys Code:**__", SammyCode)

                message.author.send(codess)
        }
        new myFunc();

      } else {

        return message.reply("Your need to be ben to access this command!").then(() => {
          console.log(`${message.author.username}` + " " + "Was Denied, trying to use the command " + prefix + "codes");
        });
      }
      break;

      case "userinfo":
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "userinfo");
          var userinf = new Discord.RichEmbed()
              .setAuthor(message.author.username)
              .setThumbnail(message.author.avatarURL)
              .setDescription("This is the user's info!")
              .setColor(EmbedColors[Math.floor(Math.random() * EmbedColors.length)])
              .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
              .addField("ID:", message.author.id)
              .addField("Created At:", message.author.createdAt)

              message.channel.send(userinf);

          break;

    case "float":
      message.delete().then(() =>{
        if(!args[1]){
          return message.channel.send("Please enter an inspect link for your awesome skin/weapon");
        }else{
          getJSON("https://api.csgofloat.com:1738/?url=" + args[1], function(error, data){

            if(data == undefined){
              return message.channel.send("Please enter a valid inspect link for your awesome skin/weapon");
            }

            var float = new Discord.RichEmbed()
            .addField("Weapon Name: ", data.iteminfo.weapon_type, true)
            .addField("Weapon Skin Name: ", data.iteminfo.item_name, false)
            .addField("Float Value: ", data.iteminfo.floatvalue, true)
            .addField("Requested By: ", message.author.username)
            .setThumbnail(data.iteminfo.imageurl)

            .setColor("0x#FF0000")
            message.channel.send(float);
          })
        }
      })

      break;
    case "invite":
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "invite");
          var invite = new Discord.RichEmbed()

                  .addField("__**" + "INVITE LINK: " + "**__", "https://discord.gg/TyM8AkG", true)
                  .addField("__**" + "Bot Invite Link: " + "**__", "https://discordapp.com/oauth2/authorize?client_id=353154808078794752&scope=bot&permissions=2146958591", false)


                  .setColor(EmbedColors[Math.floor(Math.random() * EmbedColors.length)])

          message.channel.send(invite);
        break;

      case "prefix":
          if(message.member.hasPermission("ADMINISTRATOR")) {
            console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "prefix");
            var prefix_val = args[1];
            file.prefix[message.guild.id] = prefix_val;

            fs.writeFile(settings, JSON.stringify(file, null, 2), function (err) {
              //var test = fs.readFileSync("settings.json")
              //settingsreal = JSON.parse(test)

              message.channel.send(message.author.toString() + " " + "The NEW Prefix for this bot is: " + prefix_val);
            });

          } else {
            return message.reply("Your need to have the \"ADMINISTRATOR\" Permission").then(() => {
              console.log(`${message.author.username}` + " " + "Was Denied, trying to use the command " + prefix + "prefix");
            });
          }
          break;

      case "timer":
          let Timer = args[1];

          message.channel.send("Timer Started for: " + `${ms(ms(Timer), {long: true})}`)

          setTimeout(function(){
            message.channel.send(message.author.toString() + ` The Timer Has FINISHED!, it lasted: ${ms(ms(Timer), {long: true})}`)

          }, ms(Timer));
          break;

        case "addrole":
        if(message.member.hasPermission("ADMINISTRATOR")) {
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "addrole");
          let member2 = message.mentions.members.first();
          if(!member2) return message.reply("You need to mention a user/member!");
          let muteRole2 = message.guild.roles.find("name", args[2]);
          if(!muteRole2) return message.reply("There is no such thing as a \"Muted\" role!");
          let time2 = args[3];
          if(!time2) {
            member2.addRole(muteRole2.id);
            message.channel.send(member2 + ` you have been given the permanent role: ` + args[2]);
          }else {
            member2.addRole(muteRole2.id);
            message.channel.send(member2 + ` you have been given the role: ` + args[2] + ` for: ${ms(ms(time2), {long: true})}`);

            setTimeout(function(){
              member2.removeRole(muteRole2.id);
              message.channel.send(member2 + ` you role has been taken off of you your glory lasted: ${ms(ms(time2), {long: true})}`)

            }, ms(time2));

            };
            }else {
              console.log(`${message.author.username}` + " " + "Was Denied Use of the command " + prefix + "addrole");
              return message.reply("Your need to have the \"ADMINISTRATOR\" Permission")
            };
          break;

          case "removerole":
          if(message.member.hasPermission("ADMINISTRATOR")) {
            console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "removerole");
            let member3 = message.mentions.members.first();
            if(!member3) return message.reply("You need to mention a user/member!");
            let muteRole3 = message.guild.roles.find("name", args[2]);
            if(!muteRole3) return message.reply("There is no such thing as a \"Muted\" role!");

            member3.removeRole(muteRole3.id);
            message.channel.send(member3 + ` you have lost the role: ` + args[2] + `!`);

            }else {
              console.log(`${message.author.username}` + " " + "Was Denied Use of the command " + prefix + "removerole");
              return message.reply("Your need to have the \"ADMINISTRATOR\" Permission")
            };
            break;
      case "dev":
        if(message.member.hasPermission("ADMINISTRATOR")) {
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "dev");
          message.channel.send("this is working Mr Developer!");
        } else {
          console.log(`${message.author.username}` + " " + "Was Denied Use of the command " + prefix + "dev");
          return message.reply("Your need to have the \"ADMINISTRATOR\" Permission")
        }

          break;

      case "rename":
        if(message.member.hasPermission("ADMINISTRATOR")) {
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "rename");
          message.guild.member(bot.user).setNickname(message.content.substring(8)).then(user => message.channel.send("My New NickName is " + message.content.substring(8) + "!")).catch(console.error);
        } else {
          console.log(`${message.author.username}` + " " + "Was Denied Use of the command " + prefix + "rename");
          return message.reply("Your need to have the \"ADMINISTRATOR\" Permission")
        }

          break;

      case "coin":
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "coin");
          message.channel.send(message.author.toString() + " You Flipped: " + (hd[Math.floor(Math.random() * hd.length)]));
          break;
      case "8ball":

          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "8ball");
          if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
          else message.channel.send("I Wasnt Able To Read That :(");
          break;

      case "embed":
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "embed");
          var embed = new Discord.RichEmbed()
              .addField("Test Title 1", "Test Description 1", true)
              .addField("Test Title 2", "Test Description 2", true)
              .addField("Test Title 3", "Test Description 3", true)
              .addField("Test Title 4", "Test Description 4")
              .setColor(EmbedColors[Math.floor(Math.random() * EmbedColors.length)])
              .setFooter("THIS IS THE EMBED FOOTER")
          message.channel.send(embed);
          break;

      case "notice":
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "notice");
          message.channel.send(message.author.toString() + " I Have Noticed You, Feel Proud!");
          break;

      case "kick":
          if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.reply("You Need The \"ADMIN\" role to kick people").catch(console.error);
          }
          if (message.mentions.users.size === 0){
            return message.reply("Please Mention A User To Kick Next Time").catch(console.error);
          }
          let kickmember = message.guild.member(message.mentions.users.first());
          if(!kickmember){
            message.reply("That User Does Not Seem Valid!");
          }
          if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
            return message.reply(" i need the \"KICK_MEMBERS\" permission!").catch(console.error);
          }
          kickmember.kick().then(member => {
            message.reply(`${member.user.username} was succesfully kicked`).catch(console.error);
          }).catch(console.error)
          break;

      case "highlight":
        message.delete();
        console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "highlight");
        message.channel.send("```" + args.slice(1).join(" ") + "```");
        break;

      case "speak":
          message.delete();
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "speak");
          message.channel.send(args.slice(1).join(" "));
        break;

      case "play":
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "play");
          if (!args[1]){
              message.channel.send("Please Provide A Link (YouTube link)");
              return;
          }

          if (!message.member.voiceChannel){
              message.channel.send("You Mut Be In A Voice Channel!");
              return;
          }

          if(!servers[message.guild.id]) servers[message.guild.id] = {
             queue: []
          };

          var server = servers[message.guild.id];

          server.queue.push(args[1]);

          if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
              play(connection, message);
           });

          break;

          case "np":

            var server = servers[message.guild.id];

            getYTinfo(server.queue[0], function(res){

              // var np = new Discord.RichEmbed()
              //         .addField("Song Name: ", res.title, true)
              //         .addField("Uploaded By: ", res.channelTitle, false)
              //         .setThumbnail(res.thumbnail)
              //
              //         .setColor(EmbedColors[Math.floor(Math.random() * EmbedColors.length)])
              //
              //          message.channel.send(np)

               console.log(res.title);
               console.log(res.thumbnail);
               console.log(res.channelTitle);

            });
          break;

          case "playlist":
              console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "play");

              var PLAYID = args[1];

              var url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + PLAYID + "&key=" + file.YT_API;

              var json = getJSON(url, function(err, data){
                var data = data.items;
                data.forEach(function(element) {
                  if(!servers[message.guild.id]) servers[message.guild.id] = {
                     queue: []
                  };

                  var server = servers[message.guild.id];

                  server.queue.push("https://www.youtube.com/watch?v=" + element.snippet.resourceId.videoId);

                }, this);
              });

              if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
                  play(connection, message);
               });

              break;

      case "skip":
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "skip");
          var server = servers[message.guild.id];

          if (server.dispatcher) server.dispatcher.end();

          break;

      case "stop":
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "stop");
          var server = servers[message.guild.id];

          if (message.guild.voiceConnection)
        {
            for (var i = server.queue.length - 1; i >= 0; i--)
            {
                server.queue.splice(i, 1);
         }
            server.dispatcher.end();
            //console.log("[" + new Date().toLocaleString() + "] Stopped the queue.");
        }﻿
          break;

       case "crosshair":
       console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "crosshair");
       message.delete().then(() => {

         message.channel.send(cross)

         .then(function (message) {
                        message.react("viewmodel:358741579374264321").then(() => {
                          message.react("crosshair:358741278109859842").then(() => {
                            message.react("%E2%9D%93").then(() => {
                              message.react("%F0%9F%97%91")
                            })
                          })
                        })

                     }).catch(function() {
                      });
       })

          break;

      case "test":
      console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "test");

      var test = new Discord.RichEmbed()
              .addField("MEMBER:", "ping\n" +
                                   "dev\n" +
                                   "coin\n" +
                                   "8ball\n" +
                                   "embed\n" +
                                   "notice\n" +
                                   "play\n" +
                                   "skip\n" +
                                   "stop\n" +
                                   "crosshair\n" +
                                   "viewmodel\n" +
                                   "help\n", true)

               .addField("ADMIN:", "prefix\n" +
                                   "rename\n" +
                                   "clean\n" +
                                   "kick\n", true)

              .setColor(EmbedColors[Math.floor(Math.random() * EmbedColors.length)])
              .setFooter("FOR MORE INFO TYPE " + prefix + "help [COMMAND] FOR MORE INFO ON THE COMMAND")

                message.channel.send(test)

                console.log(args);
          break;

      case "commands":
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "commands");

          var comm1 = new Discord.RichEmbed()
                  .addField("Commands (1/3):", "----------------------------------------------------------------------------------------------\n" +
                                               "Type " + "__**" + prefix + "speak [ANYTHING]**__ to show text entered as the bot\n" +
                                               "Type " + "__**" + prefix + "coin**__ to flip a coin to get heads or tails \n" +
                                               "Type " + "__**" + prefix + "8ball [QUESTION]**__ to get a random answer \n" +
                                               "Type " + "__**" + prefix + "embed**__ to show a test version of a embed \n" +
                                               "Type " + "__**" + prefix + "highlight [ANYTHING]**__ to show text entered with black background \n" +
                                               "Type " + "__**" + prefix + "timer [1s/1m/1h]**__ to start a timer with the given amount of time \n" +
                                               "Type " + "__**" + prefix + "invite**__ to get the perminent invite link for the server\n" +
                                               "Type " + "__**" + prefix + "notice**__ to get noticed by the bot \n" +
                                               "Type " + "__**" + prefix + "play [YOUTUBE URL]**__ to play a song from YouTube \n" +
                                               "----------------------------------------------------------------------------------------------\n", true)

                  .setColor("0x00FF00")

                  var comm2 = new Discord.RichEmbed()
                          .addField("Commands (2/3):", "----------------------------------------------------------------------------------------------\n" +
                                                       "Type " + "__**" + prefix + "skip**__ to play the next song in the queue \n" +
                                                       "Type " + "__**" + prefix + "stop**__ to stop the currently playing song \n" +
                                                       "Type " + "__**" + prefix + "crosshair**__ to get the Developers CS:GO Crosshair\n" +
                                                       "Type " + "__**" + prefix + "*viewmodel**__ to get the Developers CS:GO Viewmodel\n" +
                                                       "Type " + "__**" + prefix + "invite**__ to get the perminent invite link for the server\n" +
                                                       "Type " + "__**" + prefix + "userinfo**__ to show your profile info \n" +
                                                       "Type " + "__**" + prefix + "images [SEARCH TERM]**__ to get a random image from google\n" +
                                                       "Type " + "__**" + prefix + "memes**__ to get a random meme from reddit\n" +
                                                       "Type " + "__**" + prefix + "float [INSPECT URL]**__ to get the float of the given inspect link\n" +
                                                       "----------------------------------------------------------------------------------------------\n", true)

                          .setColor("0x00FF00")

          var comm3 = new Discord.RichEmbed()
                  .addField("Admin Commands (3/3):", "----------------------------------------------------------------------------------------------\n" +
                                                     "Type " + "__**" +  prefix + "dev**__ to get test if the bots working \n" +
                                                     "Type " + "__**" +  prefix + "prefix [NEW PREFIX]**__ to change old prefix \n" +
                                                     "Type " + "__**" +  prefix + "rename [NAME]**__ to rename to bot \n" +
                                                     "Type " + "__**" +  prefix + "clear [NUMBER]**__ to delete a certain number of messages \n" +
                                                     "Type " + "__**" +  prefix + "addrole [MENTION] [ROLE] [LENGTH]**__ to add a role to the mentioned \n" +
                                                     "Type " + "__**" +  prefix + "removerole [MENTION] [ROLE]**__ to remove the person mentioned role\n" +
                                                     "Type " + "__**" +  prefix + "kick [@NAME]**__ to kick the mentioned user \n" +
                                                     "----------------------------------------------------------------------------------------------\n", true)



                  .setColor("0x00FF00")

          message.delete().then(() => {

            message.channel.send(comm1)
            message.channel.send(comm2)
            message.channel.send(comm3)

            .then(function (message) {
              message.react("Bin2:362263530424107009")
            })
          })

          break;
      case "clear":
        if(message.member.hasPermission("ADMINISTRATOR")) {
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "clear");
          let messagecount = parseInt(args[1]);
          if(messagecount > 100){
            message.channel.send("Sorry, You can only clean upto 100 messages at a time!")
          }else if(messagecount < 2 ) {
            message.channel.send("Sorry, You can only clean upto 100 messages at a time!")
          } else {

          }{
            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
          }
        } else {
          console.log(`${message.author.username}` + " " + "Was Denied Use of the command " + prefix + "clean");
          return message.reply("Your need to have the \"ADMINISTRATOR\" Permission")
        }

          break;

      case "rules":
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "rules");

            message.channel.send(rules1)
            message.channel.send(rules2)

              .then(function (message) {
                message.react("%E2%9D%93").then(() => {
                  message.react("Bin2:362263530424107009")
                })
              })

          break;

      case "roles":
          console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "roles");
          message.delete().then(() => {

            message.channel.send(role)

              .then(function (message) {
                message.react("%E2%9D%93").then(() => {
                  message.react("%F0%9F%97%91")
                })
              })
            })

          break;

      case "viewmodel":
      console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "viewmodel");
      message.delete().then(() => {

        message.channel.send(view)

        .then(function (message) {
                       message.react("viewmodel:358741579374264321").then(() => {
                         message.react("crosshair:358741278109859842").then(() => {
                           message.react("%E2%9D%93").then(() => {
                             message.react("%F0%9F%97%91")
                           })
                         })
                       })
                    }).catch(function() {
                     });
      })
          break;

      case "help":
      console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "help");
      message.delete().then(() => {
        let help = new Discord.RichEmbed()
                .addField("Help:", "----------------------------------------------------------------------------\n" +
                                   "Type " + prefix + "commands to view all the commands \n" +
                                   "Type " + prefix + "rules to view all the rules for the server \n" +
                                   "Type " + prefix + "roles to view all the roles for the server \n" +
                                   "----------------------------------------------------------------------------\n" +
                                   "Click the bin reaction to delete this message \n" +
                                   "----------------------------------------------------------------------------", true)

                .setColor(EmbedColors[Math.floor(Math.random() * EmbedColors.length)])

        message.channel.send(help)

        .then(function (message) {
          message.react("%E2%9D%93").then(() => {
            message.react("%F0%9F%97%91")
          })
        })
      })

          break;

      default:
    }
});

bot.on('messageReactionAdd', (reaction, user) => {
    if (user.bot) return;
    //console.log(reaction.emoji.identifier); //only enable if you need to find the emoji identifier

    if(reaction.emoji.identifier == "viewmodel:358741579374264321"){
       reaction.remove(user).then(reaction => {

       reaction.message.edit({tts: false, nonce: false, embed: view}); // edits message and replaces it

	});
      }else{
        if (reaction.emoji.identifier == "crosshair:358741278109859842") {

              reaction.remove(user).then(reaction => {

              reaction.message.edit({tts: false, nonce: false, embed: cross});
            });
        }
      }if (reaction.emoji.identifier == "%E2%9D%93") {
        reaction.remove(user).then(reaction => {

        reaction.message.edit({tts: false, nonce: false, embed: help});
      });

    }if (reaction.emoji.identifier == "%F0%9F%97%91"){

      reaction.message.delete()

      reaction.remove(user).then(reaction => {
    });

  }if (reaction.emoji.identifier == "Bin2:362263530424107009"){

    setTimeout(function(){ reaction.message.channel.bulkDelete(3); }, 1);

    reaction.remove(user).then(reaction => {

  });
}
});

//waste basket = %F0%9F%97%91
//1 = 1%E2%83%A3
//2 = 2%E2%83%A3
//3 = 3%E2%83%A3
//4 = 4%E2%83%A3
//5 = 5%E2%83%A3
//6 = 6%E2%83%A3
//7 = 7%E2%83%A3
//8 = 8%E2%83%A3
//9 = 9%E2%83%A3
//Question Mark = %E2%9D%93
//arrow pointing left = %E2%AC%85
//arrow pointing right = %E2%9E%A1
//empty 1 = Empty1:361992629778382848
//empty 2 = Empty2:361992765044817960
//empty 3 = Empty3:361992789833023489

bot.login(TOKEN);
