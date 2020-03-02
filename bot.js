const Discord = require('discord.js');
const client = new Discord.Client();
require('http').createServer().listen(3000)

//Emojis
var monsterDeManga = '683838210127954051';
var lambida = '683886416153018467';
var jotaro = '683889008454926341';

//Users
var alone = '503518200378425354';
var enre = '232722592195149825';
var katsuke = '472284998972473355';
var cris = '643375295126044672';
var temari = '209449949035757568';
var loritta = '297153970613387264';

client.on('ready', () => {
	client.user.setActivity("te energiza", {
	  type: "LISTENING",
	});
    console.log(`Logged in as ${client.user.tag}!`); 
});
client.on('message', function(msg) {  
	msg.content = msg.content.toLowerCase();
    if(msg.author == alone)
    {
    	msg.react('🍆');
    }
    else if(msg.author == loritta)
    {
    	msg.react('💩');
    }
    else if(msg.author == katsuke)
    {
    	rand = Math.floor(Math.random() * 100);
    	if(rand < 10)
    	{
    		rand = Math.floor(Math.random() * 3);
    		if(rand == 0)
    		{
    			msg.channel.send('<@!' + msg.author + '> Quanta petulância!');
    		}
    		else if(rand == 1)
    		{
    			msg.channel.send('<@!' + msg.author + '> Quanta arrogância!');
    		}
    		else if(rand == 2)
    		{
    			msg.channel.send('<@!' + msg.author + '> Quanta prepotência!');
    		}
    	}
    }
    else if(msg.author == temari)
    {
    	msg.react('🍃');
    }
    if(msg.author.bot) return;
    /*else if(msg.author == enre)
    {
    	msg.delete();
    	msg.guild.member(client.user).setNickname(msg.member.nickname);
    	msg.channel.send(msg.content);
    	msg.guild.member(client.user).setNickname('Monster de Manga');
    }*/
    premiada = Math.floor(Math.random() * 100);
    if(premiada == 0)
    {
    	msg.channel.send('👀');
    }
    else if(premiada <= 5)
    {
    	rand = Math.floor(Math.random() * 6);
    	if(rand == 0)
    	{
    		msg.react(jotaro);
    	}
    	else if(rand == 1)
    	{
    		msg.react('👽');
    	}
    	else if(rand == 2)
    	{
    		msg.react('💩');
    	}
    	else if(rand == 3)
    	{
    		msg.react(monsterDeManga);
    	}
    	else if(rand == 4)
    	{
    		msg.react(lambida);
    	}
    	else if(rand == 5)
    	{
    		msg.react('👀');
    	}
    }
    if(msg.content.includes("energetico") == true || msg.content.includes("energético") == true)
    {
    	msg.channel.send('Monster de Manga!');
    	msg.react(monsterDeManga);
    }
    if(msg.content.includes("monster de manga") == true || msg.content.includes("<@!683823688843264024>") == true)
    {
    	rand = Math.floor(Math.random() * 2);
    	if(rand == 0)
    	{
    		msg.channel.send('Eu!?');
    	}
    	else if(rand == 1)
    	{
    		msg.channel.send('Nunca nem vi!');
    	}
    	msg.react(monsterDeManga);
    }
    if(msg.content.includes("+ship") == true || msg.content.includes("~>love") == true || msg.content.includes("->love") == true && msg.content != "+ship <@!645511609338429466> <@!232722592195149825>" && msg.content != "+ship <@!232722592195149825> <@!645511609338429466>")
    {
    	rand = Math.floor(Math.random() * 101);
    	if(rand < 100)
    	{
    		msg.channel.send(rand + '% esse casal é uma merda!');   
    	}
    	else
    	{
    		msg.channel.send(rand + '% esse casal não é uma merda!');  
    	}
    }
    if(msg.content === "+ship <@!645511609338429466> <@!232722592195149825>" || msg.content === "+ship <@!232722592195149825> <@!645511609338429466>")
    {
        msg.channel.send('100% esse casal não é uma merda!');   
    }
    if (msg.content === 'monster') {     
        msg.channel.send('de Manga!');   
    }
    if (msg.content === 'energia') {     
        msg.channel.send('<@!' + msg.author + '> ta Durasso!');   
    }
    if (msg.content === 'katsuke') {
    	rand = Math.floor(Math.random() * 3);
    	if(rand == 0)
    	{
    		msg.channel.send('Petulante!');
    	}
    	else if(rand == 1)
    	{
    		msg.channel.send('Arrogante!');
    	}
    	else if(rand == 2)
    	{
    		msg.channel.send('Prepotente!');
    	}
    }
    if (msg.content === 'shiryu') {     
        msg.channel.send('Corno!');   
    }
    if (msg.content === 'jean') {     
        msg.channel.send('Gado!');   
    }
    if (msg.content === 'lulu') {     
        msg.channel.send('Garoooto!');   
    }
    if (msg.content === 'eva') {     
        msg.channel.send('Nyahaha!');   
    }
    if (msg.content === 'enre') {     
        msg.channel.send('Gostoso!');   
    }
    if (msg.content === 'alone') {     
        msg.channel.send('<@!503518200378425354> Ninfa Gostosa, pegava!');   
    }
    if (msg.content === 'chanty') {     
        msg.channel.send('Estourasso!');   
    }
    if (msg.content === 'eltalarico') {     
        msg.channel.send('Eh o que boi?');   
    }
    if (msg.content === 'gatito') {     
        msg.channel.send('Só piada bosta!');   
    }
    if (msg.content === 'lesle') {
    	rand = Math.floor(Math.random() * 2);
    	if(rand == 0)
    	{
    		msg.channel.send('Miau'); 
    	}
    	else if(rand == 1)
    	{
    		msg.channel.send('Ixe'); 
    	}  
    }
    if (msg.content === 'hatake') {     
        msg.channel.send('Sensei!');   
    }
    if (msg.content === 'temari') {     
        msg.channel.send('Brisinha!');   
    }
    if (msg.content === 'diney') {
    	rand = Math.floor(Math.random() * 2);
    	if(rand == 0)
    	{
    		msg.channel.send('<@!' + msg.author + '> meteu o estouro!'); 
    	}
    	else if(rand == 1)
    	{
    		msg.channel.send('<@!' + msg.author + '> meteu o estourito!'); 
    	}   
    }
    if (msg.content === 'milo') {
      	rand = Math.floor(Math.random() * 2);
    	if(rand == 0)
    	{
    		msg.channel.send('Muuuuuuuuuuuuh!');
        	msg.react('💩');
    	}
    	else if(rand == 1)
    	{
    		msg.channel.send('Mamilo?');
        	msg.react('❓');
    	}
    }
    if (msg.content === 'cris')
    {
    	msg.channel.send('Afunda time');
    }
    if (msg.content === 'mu' || msg.content === 'mú') {
		msg.channel.send('Carneirinho aládo!');
    }
    if (msg.content === '👀') {
        msg.react('👀');   
    }
});

client.on('messageReactionAdd', (reaction, user) => {
    if(user.id != client.user)
    {
    	reaction.message.react(reaction.emoji);
    }
    if(user.id == loritta)
    {
    	reaction.message.react('💩');
    	reaction.message.react(monsterDeManga);
    	reaction.message.react('👀');
    	reaction.message.channel.send('Reage não <@!' + loritta + '>!');
    }
});

client.login(process.env.BOT_TOKEN);
