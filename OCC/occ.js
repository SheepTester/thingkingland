$(document).ready(function(){
	$("#newCommandBlock").click(function(){
		$("ul").prepend("<li><input type='text'/><div class='remove'></div></li>");
	});
	$("#newRedstoneBlock").click(function(){
		$("ul").prepend("<li class='red'><div class='redstone'></div><div class='remove'></div></li>");
	});
	$(document).on('click','.remove', function(){
		$(this).closest('li').remove();
	});
	$("#done").click(function(){
		var command = "/summon FallingSand ~ ~1 ~ {";
		var blocks = $("li").map(function() {
			if ($(this).attr("class") == "red") {
				return "Time:1,Block:redstone_block";
			} else {
				return "Time:1,Block:command_block,TileEntityData:{Command:" + $(this).children('input').val() + "}";
			}
		}).get();
		for (i = 0; i < blocks.length - 1; i++) {
			command = command + blocks[i] + ",Riding:{id:FallingSand,";
		}
		command = command + blocks[blocks.length-1];
		for (i = 1; i <= blocks.length; i++) {
			command = command + "}";
		}
		$("textarea").val(command);
	});
});