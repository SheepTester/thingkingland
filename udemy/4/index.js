if (typeof jQuery == "undefined") {
	alert('jQuery is not installed!');
}
$(".circle").hover(function(){
	$("#pone").html("hovered circle");
});
$(".circle").click(function(){
	$("#pone").html("clicked circle");
	$(".square").fadeIn();
});
$("#aone").click(function(){
	$("iframe").attr("src","file:///C:/Users/seant/OneDrive/Documents/Udemy/1/index.html");
});
$("#atwo").click(function(){
	$("iframe").attr("src","file:///C:/Users/seant/OneDrive/Documents/Udemy/2/index.html");
});
$("#athr").click(function(){
	$("iframe").attr("src","file:///C:/Users/seant/OneDrive/Documents/Udemy/3/index.html");
});
$("#changer").hover(function(){
	$("#changer").css("color","#00CDFF");
});
$("#changer").click(function(){
	$("#changer").css("color","#0095FF");
});
$("div").click(function(){
	$("#colorRep").html($(this).css("background"));
});
$(".square").click(function(){
	$(this).fadeOut();
});
var bob = 0;
$("#victor").hover(function(){
	if (bob==0){
		$(this).html("click pls");
		$("#victim").html("dont u dare");
	}
});
$("#victee").hover(function(){
	if (bob==1){
		$(this).html("click pls");
		$("#victor").html("no dont");
	}
});
$("#victor").click(function(){
	$(this).html("thx");
	bob = 1;
	$("#victim").html("noooo");
	$("#victim").fadeOut(2000,function(){
		$("#victee").html("click me!");
	});
});
$("#victee").click(function(){
	$(this).html("thx");
	bob = 0;
	$("#victim").html("dont click pink button nxt time pls");
	$("#victor").html("click me!");
	$("#victim").fadeIn("fast");
});
$("#bob").click(function(){
	$(".circle").animate({
		width:"200px",
		height:"200px",
		borderRadius:"100px",
		marginLeft:"100px",
		marginTop:"100px"
	},1500);
});
//following useful for str contains str?
var regex=/b/g; //add 'i' after /great/ for case insensitivity
var string="Regex is bubbles!"
var result = string.match(regex);
$("#bub").html(result);
$("#validForm").submit(function(event){
	var errors = "";
	event.preventDefault();
	function isValidEmailAddress(emailAddress) {
		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		return pattern.test(emailAddress);
	};
	if (!isValidEmailAddress($("#email").val())) {
		errors = "<p>thats not an email btw</p>";
	}
	if (!$.isNumeric($("#num").val())) {
		errors = errors+"<p>do you even know what a number is</p>";
	}
	if ($("#pass").val()!==$("#passc").val()) {
		errors = errors+"<p>repeat means to repeat</p>";
	}
	if (errors=="") {
		alert("okie dokie");
	}else{
		$("#error").html(errors);
		$("#error").fadeIn();
	}
});
$("#sq").draggable();
$("#drag").draggable();
$("#resz").resizable();
$("#sq").droppable({
	drop: function(ui,event){
		$("#drag").css("display","none");
		$("#sq").html("<p>noo you trapped me</p>")
	}
});
$("#accord").accordion();
$("ul").sortable();