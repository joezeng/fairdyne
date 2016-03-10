var time_text;
var love_text;

function GameState() {

	this.state = "menu";
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

}

GameState.prototype.handleInput = function(key) {

	switch(key) {
		case "left":
			heart.setShieldDir(2);
			break;
		case "right":
			heart.setShieldDir(4);
			break;
		case "up":
			heart.setShieldDir(3);
			break;
		case "down":
			heart.setShieldDir(1);
			break;
		case "A":
			undyne.advanceTextA();
			break;
		case "B":
			undyne.advanceTextB();
			break;
		default:
			break;
	}

}

GameState.prototype.restartGame = function(difficulty) {

	this.difficulty = difficulty;

	this.elapsed_time = 0;
	this.score = 0;
	this.state = "playing";

	arrows = [];
	spears = [];
	next_attack = null;
	heart.hp = heart.maxhp;

	switch (difficulty) {
		case "normal":
			heart.invincibility_increment = 1000; break;
		case "hard":
			heart.invincibility_increment = 500; break;
		case "genocide":
			heart.invincibility_increment = 100; break;
	}

	switch (difficulty) {
		case "normal":
		case "hard":
			// have a 2-second buffer before the first attack
			attack_queue_time = 2;
			attack_queue = [ { type: "null", time: 2 } ];
			addNextAttack(ag1);
			break;
		case "genocide":
			// genocide is timed to the music.
			attack_queue_time = 6.4;
			attack_queue = [ { type: "null", time: 6.4 } ];
			addNextAttack(g_ag1);
			break;
	}


	box.dest_left = 320 - SHIELD_DISTANCE;
	box.dest_right = 320 + SHIELD_DISTANCE;
	box.dest_top = 240 - SHIELD_DISTANCE;
	box.dest_bottom = 240 + SHIELD_DISTANCE;
	heart.sprite.visible = true;
	heart.shield_sprite.visible = true;

	switch (difficulty) {
		case "normal":
		case "hard":
			bgm_undyne1.play(); break;
		case "genocide":
			bgm_undyne2.play(); break;
	}

}


GameState.prototype.endGame = function() {

	// remove all arrows and spears

	for (var a = 0; a < arrows.length; ++a)
		gameplay_stage.removeChild(arrows[a].sprite);
	for (var a = 0; a < spears.length; ++a)
		gameplay_stage.removeChild(spears[a].sprite);

	if (box.top < 240 - SHIELD_DISTANCE) box.top = 240 - SHIELD_DISTANCE;

	heart.shield_sprite.visible = false;
	undyne.opacity_g.alpha = 0;
	this.state = "gameover";

	switch (this.difficulty) {
		case "normal":
		case "hard":
			bgm_undyne1.stop(); break;
		case "genocide":
			bgm_undyne2.stop();	break;
	}

	undyne.queue_text([
		{ text: "Is that the best\nyou've got?" },
		{ text: "Pathetic. I know you\ncan do better!" },
	], function(){gamestate.restartGame("normal")});

}


GameState.prototype.update = function(delta_ms) {

	box.update(delta_ms);
	heart.update(delta_ms);
	undyne.update(delta_ms);

	if (this.state == "playing") {
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

		var current_attack = attack_queue[0];
		current_attack.time -= delta_ms / 1000;

		if (current_attack.type == "spear") {
			spear_time -= delta_ms;
			if (spear_time <= 0) {
				spear_time += spear_interval;
				addNewSpear();
			}
		}

		// TODO: factor out this really convoluted if statement.
		if (current_attack.time <= 0.4 && current_attack.type != attack_queue[1].type
				&& !(current_attack.type != "arrow" && attack_queue[1].type == "arrow") ||
			current_attack.time <= 2.4 && current_attack.type != "null" && current_attack.type != "arrow"
				&& attack_queue[1].type == "arrow") {
			undyne.swing_arm();
		}

		if (current_attack.time <= 0 ||
			current_attack.time <= 2 && current_attack.type != "arrow" && attack_queue[1].type == "arrow") {
			switchAttackMode();
			addNextAttack();
		}

	} else if (this.state == "gameover") {

	} else {

	}

}




var gamestate;
