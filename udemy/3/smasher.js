function rand(min,max) {
	return Math.round(Math.random()*(max-min)+min);
}
function randColor() {
	var color = "rgb(";
	color += rand(0,255) + ",";
	color += + rand(0,255) + ",";
	color += + rand(0,255) + ")";
	return color;
}
// document.getElementById("changer").onclick=function() {}
// document.getElementById("ehh").innerHTML
var clickedTime;var createdTime;var reacTime;var hw;var hscore = 1000;
function makeBox() {
	setTimeout(function() {
		document.getElementById("square").style.display="block";
		document.getElementById("square").style.background=randColor();
		hw = rand(50,300);
		document.getElementById("square").style.height=hw+"px";
		document.getElementById("square").style.width=hw+"px";
		document.getElementById("square").style.borderRadius=rand(0,50)+"%";
		document.getElementById("square").style.top=rand(0,100)+"px";
		document.getElementById("square").style.left=rand(0,100)+"px";
		createdTime=Date.now();
	},rand(0,5000));
}
document.getElementById("square").onclick=function() {
	clickedTime=Date.now();
	reacTime=(clickedTime - createdTime)/1000;
	document.getElementById("time").innerHTML=reacTime;
	if (reacTime<hscore) {
		hscore = reacTime;
		document.getElementById("hscore").innerHTML=hscore;
	}
	this.style.display="none";
	makeBox();
}
document.getElementById("inst").onclick=function() {
	alert("random shapes will appear");
	alert("click on them as fast as you can");
	alert("the shorter reaction time the better");
	alert("if you have a very short reaction time you will know what to do if someone shoots you");
	alert("good luck and hopefully you can dodge bullets");
}
makeBox();