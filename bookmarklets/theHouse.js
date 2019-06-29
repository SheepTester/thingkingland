// document.styleSheets[0].addRule('::selection', 'background: rgba(0, 188, 212, 0.4);');
if (!window.jQuery) {
	var s = document.createElement("div");
	s.innerHTML="No jQuery";
	s.id="NOJQUERYALERT";
	s.style="text-shadow: none;transition:opacity 1s;opacity:1;text-align:center;left:10px;right:10px;padding:5px;background:#F44336;height:auto;bottom:10px;font-size:20px;width:auto;position:fixed;z-index:1001;border-radius:5px;color:white;";
	document.body.appendChild(s);
	document.styleSheets[0].addRule('.DISMSISED', 'opacity:0 !important');
	window.setTimeout(function(){document.getElementById("NOJQUERYALERT").className="DISMSISED";}, 500);
}else{
$("body").append("<link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet' type='text/css'>");
$("body").append("<div id='theHouse'></div>");
$("#theHouse").attr("style","font-family:'Roboto Mono';line-height:normal;color:#555;background:white;height:160px;width:300px;position:fixed;top:0;bottom:0;left:0;right:0;margin:auto;text-align:center;z-index:1001;box-shadow:0 1px 3px #555;");
$("#theHouse").append("<h1 style='font-size:40px;margin:0;padding:0;'>The House</h1>");
$("#theHouse").append("<p style='font-size:10px;margin:0;padding:0;'>You need to escape it.</p>");
$("#theHouse").append("<p style='font-size:10px;margin:0;padding:0;'>Made by <a href='https://plus.google.com/u/0/+SeanYentheHumansperson'>Sean</a></p>");
document.styleSheets[0].addRule('#theHouse a','color:#00BCD4;');
document.styleSheets[0].addRule('#theHouse a:hover','border-bottom:1px solid #00BCD4;');
document.styleSheets[0].addRule('#theHouse a:active','border-bottom:1px solid white;color:white;');
$("#theHouse").append("<div class='bottun' id='play'>PLAY</div>");
$("#theHouse #play").css("height","30px");
$("#theHouse #play").css("font-size","30px");
$("#theHouse #play").css("padding-bottom","10px");
document.styleSheets[0].addRule('#theHouse .bottun','cursor:default;width:130px;background:#eee;box-shadow:0 1px 3px #bbb;transition:box-shadow .2s;color:#888;margin:20px auto;');
document.styleSheets[0].addRule('#theHouse .bottun:hover','box-shadow:0 1px 5px #bbb !important;');
document.styleSheets[0].addRule('#theHouse .bottun:active','box-shadow:0 1px 1px #bbb !important;');
$("#theHouse").append("<div title='Close' id='close' style='background:#F44336;height:10px;width:10px;border-radius:5px;position:absolute;bottom:5px;right:5px;'></div>");
document.styleSheets[0].addRule('#theHouse #close:hover','background:#EF9A9A !important;');
document.styleSheets[0].addRule('#theHouse #close:active','background:#E53935 !important;');
$("#theHouse #close").click(function(){
	$("#theHouse").remove();
});
$("#theHouse #play").click(function(){
	$("#theHouse #play").off("click");
	$("#theHouse #play").remove();
	$("#theHouse h1").remove();
	$("#theHouse p").remove();
	$("#theHouse").append("<p style='margin: 0;padding:0;width: auto;font-size: 15px;'>OK Now what</p>")
	$("#theHouse").append("<div class='bottun' id='l'>Option 1</div>");
	$("#theHouse").append("<div class='bottun' id='r'>Option 2</div>");
	$("#theHouse #l,#theHouse #r").css("height","30px");
	$("#theHouse #l,#theHouse #r").css("font-size","15px");
	$("#theHouse #l,#theHouse #r").css("position","absolute");
	$("#theHouse #l,#theHouse #r").css("bottom","0");
	$("#theHouse #l,#theHouse #r").css("height","80px");
	$("#theHouse #l").css("left","10px");
	$("#theHouse #r").css("right","10px");
	play("init");
});
function play(gameId) {
	$("#theHouse p").html(dir[gameId][0]);
	if(dir[gameId][1]=="END"||dir[gameId][1]=="WIN"){
		$("#theHouse #l,#theHouse #r").remove();
		$("#theHouse").append("<h1 style='font-size:40px;margin:0;'>END</h1>");
		if(dir[gameId][1]=="END"){
			$("#theHouse").append("<div class='bottun' id='play'>FAIL AGAIN</div>");
			$("#theHouse #play").css("width","200px");
		}else{
			$("#theHouse").append("<div class='bottun' id='play'>FAIL THIS TIME</div>");
			$("#theHouse #play").css("width","260px");
		}
		$("#theHouse #play").css("height","30px");
		$("#theHouse #play").css("font-size","30px");
		$("#theHouse #play").css("padding-bottom","10px");
		$("#theHouse #play").css("margin","0 auto");
		$("#theHouse #play").click(function(){
			$("#theHouse #play").off("click");
			$("#theHouse #play").remove();
			$("#theHouse h1").remove();
			$("#theHouse").append("<div class='bottun' id='l'>Option 1</div>");
			$("#theHouse").append("<div class='bottun' id='r'>Option 2</div>");
			$("#theHouse #l,#theHouse #r").css("height","30px");
			$("#theHouse #l,#theHouse #r").css("font-size","15px");
			$("#theHouse #l,#theHouse #r").css("position","absolute");
			$("#theHouse #l,#theHouse #r").css("bottom","0");
			$("#theHouse #l,#theHouse #r").css("height","80px");
			$("#theHouse #l").css("left","10px");
			$("#theHouse #r").css("right","10px");
			play("init");
		});
	}else{
		$("#theHouse #l").html(dir[gameId][1][0]).click(function(){
			$("#theHouse #l").off("click");
			$("#theHouse #r").off("click");
			play(dir[gameId][1][1]);
		});
		$("#theHouse #r").html(dir[gameId][2][0]).click(function(){
			$("#theHouse #l").off("click");
			$("#theHouse #r").off("click");
			play(dir[gameId][2][1]);
		});
	}
}
/* "ID":["txt",["Op1txt","Op1ID"],["Op2txt","Op2ID"]], */
var dir = {
	"init":["You are in a dark room with only a door and a window.",["Break the window","breakWindow"],["Open the door","openDoor"]],
		"openDoor":["The door leads to a hallway.",["Go left","hallLeft"],["Go right","hallRight"]],
			"hallLeft":["It leads to more hallways.",["Go left","hallLeft1"],["Go right","hallRight1"]],
				"hallLeft1":["There's a locked door and a flower pot.",["Eat the flower.","eatFlower"],["Smash the pot.","smashPot"]],
					"eatFlower":["The flower revealed a key.",["Unlock the door.","unlockDoor"],["Open the door without the key.","openDoor1"]],
						"unlockDoor":["The door opened. It leads outside. You're free.","WIN"],
						"openDoor1":["The door is locked, stupid.",["Unlock the door.","unlockDoor"],["Break down the door.","breakDoor"]],
							"breakDoor":["You hurt yourself with the splinters of wood and died.","END"],
					"smashPot":["You hurt yourself with the shards of clay and died.","END"],
				"hallRight1":["There are two buttons.",["Press the red button.","redButton"],["Press the blue button.","blueButton"]],
					"redButton":["The red button says \"Press again to confirm.\"",["Press the red button again.","redButton1"],["Press the blue button instead.","blueButton"]],
						"redButton1":["A white arrow appeared, selected you, and pressed <i>backspace</i>. You got deleted.","END"],
					"blueButton":["A chicken appeared above you.",["Punch it.","punchChick"],["Flee.","fleeChick"]],
						"punchChick":["The chicken disappeared, leaving a golden egg.",["Rub it.","genie"],["Crack it.","iPhone"]],
							"genie":["A genie appears and asks \"10 cats are on a boat. One falls off. How many are left?\"",["None. They are all copycats.","copycat"],["9. 10-1=9.","math"]],
								"copycat":["The genie killed himself and you died too.","END"],
								"math":["The genie continues. \"What travels around the world and stays in one spot?\"",["A stamp.","stamp"],["The moon.","moon"]],
									"stamp":["He stamped on you. You died.","END"],
									"moon":["The genie asks his final question. \"You will be...\"",["Wrong.","paradox"],["Right.","toRight"]],
										"paradox":["","END"],
										"toRight":["The genie points to the right and a chalk appears. It falls and breaks in half.",["Put them back together.","fix"],["Eat it.","foodPoison"]],
											"fix":["You put the halves together and jumped out of the hole. You're free.","WIN"],
											"foodPoison":["The chalk poisoned you.","END"],
							"iPhone":["You cracked open the egg. There's an iPhone inside.",["Turn on the iPhone.","laser"],["Destroy it.","portal"]],
								"laser":["The iPhone turned with green and magenta everywhere. You died.","END"],
								"portal":["The broken iPhone produced a portal. You jumped through it. You're free.","WIN"],
						"fleeChick":["You ran into the wall and died.","END"],
			"hallRight":["The wall closes behind you. Suddenly the lights turn red.",["Run back.","runIntoWall"],["Run ahead.","runScare"]],
				"runIntoWall":["You ran into the wall. It closed behind you, remember?","END"],
				"runScare":["Suddenly a mysterious figure appeared with a knife and grabbed you.",["Greet him.","greetHim"],["Dance with him.","danceHim"]],
					"greetHim":["The figure stabbed you with a knife labeled \"My name is Edgar.\" You died.","END"],
					"danceHim":["The figure asks which dance to dance.",["The tango!","tango"],["The Hokey Pokey!","hokeyPokey"]],
						"tango":["The figure doesn't know how to dance the tango. He stabs you instead.","END"],
						"hokeyPokey":["He puts his right knife in. He pulls it out. He puts it back in and shakes it all about. You died.","END"],
		"breakWindow":["You climbed through and fell into a kitchen. There's a door.",["Explore the kitchen.","exploreKitchen"],["Leave through the door.","openDoor"]],
			"exploreKitchen":["There's only a fridge and a microwave.",["Open the fridge.","fridge"],["Open the microwave.","microwave"]],
				"fridge":["There's a McDonald's hamburger and some sushi. You're hungry.",["Eat the hamburger.","hamburg"],["Eat the sushi.","choco"]],
					"hamburg":["You hear someone enter the room.",["Hide","hide"],["Greet them","greetThem"]],
						"hide":["You hear the sound of something being dragged into the room. It smells.",["Take a peek.","peek"],["Yodel.","yodel"]],
							"peek":["The moment you stuck your head out a knife appeared in it. You died.","END"],
							"yodel":["The figure screamed and ran into a wall.",["Help him.","help"],["Flee.","fleeChick"]],
								"help":["You help the man up. He thanks you and then stabs you with a knife. You died.","END"],
						"greetThem":["All you saw was a figure before a knife landed in your heart. You died.","END"],
					"choco":["The sushi was poisoned. You died.","END"],
				"microwave":["There's a box with a label that says \"Microwave with 9+10 seconds.\"",["Enter 19s seconds and microwave.","19s"],["Enter 21 seconds and microwave.","21s"]],
					"19s":["The box microwaved successfully.",["Open the microwave.","microOpen"],["Destroy the microwave.","microDestroy"]],
						"microOpen":["The box now contains a label. It's too dark to read.",["Open the fridge.","openFridge"],["Feel the walls for a light switch.","lightSwitch"]],
							"openFridge":["A person was hiding inside the fridge. He jumps out and stabs your hand with a knife.",["End my life please.","paradox"],["Pull out the knife.","lifeAttempt"]],
								"lifeAttempt":["You threw the knife at the person but missed and hit the fridge light. You are in pain.",["End my life please.","paradox"],["Feel the walls for a light switch","lightSwitch"]],
							"lightSwitch":["There were spikes on the wall. You are in pain.",["Bite off your hand.","ouch"],["Take a selfie.","photoBomb"]],
								"ouch":["Suddenly two gift boxes appear.",["Open the left gift box.","leftGift"],["Open the right gift box.","rightGift"]],
									"leftGift":["A man climbed out of the gift box and stabbed you. You died.","END"],
									"rightGift":["You opened the right box. Inside there is a door.",["Go through the door.","solidDoor"],["Open the door.","openDoor2"]],
										"solidDoor":["You walked into the door and died.","END"],
										"openDoor2":["The door leads to a portal. You are in extreme pain.",["End my life now please.","paradox"],["Jump in.","portalJump"]],
											"portalJump":["The portal brought you to outside the house. You're free.","WIN"],
								"photoBomb":["Your selfie includes a creepy man.",["Look behind you.","sameChoice"],["Take more selfies.","sameChoice"]],
									"sameChoice":["You got stabbed by that man.","END"],
						"microDestroy":["You got microwaved somehow. You died.","END"],
					"21s":["The box microwaved successfully.",["Open the microwave.","jkjk"],["Destroy the microwave.","jkjk"]],
						"jkjk":["Just kidding, 9+10=19, stupid. The microwave blew up in 20 seconds.","END"],
	"Op1ID":["This choice/path is currently unfinished.","END"],
	"Op2ID":["This choice/path is currently unfinished.","END"],
}
}
