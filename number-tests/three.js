$(document).ready(function(){
    $("div").click(function(){
		$("ul").append("<li></li>")
	});
	$(document).on('click','li', function(){
        $(this).remove();
    });
});