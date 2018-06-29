if (typeof jQuery == "undefined") {
	alert('jQuery is not installed. That means that this won\'t work.');
}
function querySt(ji) {

    hu = window.location.search.substring(1);
    gy = hu.split("&");

    for (i=0;i<gy.length;i++) {
        ft = gy[i].split("=");
        if (ft[0] == ji) {
            return ft[1];
        }
    }
}
if (!querySt("eq")==""){
	$('#eq').val(querySt("eq"));
	if ($("#eq").val().toLowerCase().indexOf("the answer to life the universe and everything")>-1){
		$("#result").html("=42");
	} else {
		$("#result").html("="+calculate($("#eq").val(),0));
	}
}
$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});
var ob = [];
function calculate(e,id){
	if (id==0){
		ob = [];
	}
	var c = '1234567890.'.split('');
	var o = 'abcdefghijklmnopqrstuvwxyz+-*/^%'.split('');
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var p = '(√|šç¦'.split('');
	if (id>0&&ob[id]!=[]) {
		ob[id]=[];
	} else {
		ob.push([]);
	}
	var i = 0;
	var wasCaused = 0;
	for (var l=0;l<e.length;l++){
		if (e.charAt(l)=="("&&i==0) {
			if (ob[id][ob[id].length-1]=="sqrt") {
				ob[id][ob[id].length-1]="√";
			} else if (ob[id][ob[id].length-1]=="abs") {
				ob[id][ob[id].length-1]="|";
			} else if (ob[id][ob[id].length-1]=="sin") {
				ob[id][ob[id].length-1]="š";
			} else if (ob[id][ob[id].length-1]=="cos") {
				ob[id][ob[id].length-1]="ç";
			} else if (ob[id][ob[id].length-1]=="tan") {
				ob[id][ob[id].length-1]="¦";
			} else {
				ob[id].push("(");
			}
			i++;
			ob[id].push("");
			wasCaused = "paran";
		} else {
			if (i>0) {
				if (wasCaused=="paran"){
					if (e.charAt(l)==")"){
						i--;
						if (i==0){
							wasCaused=0;
						} else {
							ob[id][ob[id].length-1]+=e.charAt(l);
						}
					} else if (c.includes(e.charAt(l))||o.includes(e.charAt(l))) {
						ob[id][ob[id].length-1]+=e.charAt(l);
					} else if (e.charAt(l)=="("){
						i++;
						ob[id][ob[id].length-1]+=e.charAt(l);
					}
				} else if (wasCaused=="negNum"){
					if (c.includes(e.charAt(l))) {
						ob[id][ob[id].length-1]+=e.charAt(l);
					} else {
						i--;
						ob[id].push(e.charAt(l));
						wasCaused=0;
					}
				}
			} else {
				if (e.charAt(l)=="-"&&!c.includes(e.charAt(l-1))) {
					if (e.charAt(l+1)=="(") {
						ob[id].push("(");
						ob[id].push("-1");
					} else {
						ob[id].push("(");
						i++;
						ob[id].push("0-");
						wasCaused = "negNum";
					}
				} else {
					if (o.includes(e.charAt(l))&&!alphabet.includes(e.charAt(l-1))/*&&!o.includes(e.charAt(l-1))*/) {
						ob[id].push(e.charAt(l));
					} else if (c.includes(e.charAt(l))&&!c.includes(e.charAt(l-1))) {
						ob[id].push(e.charAt(l));
					} else if (c.includes(e.charAt(l))||o.includes(e.charAt(l))){
						ob[id][ob[id].length-1]+=e.charAt(l);
					}
				}
			}
		}
	}
	if (isNaN(ob[id][ob[id].length-1])&&(
		o.includes(ob[id][ob[id].length-1])||alphabet.includes(ob[id][ob[id].length-1].charAt(ob[id][ob[id].length-1].length-1))
	)){
		ob[id].pop();
	}
	if (isNaN(ob[id][0])&&!p.includes(ob[id][0])){
		ob[id].shift();
	}
	
	if (ob[id].includes("(")||ob[id].includes("√")||ob[id].includes("|")||ob[id].includes("š")||ob[id].includes("ç")||ob[id].includes("¦")){
		for(var l=0;l<ob[id].length;l++){
			if (p.includes(ob[id][l])){
				if (ob[id][l]=="("){
					ob[id][l+1]=calculate(ob[id][l+1],id+1);
				} else if (ob[id][l]=="√"){
					ob[id][l+1]=Math.sqrt(ob[id][l+1]);
				} else if (ob[id][l]=="|"){
					ob[id][l+1]=Math.abs(ob[id][l+1]);
				} else if (ob[id][l]=="š"){
					ob[id][l+1]=Math.sin(ob[id][l+1]*(Math.PI/180));
				} else if (ob[id][l]=="ç"){
					ob[id][l+1]=Math.cos(ob[id][l+1]*(Math.PI/180));
				} else if (ob[id][l]=="¦"){
					ob[id][l+1]=Math.tan(ob[id][l+1]*(Math.PI/180));
				}
				ob[id].splice(l,1);
				if (!o.includes(ob[id][l-1])&&!ob[id][l-1]==""){
					ob[id].splice(l,0,"*");
				}
			}
		}
	}
	if (ob[id].includes("^")){
		for(var l=ob[id].length-2;l>0;l-=2){
			if (ob[id][l]=="^"){
				ob[id][l]=Math.pow(Number(ob[id][l-1]),Number(ob[id][l+1]));
				ob[id].splice(l+1,1);
				ob[id].splice(l-1,1);
				l+=2;
			}
		}
	}
	if (ob[id].includes("/")||ob[id].includes("*")||ob[id].includes("%")){
		for(var l=1;l<ob[id].length;l+=2){
			if (ob[id][l]=="*"){
				ob[id][l]=Number(ob[id][l-1]) * Number(ob[id][l+1]);
				ob[id].splice(l+1,1);
				ob[id].splice(l-1,1);
				l-=2;
			}
			if (ob[id][l]=="/"){
				ob[id][l]=Number(ob[id][l-1]) / Number(ob[id][l+1]);
				ob[id].splice(l+1,1);
				ob[id].splice(l-1,1);
				l-=2;
			}
			if (ob[id][l]=="%"){
				ob[id][l]=Number(ob[id][l-1]) % Number(ob[id][l+1]);
				ob[id].splice(l+1,1);
				ob[id].splice(l-1,1);
				l-=2;
			}
		}
	}
	if (ob[id].includes("+")||ob[id].includes("-")){
		for(var l=1;l<ob[id].length;l+=2){
			if (ob[id][l]=="+"){
				ob[id][l]=Number(ob[id][l-1]) + Number(ob[id][l+1]);
				ob[id].splice(l+1,1);
				ob[id].splice(l-1,1);
				l-=2;
			}
			if (ob[id][l]=="-"){
				ob[id][l]=Number(ob[id][l-1]) - Number(ob[id][l+1]);
				ob[id].splice(l+1,1);
				ob[id].splice(l-1,1);
				l-=2;
			}
		}
	}
	
	if (ob[id].length>1){
		return "Error";
	} else if (ob[id].length==0||ob[id][0]=="") {
		return 0;
	} else {
		return ob[id].toString();
	}
	//return ob;
}
$("#eq").keyup(function(){
	if ($("#eq").val().toLowerCase().indexOf("the answer to life the universe and everything")>-1){
		$("#result").html("=42");
	} else {
		$("#result").html("="+calculate($("#eq").val(),0));
	}
});
setTimeout(function(){$('#white').animate({
	height:"0%",
},500);}, 100);
if (!(!!window.chrome && !!window.chrome.webstore)){
	alert("Warning: this was made and tested in Google Chrome so it might not work in other browsers.");
}
var showingHelp = false;
$("#help").click(function(){
	if (showingHelp){
		$("#note").fadeOut();
	} else {
		$("#note").fadeIn();
	}
	showingHelp = !showingHelp;
});