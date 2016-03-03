var time_text;
var love_text;

function GameState() {

	this.level = 1;

	hp_text = new PIXI.extras.BitmapText("04 / 04", {font: "15px Numbers", align: "right"});
	hp_text.position.x = 300;
	hp_text.position.y = 450;

	time_text = new PIXI.extras.BitmapText("00:00.00", {font: "15px Numbers", align: "left"});
	time_text.position.x = 500;
	time_text.position.y = 450;

	love_text = new PIXI.extras.BitmapText("LV " + this.level, {font: "15px Numbers", align: "left"});
	love_text.position.x = 150;
	love_text.position.y = 450;

	gameplay_stage.addChild(hp_text);
	gameplay_stage.addChild(time_text);
	gameplay_stage.addChild(love_text);

}

GameState.prototype.restartGame = function() {

	this.elapsed_time = 0;
	this.score = 0;

	attack_queue_time = 2;
	attack_timing_queue = [ {type: "null", time: 2} ];

	addNextAttack(ag1);

}

GameState.prototype.update = function(delta_ms) {

	this.elapsed_time += delta_ms;
	time_text.text = format_time_long(this.elapsed_time);

	// arrows.update(delta_ms)
	for (var a = 0; a < arrows.length; ++a) {
		arrows[a].update(delta_ms / 1000);
		if (arrows[a].removed) {
			gameplay_stage.removeChild(arrows[a].sprite);
			arrows.splice(a, 1);
		}
	}

	attack_queue_time -= delta_ms / 1000;
	if (next_attack && attack_queue_time <= next_attack.next_time) {
		addNextAttack();
	}

	var current_attack = attack_timing_queue[0];
	current_attack.time -= delta_ms / 1000;
	if (current_attack.time <= 0 ||
		current_attack.time <= 2 && current_attack.type == "spear") {
		switchAttackMode();
	}

	box.update(delta_ms);
	heart.update(delta_ms);

}




var gamestate;
