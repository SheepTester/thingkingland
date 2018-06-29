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
$("#play").click(function(){init();});
$(document).on('keydown', function(e) {
	if (e.which == 13) {
		init();
		$(document).off('keydown');
	}
});
var showingHelp = false, dM, time, zed="0000",snd = new Audio("pop.wav"),initscore;
$("table").mouseover(function(event){
	if (event.target.tagName=="TD"&&event.target.className!="noMore") {
		snd.currentTime=0;
		snd.play();
		$(event.target).addClass("noMore");
		$("#score").html(Number($("#score").html())+1).html(zed.substring($("#score").html().length,zed.length)+$("#score").html());
	}
});
function init() {
	newRound();
	time=4000;
	initscore=100;
	$("#score").html(zed);
	$("table").fadeIn(200);
	$("#timer").css("display","block");
	$("#play, #message").fadeOut(200);
}
function newRound() {
	$("#score").html(Number($("#score").html())+100).html(zed.substring($("#score").html().length,zed.length)+$("#score").html());
	initscore=Number($("#score").html())+100;
	$('#timer').stop().css("width","500px");
	$("table").empty();
	for (var i=0;i<20;i++){$("table").append("<tr></tr>");}
	for (var i=0;i<20;i++){$("tr").append("<td></td>");}
	if(time>=1000){time-=200;}
	setTimeout(function(){$('#timer').animate({
		width:"0",
	},time, function(){
		if (initscore<=Number($("#score").html())) {
			newRound();
		} else {
			dM="You needed to get "+(initscore-Number($("#score").html()))+" more dots to win";
			lose();
		}
	});}, 0);
}
function lose() {
	$("#timer").stop().css("display","none");
	$("#message").html(dM).fadeIn(200);
	$("table").fadeOut(200);
	$("#play").html("FAIL AGAIN").css({"width":"225px","top":"100px"}).fadeIn(200)
	$(document).on('keydown', function(e) {
		if (e.which == 13) {
			init();
			$(document).off('keydown');
		}
	});
	$(document).off("keypress");
	if (Number($("#score").html())>Number($("#hscore").html().substring(3,6))) {
		$("#hscore").html("HI "+$("#score").html());
	}
}