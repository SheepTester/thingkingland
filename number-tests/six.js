$(document).ready(function(){
	var color = "white";
	// -------------- GENERATE PAPER --------------
	for (var i = 1; i <= 12; i++){
		$("body").append("<ul class=\"bob\"></ul>")
	}
	for (var i = 1; i <= 24; i++){
		$(".bob").prepend("<li class=\"white\"></li>")
	}
	// -------------- PAINTING COLOR --------------
	$(".bob li").mousedown(function(){
		$(this).removeClass();
		$(this).addClass(color);
	});
	var isDown = false;   // Tracks status of mouse button
	$(document).mousedown(function() {
    isDown = true;      // When mouse goes down, set isDown to true
	})
	.mouseup(function() {
		isDown = false;    // When mouse goes up, set isDown to false
	});
	$(".bob li").mouseover(function(){
		if(isDown) {        // Only change css if mouse is down
			$(this).removeClass();
			$(this).addClass(color);
		}
	});
	// -------------- COLOR SELECT --------------
	$("#button .red").click(function(){
		color = "red";
	});
	$("#button .dorange").click(function(){
		color = "dorange";
	});
	$("#button .orange").click(function(){
		color = "orange";
	});
	$("#button .amber").click(function(){
		color = "amber";
	});
	$("#button .yellow").click(function(){
		color = "yellow";
	});
	$("#button .lime").click(function(){
		color = "lime";
	});
	$("#button .lgreen").click(function(){
		color = "lgreen";
	});
	$("#button .green").click(function(){
		color = "green";
	});
	// -------------- COLOR SELECT --------------
	$("#button .teal").click(function(){
		color = "teal";
	});
	$("#button .cyan").click(function(){
		color = "cyan";
	});
	$("#button .lblue").click(function(){
		color = "lblue";
	});
	$("#button .blue").click(function(){
		color = "blue";
	});
	$("#button .indigo").click(function(){
		color = "indigo";
	});
	$("#button .dpurple").click(function(){
		color = "dpurple";
	});
	$("#button .purple").click(function(){
		color = "purple";
	});
	$("#button .pink").click(function(){
		color = "pink";
	});
	$("#button .white").click(function(){
		color = "white";
	});
	// -------------- COLOR SELECT --------------
	$("#button .grey").click(function(){
		color = "grey";
	});
	$("#button .bgrey").click(function(){
		color = "bgrey";
	});
	$("#button .black").click(function(){
		color = "black";
	});
	$("#button .brown").click(function(){
		color = "brown";
	});
});