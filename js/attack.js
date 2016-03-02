var current_attack = null;
var attack_time = 2;

function addNextAttack() {

	if (current_attack == null) {
		addArrowGroup(ag1);
		current_attack = ag1;
		return;
	}

	attack_time += current_attack.next_time;
	var new_attack = attacks[current_attack.next_sets[Math.floor(current_attack.next_sets.length * Math.random())]];

	switch (current_attack.type) {
		case "arrow":
			addArrowGroup(new_attack);
			break;
		default:
			break;
	}

	current_attack = new_attack;

}

var attacks = {
	ag1: ag1,
	ag2: ag2,
	ag3: ag3,
	ag4a: ag4a,
	ag4b: ag4b,
	ag5: ag5,
	ag6: ag6,
};
