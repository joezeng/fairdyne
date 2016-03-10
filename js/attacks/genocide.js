var g_ag1 = {
	type: "arrow",
	id: "g_ag1",
	next_time: 4.8,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0.0, speed: 40 },
		{ direction: "$3", turntype: 0, target_time: 1.6, speed: 40 },
		{ direction: "$3", turntype: 0, target_time: 3.2, speed: 40 },

		{ direction: "$4", turntype: 0, target_time: 0.3, speed: 500 },
		{ direction: "$1", turntype: 0, target_time: 0.6, speed: 500 },
		{ direction: "$2", turntype: 0, target_time: 0.9, speed: 500 },
		{ direction: "$4", turntype: 0, target_time: 1.2, speed: 500 },
		{ direction: "$1", turntype: 0, target_time: 1.4, speed: 500 },

		{ direction: "$2", turntype: 0, target_time: 1.9, speed: 500 },
		{ direction: "$1", turntype: 0, target_time: 2.2, speed: 500 },
		{ direction: "$4", turntype: 0, target_time: 2.5, speed: 500 },
		{ direction: "$2", turntype: 0, target_time: 2.8, speed: 500 },
		{ direction: "$1", turntype: 0, target_time: 3.0, speed: 500 },

		{ direction: "$4", turntype: 0, target_time: 3.5, speed: 500 },
		{ direction: "$2", turntype: 0, target_time: 3.8, speed: 500 },
		{ direction: "$4", turntype: 0, target_time: 4.1, speed: 500 },
		{ direction: "$2", turntype: 0, target_time: 4.4, speed: 500 },
		{ direction: "$1", turntype: 0, target_time: 4.6, speed: 500 },
	],
	next_sets: ["g_sp1"],
}



var g_sp1 = {
	type: "spear",
	next_time: 10,
	spear_interval: 300,
	next_sets: ["g_sp2"],
};


var g_sp2 = {
	type: "spear",
	next_time: 10,
	spear_interval: 200,
	next_sets: ["g_sp1"],
};
