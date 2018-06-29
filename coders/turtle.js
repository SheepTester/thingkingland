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
$("#left").click(function(){
	$("#cmmd").append('<li><i class="drag material-icons">drag_handle</i><i class="del material-icons">delete</i><i class="i material-icons">arrow_back</i></li>');
});
$("#right").click(function(){
	$("#cmmd").append('<li><i class="drag material-icons">drag_handle</i><i class="del material-icons">delete</i><i class="i material-icons">arrow_forward</i></li>');
});
$("#up").click(function(){
	$("#cmmd").append('<li><i class="drag material-icons">drag_handle</i><i class="del material-icons">delete</i><i class="i material-icons">arrow_upward</i></li>');
});
$("#down").click(function(){
	$("#cmmd").append('<li><i class="drag material-icons">drag_handle</i><i class="del material-icons">delete</i><i class="i material-icons">arrow_downward</i></li>');
});
$("#color").click(function(){
	$("#cmmd").append('<li><i class="drag material-icons">drag_handle</i><i class="del material-icons">delete</i><i class="i material-icons">palette</i></li>');
});
var colors = ["#F44336","#FF5722","#FF9800","#FFC107","#FFEB3B","#CDDC39","#8BC34A","#4CAF50","#009688","#00BCD4","#03A9F4",
"#2196F3","#3F51B5","#673AB7","#9C27B0","#E91E63","#9E9E9E","#607D8B","#FFFFFF","#795548"];
function move(ii) {
	if (ii<$("li").length){
		var x = Number($('#turtle').css('left').replace(/[^-\d\.]/g, ''));
		var y = Number($('#turtle').css('bottom').replace(/[^-\d\.]/g, ''));
		switch($("li .i").eq(ii).html()) {
			case "arrow_upward":
				setTimeout(function(){$('#turtle').animate({
					bottom: y+100+"px",
				},200, function(){
					console.log("Moved up");
					move(ii+1);
				});},0);
				break;
			case "arrow_downward":
				setTimeout(function(){$('#turtle').animate({
					bottom: y-100+"px",
				},200, function(){
					console.log("Moved down");
					move(ii+1);
				});},0);
				break;
			case "arrow_back":
				setTimeout(function(){$('#turtle').animate({
					left: x-100+"px",
				},200, function(){
					console.log("Moved left");
					move(ii+1);
				});},0);
				break;
			case "arrow_forward":
				setTimeout(function(){$('#turtle').animate({
					left: x+100+"px",
				},200, function(){
					console.log("Moved right");
					move(ii+1);
				});},0);
				break;
			case "palette":
				setTimeout(function(){$('#turtle').animate({
					backgroundColor: colors[Math.floor(Math.random() * colors.length)],
				},200, function(){
					console.log("Changed color");
					move(ii+1);
				});},0);
				break;
		}
	} else {
		setTimeout(function(){$('#container').animate({
			opacity: "1",
		},500);},0);
	}
}
$("#run").click(function(){
	setTimeout(function(){$('#container').animate({
		opacity: "0.3",
	},500, function(){
		move(0);
	});},0);
});
$("#reset").click(function(){
	setTimeout(function(){$('#turtle').animate({
		left: 0,
		bottom: 0,
		backgroundColor: "rgb(0, 188, 212)",
	},500);},0);
});
$(document).on('click','.del', function(){
	$(this).closest('li').remove();
});
$("#cmmd").sortable();