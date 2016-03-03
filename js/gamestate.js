var time_text;
var love_text;

function GameState() {

	this.game_running = false;
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
	this.game_running = true;

	// have a 2-second buffer before the first attack
	attack_queue_time = 2;
	attack_timing_queue = [ {type: "null", time: 2} ];

	arrows = [];
	spears = [];

	addNextAttack();

	bgm_undyne1.play();

}


GameState.prototype.endGame = function() {

	// remove all arrows and spears

	for (var a = 0; a < arrows.length; ++a)
		gameplay_stage.removeChild(arrows[a].sprite);
	for (var a = 0; a < spears.length; ++a)
		gameplay_stage.removeChild(spears[a].sprite);

	this.game_running = false;
	bgm_undyne1.stop();

}


GameState.prototype.update = function(delta_ms) {

	if (!this.game_running) {
		// heart is still flashing.
		box.update(delta_ms);
		heart.update(delta_ms);
		box.dest_left = 320 - SHIELD_DISTANCE;
		box.dest_right = 320 + SHIELD_DISTANCE;
		box.dest_top = 240 - SHIELD_DISTANCE;
		box.dest_bottom = 240 + SHIELD_DISTANCE;
		heart.setColour("green");
		return;
	}

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

	// spears.update(delta_ms)
	for (var a = 0; a < spears.length; ++a) {
		spears[a].update(delta_ms);
		if (spears[a].removed) {
			gameplay_stage.removeChild(spears[a].sprite);
			spears.splice(a, 1);
		}
	}

	attack_queue_time -= delta_ms / 1000;
	if (next_attack && attack_queue_time <= next_attack.next_time) {
		addNextAttack();
	}

	var current_attack = attack_timing_queue[0];
	current_attack.time -= delta_ms / 1000;

	if (current_attack.type == "spear") {
		spear_time -= delta_ms;
		if (spear_time <= 0) {
			spear_time += spear_interval;
			addNewSpear();
		}
	}

	if (current_attack.time <= 0 ||
		current_attack.time <= 2 && current_attack.type == "spear") {
		switchAttackMode();
	}

	box.update(delta_ms);
	heart.update(delta_ms);

}




var gamestate;
