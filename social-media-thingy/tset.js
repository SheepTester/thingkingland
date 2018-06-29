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
var menuOpen=false;
$("#edit").focus();
$("#menu").click(function(){
	if(menuOpen){
		$("#mn").css("left","-"+($("#mn").width()+50)+"px");
		$("#menu").css("box-shadow","0 0 10px #888");
	}else{
		$("#mn").css("left","0");
		$("#menu").css("box-shadow","none");
	}
	menuOpen=!menuOpen;
});
$("#cancel").click(function(){
	$("#edit").html("").focus();
});
$("#postPost").click(function(){
	var b=false,e=false,u=false,s=false,str=$("#edit").html();
	str=str.replace(/<div>/g, '<br>');
	str=str.replace(/<\/div>/g, '');
	for(var i=0;i<str.length;i++){
		if(["*","/","_","-"].indexOf(str[i])>-1&&str[i-1]!="\\"){
			switch(str[i]){
				case"*":
					str=str.slice(0,i)+"<"+(b?"/":"")+"strong>"+str.slice(i+1);
					b=!b;
					i+=7+(b?1:0);
					break;
				case"/":
					str=str.slice(0,i)+"<"+(e?"/":"")+"em>"+str.slice(i+1);
					e=!e;
					i+=3+(e?1:0);
					break;
				case"_":
					str=str.slice(0,i)+"<"+(u?"/":"")+"u>"+str.slice(i+1);
					u=!u;
					i+=2+(u?1:0);
					break;
				case"-":
					str=str.slice(0,i)+"<"+(s?"/":"")+"strike>"+str.slice(i+1);
					s=!s;
					i+=7+(s?1:0);
					break;
			}
		}else if(["*","/","_","-"].includes(str[i+1])&&str[i]=="\\"){
			str=str.slice(0,i)+str.slice(i+1);
		}
	}
	/*if(b){
		str+="</strong>";
	}
	if(e){
		str+="</em>";
	}
	if(u){
		str+="</u>";
	}
	if(s){
		str+="</strike>";
	}*/
	if(str!=""){
		$("#posts").prepend("<div class='paper'>"+str+"</div>");
	}
	$("#edit").html("").focus();
});