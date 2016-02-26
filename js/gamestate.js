var time_text;
var love_text;

function GameState() {

	this.level = 1;

	time_text = new PIXI.extras.BitmapText("00:00.00", {font: "15px Numbers", align: "left"});
	time_text.position.x = 500;
	time_text.position.y = 450;

	love_text = new PIXI.extras.BitmapText("LV 25", {font: "15px Numbers", align: "left"});
	love_text.position.x = 150;
	love_text.position.y = 450;

	this.restartGame();

}

GameState.prototype.restartGame = function() {

	this.elapsed_time = 0;
	this.score = 0;

}

GameState.prototype.update = function(delta_ms) {

	this.elapsed_time += delta_ms;
	time_text.text = format_time_long(this.elapsed_time);

	for (var a = 0; a < arrows.length; ++a) {
		arrows[a].advanceOneFrame(delta_ms / 1000);
		if (arrows[a].removed) {
			stage.removeChild(arrows[a].sprite);
			arrows.splice(a, 1);
		}
	}
	box.update(delta_ms);
	heart.advanceOneFrame();

}




var gamestate;
