$(document).ready(function() {
    snowFall.snow($("#snow"), {
        minSize: 1,
        maxSize: 8,
        round: true,
        minSpeed: 1,
        maxSpeed: 8,
        flakeCount: 120
    });
	$("#cookie").click(function(){
		var h = "height:" + happy(50,100) + "px;";
		var w = "width:" + happy(50,100) + "px;";
		var t = "top:" + happy(500,550) + "px;";
		var l = "left:" + happy(370,630) + "px;";
		var rgb = "background:rgb(" + happy(0,255) + "," + happy(0,255) + "," + happy(0,255) + ");";
		$('#tree').append("<li style=\"" + rgb + h + w + t + l + "\"></li>");
	});
	function happy(min, max) {
		return Math.round((Math.random() * (max - min)) + min);
	}
});