// SEAN MADE THIS. https://plus.google.com/u/0/101749103627562194088/
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
$("#day").html(date());
$("#year").html(new Date().getFullYear());
time();
document.styleSheets[0].addRule('#day:after','content: "'+["su","m","tu","w","th","f","sa"][new Date().getDay()]+'";');
setInterval(time, 1000);
function date() {
	var md = [31,28,31,30,31,30,31,31,30,31,30,31];
	if (((new Date().getFullYear() % 4 == 0) && (new Date().getFullYear() % 100 != 0)) || (new Date().getFullYear() % 400 == 0)) {
		md[1]++;
	}
	md.splice(-12+new Date().getMonth(),12-new Date().getMonth());
	function add(a, b) {
		return a + b;
	}
	return md.reduce(add, 0)+new Date().getDate();
}
function time() {
	var time="";
	if (new Date().getHours()<10) {
		time+="0";
	}
	time+=new Date().getHours()+" ";
	if (new Date().getMinutes()<10) {
		time+="0";
	}
	time+=new Date().getMinutes()+" ";
	if (new Date().getSeconds()<10) {
		time+="0";
	}
	time+=new Date().getSeconds();
	$("#time").html(time);
}