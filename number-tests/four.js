$(document).ready(function(){
	var score = 0; //sheep
    $("#cookie").click(function(){
		score++;
		$('#sheep').html("Sheep: " + score);
	});
	function autoGet() {
		var freeSheep = 0;
		freeSheep = freeSheep + helpers * 1;
		freeSheep = freeSheep + spawners * 10;
		freeSheep = freeSheep + facts * 100;
		freeSheep = freeSheep + farms * 1000;
		freeSheep = freeSheep + lands * 10000;
		freeSheep = freeSheep + moms * 100000;
		freeSheep = freeSheep + citys * 1000000;
		
		score = freeSheep + score;
		$('#sheep').html("Sheep: " + score);
	}
	setInterval(function(){autoGet(); }, 1000);
	var helpers = 0; //helpers
    $("#helpers").click(function(){
		if (score >= 10) {
			helpers++;
			$('#helper').html("Helpers: " + helpers);
			score = score - 10;
			$('#sheep').html("Sheep: " + score);
		}
	});
	var spawners = 0; //spawners
    $("#spawners").click(function(){
		if (score >= 100) {
			spawners++;
			$('#spawner').html("Sheep Spawners: " + spawners);
			score = score - 100;
			$('#sheep').html("Sheep: " + score);
		}
	});
	var facts = 0; //factories
    $("#facts").click(function(){
		if (score >= 1000) {
			facts++;
			$('#fact').html("Sheep Factories: " + facts);
			score = score - 1000;
			$('#sheep').html("Sheep: " + score);
		}
	});
	var farms = 0; //farms
    $("#farms").click(function(){
		if (score >= 10000) {
			farms++;
			$('#farm').html("Sheep Farms: " + farms);
			score = score - 10000;
			$('#sheep').html("Sheep: " + score);
		}
	});
	var lands = 0; //SheepLand
    $("#lands").click(function(){
		if (score >= 100000) {
			lands++;
			$('#land').html("SheepLands: " + lands);
			score = score - 100000;
			$('#sheep').html("Sheep: " + score);
		}
	});
	var moms = 0; //mama sheep
    $("#moms").click(function(){
		if (score >= 1000000) {
			moms++;
			$('#mom').html("Mama Sheep: " + moms);
			score = score - 1000000;
			$('#sheep').html("Sheep: " + score);
		}
	});
	var citys = 0; //sheep city
    $("#citys").click(function(){
		if (score >= 10000000) {
			citys++;
			$('#city').html("Sheep City: " + citys);
			score = score - 10000000;
			$('#sheep').html("Sheep: " + score);
		}
	});
});