if (typeof jQuery == "undefined") {
	alert('jQuery is not installed!');
}
$(".code").css("height",$(window).height()-$("#header").height());
$(".code textarea").css("height",$(window).height()-$("#header").height()-4);
$(".code iframe").css("height",$(window).height()-$("#header").height()-4);
$("#toggles li").click(function(){
	$(this).toggleClass("selected");
	$("#"+$(this).html()).toggleClass("unselect");
	//$("#"+$(this).html()).toggle();
	$(".code").css("width",100/$("#toggles .selected").length+"%");
});
$('#run').click(function(){
	$("iframe").contents().find("html")
	.html('<style>'+$("#css textarea").val()+'</style>'+$("#html textarea").val());
	document.getElementById("bubble").contentWindow.eval($("#js textarea").val());
});