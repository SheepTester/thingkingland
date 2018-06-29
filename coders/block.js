if (typeof jQuery == "undefined") {
	alert('jQuery isn\'t available. That means that this won\'t work.');
}
$('h1').html(document.title);
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
$("#cmmd").sortable();
$(".input").keydown(function(){
	$('.remove').remove();
	var input = $(this),
	dummy = $('<div style="position:absolute; left: -1000%;">').appendTo('body');
	['font-size','font-style','font-weight','font-family','line-height','text-transform','letter-spacing'].forEach(function(index) {
		dummy.css(index, input.css(index));
	});
	dummy.addClass("remove");
	input.on('input', function() {
		dummy.html(this.value);
		input.width(dummy.width());
	});
});