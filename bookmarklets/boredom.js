function alog(str){alert(str);console.log(str);}
String.prototype.cap = function() {return this.charAt(0).toUpperCase() + this.slice(1);}
if(confirm('Hi! If you\'re bored, hit "OK". Otherwise, click cancel to close the activity :)')){
var n = [];  // hood girl grandmother Garry wine cake wolf house gorilla
var v = [];  // riding deliver eats sees look says saw says
var adj = [];// little red sick big bad hungry unintelligent
adj.push(prompt("Adjective:").toLowerCase());//little
adj.push(prompt("Color:").toLowerCase());//red
v.push(prompt("Verb in gerund form:").toLowerCase());//riding
n.push(prompt("Noun:").toLowerCase());//hood
n.push(prompt("Common noun:").toLowerCase());//girl
n.push(prompt("Family member type:").toLowerCase());//grandmother
n.push(prompt("Name:").toLowerCase());//Garry
adj.push(prompt("Adjective:").toLowerCase());//sick
n.push(prompt("Food:").toLowerCase());//wine
n.push(prompt("Food:").toLowerCase());//cake
v.push(prompt("Verb in root form:").toLowerCase());//deliver
n.push(prompt("Animal:").toLowerCase());//wolf
adj.push(prompt("Adjective:").toLowerCase());//big
adj.push(prompt("Adjective:").toLowerCase());//bad
adj.push(prompt("Adjective:").toLowerCase());//hungry
n.push(prompt("Building:").toLowerCase());//house
v.push(prompt("Verb in third person singular form:").toLowerCase());//eats
adj.push(prompt("Adjective:").toLowerCase());//unintelligent
v.push(prompt("Verb in third person singular form:").toLowerCase());//sees
v.push(prompt("Verb in root form:").toLowerCase());//look
v.push(prompt("Another word for 'said' in third person singular form:").toLowerCase());//says
v.push(prompt("Verb in past tense form:").toLowerCase());//saw
v.push(prompt("Another word for 'said' in third person singular form:").toLowerCase());//says
alert("OK. HERE'S THE STORY! :D");
console.log("THE STORY");
n[3]=n[3].cap();
var lrrh = adj[0].cap()+" "+adj[1].cap()+" "+v[0].cap()+" "+n[0].cap();
var gg = n[3]+" the "+n[2];
var bbw = "the "+adj[3].cap()+" "+adj[4].cap()+" "+n[6].cap();
var food = n[4]+" and "+n[5];
alog("The "+lrrh);
alog("There's a "+n[1]+" named "+lrrh+". Her "+n[2]+", "+n[3]+", is "+adj[2]+".");
alog("She has "+food+". She'll "+v[1]+" them to "+gg+".");
alog("But there's a "+n[6]+" named "+bbw+". It's very "+adj[5]+" and wants the "+food+".");
alog("It pretends to be "+lrrh+" and enters "+gg+"'s "+n[7]+".");
alog("It then "+v[2]+" and pretends to be "+gg+".");
alog(lrrh+", being very "+adj[6]+", arrives and "+v[3]+" "+bbw+" and thinks it's just "+gg+".");
alog("\"Hey! You "+v[4]+" a lot like a "+n[6]+"!\" she "+v[5]+". \"You used to "+v[4]+" more like a "+n[7]+" last time I "+v[6]+" you.\"");
alog("\"Favorites change, honey,\" "+bbw+" "+v[7]+". Then it "+v[2]+" "+lrrh+" and the "+food+".");
alog("The end.");
alert("The story is also available in the console so you can press f12 and click on \"console\" to view your story again.");
/* THE STORY
The Little Red Riding Hood
There's a girl named Little Red Riding Hood. Her grandmother, Garry, is sick. She has wine and cake. She'll deliver them to Garry.
But there's a wolf named the Big Bad Wolf. It is very hungry and wants the wine and cake.
It pretends to be Little Red Riding Hood and enters Garry's house. It then eats the grandmother and pretends to be Garry.
Little Red Riding Hood, being very unintelligent, sees the Big Bad Wolf and thinks it's Garry.
"Hey! You look like a wolf!" she says. "You used to look more like a gorilla last time I saw you."
"Favorites change, honey," the Big Bad Wolf says. Then he eats Little Red Riding Hood and wine and cake.
The end.
*/
}