/*
SEAN MADE THIS.
https://plus.google.com/u/0/+SeanYentheHumansperson

This is where the main magic happens. That's about it.
/value/ig
i.includes(value)
*/
document.querySelector("#eng").addEventListener("focus", function(){
	document.querySelector("#eyo").setAttribute("disabled","true");
});
document.querySelector("#eng").addEventListener("blur", function(){
	if (document.querySelector("#eng").value=="") {
		document.querySelector("#eyo").removeAttribute("disabled");
	}
});
document.querySelector("#eyo").addEventListener("focus", function(){
	document.querySelector("#eng").setAttribute("disabled","true");
});
document.querySelector("#eyo").addEventListener("blur", function(){
	if (document.querySelector("#eyo").value=="") {
		document.querySelector("#eng").removeAttribute("disabled");
	}
});
document.querySelector("#eng").onchange=document.querySelector("#eng").onkeyup = function() {
	search(document.querySelector("#eng").value.toLowerCase(),0);
};
document.querySelector("#eyo").onchange=document.querySelector("#eyo").onkeyup = function() {
	search(document.querySelector("#eyo").value.toLowerCase(),1);
};
function search(query,id) {
	document.querySelector("ul").innerHTML="";
	if (!/\S/.test(query)) {
		document.querySelector("ul").innerHTML+="<li id='noQuery'><div>Search up words in the input boxes at the top!</div></li>";
		document.querySelector(id?"#eyo":"#eng").value="";
	} else {
		for (var i=0;i<dict.length;i++){
			if (new RegExp(query,"i").test(dict[i][id])) {
				document.querySelector("ul").innerHTML+="<li><div class='en'>"+dict[i][0]+"</div><div class='ey'>"+dict[i][1]+(dict[i][2]?" *":"")+"</div></li>";
			}
		}
	}
}