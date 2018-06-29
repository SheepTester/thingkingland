$(document).ready(function(){
	var wood = 0; // ------------- WOOD -------------
	var axe = 1;
    $("#wood").click(function(){
		wood = wood + axe;
		$('#wood .count').html(wood);
	});
	$("#axe").click(function(){
		var woodCosts = [10, 20, 50, 70, 100]
		if (wood >= woodCosts[axe - 1]) {
			wood = wood - woodCosts[axe - 1];
			$('#wood .count').html(wood);
			axe++;
			$('#axe .count').html(axe);
			if (woodCosts.length < axe) {
				$('#axe .info').html("max");
			} else {
				$('#axe .info').html(woodCosts[axe - 1] + " wood");
			}
		}
	});
	var stone = 0; // ------------- STONE -------------
	var pick = 1;
	$("#stone").click(function(){
		stone = stone + pick;
		$('#stone .count').html(stone);
	});
	$("#pick").click(function(){
		var stoneCosts = [10, 20, 50, 70, 100]
		var woodCosts = [3, 6, 15, 20, 30]
		if (stone >= stoneCosts[pick - 1] && wood >= woodCosts[pick - 1]) {
			stone = stone - stoneCosts[pick - 1];
			$('#stone .count').html(stone);
			wood = wood - woodCosts[pick - 1];
			$('#wood .count').html(wood);
			pick++;
			$('#pick .count').html(pick);
			if (stoneCosts.length < pick) {
				$('#pick .info').html("max");
			} else {
				$('#pick .info').html(woodCosts[pick - 1] + " wood, " + stoneCosts[pick - 1] + " stone");
			}
		}
	});
	// setInterval(function(){autoGet(); }, 1000);
});