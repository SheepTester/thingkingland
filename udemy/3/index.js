//ha
// silly comment, you can't see me
/*
multi
line
comment
*/
document.getElementById("ehh").innerHTML="the text here was changed";
document.getElementById("bah").onclick=function() {
	alert("this site is full of alerts");
}
document.getElementById("changer").onclick=function() {
	document.getElementById("needing").innerHTML="i am changed!";
	document.getElementById("changer").innerHTML="i helped you";
}
document.getElementById("ta").onclick=function() {
	document.getElementById("b").innerHTML=document.getElementById("b").innerHTML + "when others dont believe";
	document.getElementById("ta").innerHTML="life is happy";
}
document.getElementById("make").onclick=function() {
	document.getElementById("c").innerHTML="<ol><li>one</li><li>two</li><li>three</li></ol>";
	document.getElementById("make").innerHTML="yay content";
}
document.getElementById("add").onclick=function() {
	document.getElementById("d").innerHTML=document.getElementById("d").innerHTML + "<li>stuff</li>";
	document.getElementById("add").innerHTML="add more";
}
document.getElementById("clicker").onclick=function() {
	document.getElementById("clicker").innerHTML="";
}
document.getElementById("db").onclick=function() {
	var nt=document.getElementById("mi").value;
	document.getElementById("circle").innerHTML=nt;
}

var ma = new Array();
ma[0]="stuff";
ma[1]="more stuff";
console.log(ma);
var moa=["sheep","happy","bad","disgusting"]
moa.splice(2,3)
moa.push("fluffy");
moa.splice(1,0,"huggable","soft")
console.log(moa);
document.getElementById("sm").onclick=function() {
	document.getElementById("smm").innerHTML=ma[1];
	document.getElementById("smmm").innerHTML=ma + " - - - " + moa + " (length:" + moa.length + ")";
	console.log("button-press logged");
}

document.getElementById("wat").onclick=function() {
	var wt=document.getElementById("wet").value;
	if (wt == "rain") {
		alert("yay good for you");
	} else {
		alert("oh its not raining or you misspelled rain")
	}
}

document.getElementById("try").onclick=function() {
	var random = Math.round(Math.random()*5);
	var g=document.getElementById("guess").value;
	if (random==g) {
		document.getElementById("status").innerHTML="correct!";
	} else {
		document.getElementById("status").innerHTML="wrong it was " + random;
	}
}

document.getElementById("spam").onclick=function() {
	var as = "";
	var meh = ["ill tell you a story"]
	meh.push("there was a sheep");
	meh.push("it was happy");
	meh.push("it was pink");
	meh.push("and fluffy");
	meh.push("and awesome");
	meh.push("the end");
	var i=0;
	while (i<meh.length) { // if the for loop no work
		alert(meh[i]);
		as = as + meh[i] + " | ";
		i++;
	} // that is a mistake in your code
	document.getElementById("as").innerHTML=as;
}
document.getElementById("gen").onclick=function() {
	var r = Math.round(Math.random()*10 + 1);
	document.getElementById("ol").innerHTML="";
	for (var i=1; i<=r; i++) {
		document.getElementById("ol").innerHTML=document.getElementById("ol").innerHTML+"<li></li>";
	}
}

document.getElementById("trry").onclick=function() {
	var g=document.getElementById("gues").value;
	if (g>5) {
		document.getElementById("staus").innerHTML="you have too much fingers";
	} else if (g<0) {
		document.getElementById("staus").innerHTML="you need more fingers";
	} else {
		document.getElementById("staus").innerHTML="<ul id='temp'></ul>";
		var x;
		var guesses=0;
		var done=false;
		while (done==false) {
			x = Math.round(Math.random()*5);
			document.getElementById("temp").innerHTML=document.getElementById("temp").innerHTML+"<li>"+x+"</li>";
			guesses++;
			if (x==g) {
				done = true;
			}
		}
		alert("you are holding up " + x + " fingers");
		alert("it took me " + guesses + " tries D:");
	}
}

function rand(min,max) {
	return Math.round(Math.random()*(max-min)+min);
}
document.getElementById("rand").onclick=function() {
	var a = document.getElementById("min").value;
	var b = document.getElementById("max").value;
	document.getElementById("rand").innerHTML=rand(a,b);
}