var next_attack = null;

var attack_queue_time = 0;
var attack_timing_queue = [];

function switchAttackMode() {

	var borrowed_time = attack_timing_queue[0].time;
	attack_timing_queue.shift();

	var current_attack = attack_timing_queue[0];
	current_attack.time += borrowed_time;

	switch (current_attack.type) {
		case "arrow":
			box.dest_left = 320 - SHIELD_DISTANCE;
			box.dest_right = 320 + SHIELD_DISTANCE;
			box.dest_top = 240 - SHIELD_DISTANCE;
			box.dest_bottom = 240 + SHIELD_DISTANCE;
			heart.setColour("green");
			break;
		case "spear":
			box.dest_left = 240;
			box.dest_right = 400;
			box.dest_top = 200;
			box.dest_bottom = 360;
			heart.setColour("red");
			break;
	}

}


function addNextAttack() {

	if (next_attack == null) {
		// add default first attack
		addArrowGroup(ag1);
		next_attack = ag1;
		attack_timing_queue.push({ type: next_attack.type, time: next_attack.next_time });
		return;
	}

	attack_queue_time += next_attack.next_time;
	var new_attack = attacks[next_attack.next_sets[Math.floor(next_attack.next_sets.length * Math.random())]];

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

	attack_timing_queue.push({ type: next_attack.type, time: next_attack.next_time });

}
