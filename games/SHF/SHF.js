if (typeof jQuery == "undefined") {
	var s = document.createElement("div");
	s.innerHTML="No jQuery";
	s.id="NOJQUERYALERT";
	s.style="text-shadow: none;transition:opacity 1s;opacity:1;text-align:center;left:10px;right:10px;padding:5px;background:#F44336;height:auto;bottom:10px;font-size:20px;width:auto;position:fixed;z-index:1001;border-radius:5px;color:white;";
	document.body.appendChild(s);
	document.styleSheets[0].addRule('.DISMSISED', 'opacity:0 !important');
	window.setTimeout(function(){document.getElementById("NOJQUERYALERT").className="DISMSISED";}, 500);
	window.setTimeout(function(){document.getElementById("NOJQUERYALERT").parentNode.removeChild(document.getElementById("NOJQUERYALERT"));}, 1500);
}
setTimeout(function(){$('#white').animate({
	height:"0%",
},500);}, 0);
var showingHelp = false, dM, keys, time;
$("#help").click(function(){
	if (showingHelp){
		$("#note").fadeOut();
	} else {
		$("#note").fadeIn();
	}
	showingHelp = !showingHelp;
});
setTimeout(function(){$('#container h1').animate({
	marginTop:"0px",
	opacity:"1",
},500);}, 700);
setTimeout(function(){$('#play, #hscore').animate({
	opacity:"1",
},500);}, 700);
$("#play").click(function(){play();});
$(document).on('keydown', function(e) {
	if (e.which == 13) {
		play();
		$(document).off('keydown');
	}
});
function play() {
	keys=[];
	newRound();
	time=4000;
	$("#score").html("000");
	$("#timer").css("display","block");
	$("#play").fadeOut(200);
	$(document).keypress(function(event){
		if (String.fromCharCode(event.which)==keys[0]) {
			keys.splice(0,1);
			$("#message span:nth-child("+(3-keys.length)+")").addClass("glow");
			if (keys.length==0) {
				newRound();
			}
		} else if (event.which != 13) {
			dM="You were supposed to press the " + keys[0] + " key.";
			lose();
		}
	});
}
function newRound() {
	$("#score").html(Number($("#score").html())+1).html("000".substring($("#score").html().length,3)+$("#score").html());
	$('#timer').stop().css("width","500px");
	var j, s="<span>", abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
	for (var i=0;i<3;i++){
		j = Math.floor(Math.random()*abc.length);
		s+=abc[j]+"</span> <span>";
		keys.push(abc[j]);
		abc.splice(j,1);
	}
	$("#message").html(s.slice(0, -7));
	time-=200;
	setTimeout(function(){$('#timer').animate({
		width:"0",
	},time, function(){dM="too slow";lose();});}, 0);
}
function lose() {
	$("#timer").stop().css("display","none");
	$("#message").html(dM);
	$("#play").html("FAIL AGAIN").css({"width":"250px","top":"100px"}).fadeIn(200)
	$(document).on('keydown', function(e) {
		if (e.which == 13) {
			play();
			$(document).off('keydown');
		}
	});
	$(document).off("keypress");
	if (Number($("#score").html())>Number($("#hscore").html().substring(3,6))) {
		$("#hscore").html("HI "+$("#score").html());
	}
}