$(document).ready(function(){
	$(window).keydown(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			if (!$('input[name=text]').val() == "") {
				$('ul').prepend('<li><p>'+$('input[name=text]').val()+'</p></li>');
			}
			var form = document.getElementById("form");
			form.reset();
		}
	});
});