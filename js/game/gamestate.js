var time_text;
var love_text;

var april_fools = false;

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

	if (undyne.text_state != "none"){
		switch(key) {
			case "A":
				undyne.advanceTextA();
				break;
			case "B":
				undyne.advanceTextB();
				break;
			default:
				break;
		}
	} else if (this.state == "menu") {
		switch(key) {
			case "up":
				menu.moveUp();
				break;
			case "down":
				menu.moveDown();
				break;
			case "A":
				menu.select();
			default:
				break;
		}
	} else if (this.state == "playing") {
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
			default:
				break;
		}
	}

}

GameState.prototype.restartGame = function(difficulty) {

	var date = new Date();

	if (april_fools || date.getMonth() == 3 && date.getDate() == 1) {
		if (april_fools == false) {
			heart.setMaxHP(99);
		} else {
			switch(difficulty){
				case "normal":
					heart.setMaxHP(99); break;
				case "hard":
					heart.setMaxHP(20); break;
				case "genocide":
					heart.setMaxHP(4); break;
			}
		}
		difficulty = "aprilfools";
		april_fools = true;
	}

	this.difficulty = difficulty;

	this.elapsed_time = 0;
	this.score = 0;
	this.state = "playing";

	arrows = [];
	spears = [];
	next_attack = null;

	heart.hp = heart.maxhp;
	hp_text.text = _.padStart(heart.hp, 2, "0") + " / " + _.padStart(heart.maxhp, 2, "0");

	switch (difficulty) {
		case "normal":
			heart.invincibility_increment = 1000; break;
		case "hard":
			heart.invincibility_increment = 500; break;
		case "genocide":
		case "aprilfools":
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
		case "aprilfools":
			attack_queue_time = 6.4;
			attack_queue = [ { type: "null", time: 6.4 } ];
			addNextAttack(af_ag1);
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
		case "aprilfools":
			bgm_undyne2.play(); break;
	}

	switchAttackMode();

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

	menu.select_text.text = "Play again?"

	switch (this.difficulty) {
		case "normal":
		case "hard":
			bgm_undyne1.stop(); break;
		case "genocide":
		case "aprilfools":
			bgm_undyne2.stop();	break;
	}

	if (this.difficulty == "aprilfools") {
		document.getElementById("fairdyne").innerHTML = "APRIL FOOLS";
		menu.normal_text_text = "I want to BE AN APRIL FOOL";
		menu.hard_text_text = "I want OUT OF THIS MODE";
		menu.genocide_text_text = "I want to PLAY THIS MODE FOR REAL";
		menu.normal_text.text = "I want to BE AN APRIL FOOL";
		menu.hard_text.text = "I want OUT OF THIS MODE";
		menu.genocide_text.text = "I want to PLAY THIS MODE FOR REAL";
	}

	undyne.queue_text(endGameText(this.difficulty, this.elapsed_time), menu.show.bind(menu));

}

var annoyance = 0;

function endGameText(diff, surv_time) {
	switch (diff) {
		case "normal":
			if (surv_time < 6890) {
				++annoyance;
				switch (annoyance) {
					case 1:
						return [
							{ text: "Look, I gave you\na shield for one\npurpose and one\npurpose only."},
							{ text: "To DEFEND YOURSELF."},
							{ text: "Can't get more\nstraightforward\nthan that."},
						];
					case 2:
						return [
							{ text: "Are you just doing\nthat on purpose?", face: 2 },
							{ text: "Because it's not\nfunny. Stop it." },
						];
					default:
						menu.disableEasyMode();
						return [
							{ text: "NGAHHHHHHH!", face: 3 },
							{ text: "If you're not going\nto take this\nseriously...", face: 1 },
							{ text: "I'm just going to\nhave to force you\nto try harder!", face: 3 },
						];
				}
			} else if (surv_time < 60000)
				return [
					{ text: "Is that the best\nyou've got?" },
					{ text: "Pathetic. I know you\ncan do better!" },
				];
			else if (surv_time < 120000)
				return [
					{ text: "Good, but still\nnot good enough." },
					{ text: "Keep trying, human!\nReach for the top!" },
				];
			else {
				menu.disableEasyMode();
				return [
					{ text: "You're doing well,\nbut only because I'm\ngoing easy on you." },
					{ text: "It won't be so easy\nnext time!" },
				];
			}
		case "hard":
			if (surv_time < 60000)
				return [
					{ text: "Is that the best\nyou've got?" },
					{ text: "Pathetic. I know you\ncan do better!" },
				];
			else if (surv_time < 120000)
				return [
					{ text: "Good, but still\nnot good enough." },
					{ text: "Keep trying, human!\nReach for the top!" },
				];
			else
				return [
					{ text: "You're doing well." },
					{ text: "But you can still\ndo better! Let me\ngo harder on you!" },
				];
		case "genocide":
			return [
				{ text: "You're going to have\nto try a little\nharder than THAT." },
			];
		case "aprilfools":
			return [
				{ text: "APRIL FOOLS,\nMOTHERFUCKERS!" },
			];
		default:
			return [
				{ text: "Is that the best\nyou've got?" },
				{ text: "Pathetic. I know you\ncan do better!" },
			];
	}
}


GameState.prototype.update = function(delta_ms) {

	box.update(delta_ms);
	heart.update(delta_ms);
	undyne.update(delta_ms);
	menu.update(delta_ms);

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

		// pikes.update(delta_ms)
		for (var a = 0; a < pikes.length; ++a) {
			pikes[a].update(delta_ms);
			if (pikes[a].removed) {
				gameplay_stage.removeChild(pikes[a].sprite);
				pikes.splice(a, 1);
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
		} else if (current_attack.type == "pike") {
			pike_time -= delta_ms;
			if (pike_time <= 0) {
				pike_time += pike_interval;
				addNewPike();
			}
		}

		if (current_attack.time <= 0.4 + (current_attack.buffer_time || 0) &&
			current_attack.type != attack_queue[1].type)
				undyne.swing_arm();

		if (current_attack.time <= (current_attack.buffer_time || 0))
				switchAttackMode();

	} else if (this.state == "gameover") {

	} else {

	}

}




var gamestate;
