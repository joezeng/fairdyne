var next_attack = null;

var attack_queue_time = 0;
var attack_queue = [];

var spear_interval = 400;
var spear_time = 0;


function switchAttackMode() {

	var borrowed_time = attack_queue[0].time;
	attack_queue.shift();

	var current_attack = attack_queue[0];
	current_attack.time += borrowed_time;

	switch (current_attack.type) {
		case "arrow":
			undyne.opacity_g.alpha = 0.8;
			box.dest_left = 320 - SHIELD_DISTANCE;
			box.dest_right = 320 + SHIELD_DISTANCE;
			box.dest_top = 240 - SHIELD_DISTANCE;
			box.dest_bottom = 240 + SHIELD_DISTANCE;
			// get rid of all spears
			for (var a = 0; a < spears.length; ++a) {
				spears[a].removed = true;
			}
			for (var a = 0; a < arrows.length; ++a) {
				arrows[a].sprite.visible = true;
			}
			heart.setColour("green");
			break;
		case "spear":
			spear_interval = current_attack.interval;
			undyne.opacity_g.alpha = 0.5;
			box.dest_left = 240;
			box.dest_right = 400;
			box.dest_top = 200;
			box.dest_bottom = 360;
			spear_time = spear_interval + borrowed_time;
			for (var a = 0; a < arrows.length; ++a) {
				arrows[a].sprite.visible = false;
			}
			heart.setColour("red");
			break;
	}

	addNextAttack();

}


function addNextAttack (attack) {

	var new_attack;

	if (attack) {
		attack_queue_time += attack.time;
		new_attack = attack;
	} else {
		attack_queue_time += next_attack.next_time;
		var new_attack = attacks[next_attack.next_sets[Math.floor(next_attack.next_sets.length * Math.random())]];
	}

	switch (new_attack.type) {
		case "arrow":
			// add arrows two attacks in advance.
			addArrowGroup(new_attack);
			break;
		default:
			// for other types, a mode switch is required instead.
			break;
	}

	next_attack = new_attack;

	var attack_info = { type: next_attack.type, time: next_attack.next_time };

	if (new_attack.type == "spear") {
		attack_info.interval = new_attack.spear_interval;
	}

	attack_queue.push(attack_info);

}
