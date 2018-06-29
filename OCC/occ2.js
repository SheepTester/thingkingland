if (typeof jQuery == "undefined") {
	alert('jQuery is not installed!');
}
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
function generate() {
	var cmmd = "summon FallingSand ~ ~1 ~ {Time:1,Block:redstone_block,Passengers:[{id:FallingSand,Time:1,Block:command_block,TileEntityData:{Command:setblock ~ ~ ~ activator_rail,auto:1b},Passengers:["
	for(var i=0;i<$("li").length;i++){
		if(i>0){cmmd+=",";}
		cmmd+="{id:MinecartCommandBlock,Command:"+$("li input").eq(i).val()+"}";
	}
	cmmd+="]}]}";
	return cmmd;
}
$("textarea").val(generate());
$("#add").click(function(){
	$("#cmmd").append('<li><i class="drag material-icons">drag_handle</i><i class="del material-icons">delete</i><input class="eq" autocomplete="off"spellcheck="false" placeholder="Command"/></li>');
	$("li input").last().focus();
	$("textarea").val(generate());
	$("input").keyup(function(){
		$("textarea").val(generate());
	});
});
$(document).on('click','.del', function(){
	$(this).closest('li').remove();
	$("textarea").val(generate());
});
$(document).on('click','.drag', function(){
	$("textarea").val(generate());
});
$("#cmmd").sortable();