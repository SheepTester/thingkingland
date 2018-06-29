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
var showingHelp = false;
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
},500);}, 700);
setTimeout(function(){$('#container').animate({
	opacity:"1",
},500);}, 700);
$("#container img").addClass("noClickyClicky").click(function(){
	//alert("no u click the PLAY button not these images stupid\n\nin case u arent smart heres how:\n1)click the PLAY button");
	$("#container #play").css("animation","flash 1s infinite");
});
var types = ["rock", "paper", "scissors"],start = 0,dM;
$("#container #play").click(function(){
	newRound();
	$("#score").html(0);
	$("#timer").css("display","block");
	$("#container img").removeClass("noClickyClicky").off("click");
	$("#container #message").fadeOut(200);
	$("#container #play").fadeOut(200);
	$("#oppo").fadeIn(200);
	$("#container img").click(function(event){
		var s=event.target.src.slice(-5,-4);//winner
		var t=$("#oppo").attr("src").slice(-5,-4);//loser
		if((s=="k"&&t=="s"||s=="s"&&t=="r"||s=="r"&&t=="k")&&Date.now()-start<=1000){
			newRound();
		} else {
			if (Date.now()-start>1000){
				dM="too slow";
			} else if (s=="k"&&t!="s"){
				dM="rocks break <span class='underline'>scissors</span> actually";
			} else if (s=="s"&&t!="r"){
				dM="not sure about you but we cut <span class='underline'>paper</span> with scissors";
			} else if (s=="r"&&t!="k"){
				dM="paper covers <span class='underline'>rock</span> obviously";
			} else {
				dM="not sure how you died but meh";
			}
			lose();
		}
	});
});
function newRound() {
	$("#score").html(Number($("#score").html())+(1000-(Date.now()-start)));
	start = Date.now();
	$("#oppo").attr("src",types[Math.floor(Math.random()*types.length)]+".png");
	var imgs = ["rock.png","paper.png","scissors.png"];
	for(var i=1;i<4;i++){
		var j = Math.floor(Math.random()*imgs.length);
		$("#container").find("img:eq("+i+")").attr("src",imgs[j]);
		imgs.splice(j,1);
	}
	$('#timer').stop().css("width","500px");
	setTimeout(function(){$('#timer').animate({
		width:"0",
	},1000, function(){dM="too slow";lose();});}, 0);
}
function lose() {
	$("#container img").off("click");
	$("#container img").addClass("noClickyClicky").click(function(){
		//alert("no u click the FAIL AGAIN button not these images stupid\n\nin case u arent smart heres how:\n1)click the FAIL AGAIN button");
		$("#container #play").css("animation","flash 1s infinite");
	});
	$("#timer").stop().css("display","none");
	$("#oppo").fadeOut(200);
	$("#container #message").html(dM).fadeIn(200);
	$("#container #play").html("FAIL AGAIN").css({"width":"190px","animation":"initial"}).fadeIn(200);
}