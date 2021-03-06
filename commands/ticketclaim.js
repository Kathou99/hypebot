module.exports = {
    name: 'ticketclaim',
    description: 'A command.',
    aliases: ['myticket', 'gotit', 'claim'],
    async execute(client, message, args, Hyperz, config, con){
    if(message.guild.id === config["main_config"].yourserverid) {
        if(config["tickets_config"].enabled) {
    const per = config["permissions_config"].ticketmanagers
        if(message.member.roles.cache.some(h=>per.includes(h.id))){
    if(!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`This channel is not a ticket.`).then(msg => msg.delete({timeout: 10000})).catch(e => {if(config["main_config"].debugmode) return console.log(e);})
    const claimEmbed = new Hyperz.MessageEmbed()
    .setColor(config["main_config"].colorhex)
    .setDescription(`**${message.author.tag} has claimed this ticket.**`)
    .setTimestamp()
    .setFooter(`${config["main_config"].copyright}`)
    
    message.delete().catch(e => {if(config["main_config"].debugmode) return console.log(e);});
    message.channel.send(claimEmbed)
        } else {
            message.channel.send("You don't have permission to run this command...").then(msg => msg.delete({ timeout: 9000 })).catch(e => {if(config["main_config"].debugmode) return console.log(e);})
            message.delete().catch(e => {if(config["main_config"].debugmode) return console.log(e);});
        }
    } else {
        message.channel.send("This module is disabled, please ask the owner to enable it!").then(msg => msg.delete({ timeout: 9000 })).catch(e => {if(config["main_config"].debugmode) return console.log(e);})
        message.delete().catch(e => {if(config["main_config"].debugmode) return console.log(e);});
    }
    } else {
        message.channel.send("This command can only be ran inside of the main server.").then(msg => msg.delete({ timeout: 9000 })).catch(e => {if(config["main_config"].debugmode) return console.log(e);})
        message.delete().catch(e => {if(config["main_config"].debugmode) return console.log(e);});
    }
}
}

// Credits:
// Physical Programming: Hyperz#0001

