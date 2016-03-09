var ag1 = {
	type: "arrow",
	id: "ag1",
	next_time: 3.2,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0.0, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: 0.6, speed: 100 },
		{ direction: "$3", turntype: 0, target_time: 1.2, speed: 100 },
	],
	next_sets: ["ag2"],
};


var ag2 = {
	type: "arrow",
	id: "ag2",
	next_time: 4.5,
	arrows: [
		{ direction: "$3", turntype: 0, target_time: 0.0, speed: 150 },
		{ direction: "$3", turntype: 0, target_time: 0.5, speed: 150 },
		{ direction: "$2", turntype: 0, target_time: 1.0, speed: 150 },
		{ direction: "$2", turntype: 0, target_time: 1.5, speed: 150 },
		{ direction: "$4", turntype: 0, target_time: 2.0, speed: 150 },
		{ direction: "$4", turntype: 0, target_time: 2.5, speed: 150 },
	],
	next_sets: ["ag3"],
};


var ag3 = {
	type: "arrow",
	id: "ag3",
	next_time: 4.8,
	arrows: [
		{ direction: "2", turntype: 0, target_time: 0.0, speed: 200 },
		{ direction: "4", turntype: 0, target_time: 0.4, speed: 200 },
		{ direction: "2", turntype: 0, target_time: 0.8, speed: 200 },
		{ direction: "4", turntype: 0, target_time: 1.2, speed: 200 },
		{ direction: "4", turntype: 0, target_time: 1.6, speed: 200 },
		{ direction: "2", turntype: 0, target_time: 2.0, speed: 200 },
		{ direction: "2", turntype: 0, target_time: 2.4, speed: 200 },
		{ direction: "1", turntype: 0, target_time: 2.8, speed: 200 },
	],
	next_sets: ["ag4a", "ag4b"],
};


var ag4a = {
	type: "arrow",
	id: "ag4a",
	next_time: 4.85,
	arrows: [
		{ direction: "1", turntype: 0, target_time: 0.0, speed: 250 },
		{ direction: "2", turntype: 0, target_time: 0.3, speed: 250 },
		{ direction: "3", turntype: 0, target_time: 0.6, speed: 250 },
		{ direction: "4", turntype: 0, target_time: 0.9, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 1.2, speed: 250 },
		{ direction: "2", turntype: 0, target_time: 1.5, speed: 250 },
		{ direction: "3", turntype: 0, target_time: 1.8, speed: 250 },
		{ direction: "4", turntype: 0, target_time: 2.1, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 2.4, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 2.55, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 2.7, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 2.85, speed: 250 },
	],
	next_sets: ["ag5"],
};


var ag4b = {
	type: "arrow",
	id: "ag4b",
	next_time: 4.85,
	arrows: [
		{ direction: "1", turntype: 0, target_time: 0.0, speed: 250 },
		{ direction: "4", turntype: 0, target_time: 0.3, speed: 250 },
		{ direction: "3", turntype: 0, target_time: 0.6, speed: 250 },
		{ direction: "2", turntype: 0, target_time: 0.9, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 1.2, speed: 250 },
		{ direction: "4", turntype: 0, target_time: 1.5, speed: 250 },
		{ direction: "3", turntype: 0, target_time: 1.8, speed: 250 },
		{ direction: "2", turntype: 0, target_time: 2.1, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 2.4, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 2.55, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 2.7, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 2.85, speed: 250 },
	],
	next_sets: ["ag5"],
};


var ag5 = {
	type: "arrow",
	id: "ag5",
	next_time: 4.1,
	arrows: [
		{ direction: "4", turntype: 0, target_time: 0.0, speed: 250 },
		{ direction: "3", turntype: 0, target_time: 0.3, speed: 250 },
		{ direction: "3", turntype: 0, target_time: 0.45, speed: 250 },
		{ direction: "2", turntype: 0, target_time: 0.75, speed: 250 },
		{ direction: "3", turntype: 0, target_time: 1.05, speed: 250 },
		{ direction: "3", turntype: 0, target_time: 1.2, speed: 250 },
		{ direction: "4", turntype: 0, target_time: 1.5, speed: 250 },
		{ direction: "3", turntype: 0, target_time: 1.8, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 2.1, speed: 250 },
	],
	next_sets: ["ag6"],
};


var ag6 = {
	type: "arrow",
	id: "ag6",
	next_time: 4.25,
	arrows: [
		{ direction: "2", turntype: 0, target_time: 0.0, speed: 250 },
		{ direction: "3", turntype: 0, target_time: 0.25, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 0.5, speed: 250 },
		{ direction: "4", turntype: 0, target_time: 0.75, speed: 250 },
		{ direction: "2", turntype: 0, target_time: 1.0, speed: 250 },
		{ direction: "3", turntype: 0, target_time: 1.25, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 1.5, speed: 250 },
		{ direction: "4", turntype: 0, target_time: 1.75, speed: 250 },
		{ direction: "1", turntype: 0, target_time: 2.0, speed: 250 },
		{ direction: "3", turntype: 0, target_time: 2.25, speed: 250 },
	],
	next_sets: ["sp1"],
};


var ag7 = {
	type: "arrow",
	id: "ag7",
	next_time: 3.75,
	arrows: [
		{ direction: "1", turntype: 0, target_time: 0.0, speed: 300 },
		{ direction: "3", turntype: 0, target_time: 0.25, speed: 300 },
		{ direction: "1", turntype: 0, target_time: 0.5, speed: 300 },
		{ direction: "3", turntype: 0, target_time: 0.75, speed: 300 },
		{ direction: "3", turntype: 0, target_time: 1.0, speed: 300 },
		{ direction: "1", turntype: 0, target_time: 1.25, speed: 300 },
		{ direction: "3", turntype: 0, target_time: 1.5, speed: 300 },
		{ direction: "1", turntype: 0, target_time: 1.75, speed: 300 },
	],
	next_sets: ["ag8"],
};


var ag8 = {
	type: "arrow",
	id: "ag8",
	next_time: 3.5,
	arrows: [
		{ direction: "3", turntype: 0, target_time: 0.0, speed: 300 },
		{ direction: "4", turntype: 0, target_time: 0.25, speed: 300 },
		{ direction: "1", turntype: 0, target_time: 0.5, speed: 300 },
		{ direction: "3", turntype: 0, target_time: 0.75, speed: 300 },
		{ direction: "4", turntype: 0, target_time: 1.0, speed: 300 },
		{ direction: "1", turntype: 0, target_time: 1.25, speed: 300 },
		{ direction: "2", turntype: 0, target_time: 1.5, speed: 75 },
	],
	next_sets: ["ag9"],
};



var ag9 = {
	type: "arrow",
	id: "ag9",
	next_time: 3.5,
	arrows: [
		{ direction: "2", turntype: 0, target_time: 0.0, speed: 400 },
		{ direction: "2", turntype: 0, target_time: 0.2, speed: 320 },
		{ direction: "2", turntype: 0, target_time: 0.5, speed: 240 },
		{ direction: "4", turntype: 0, target_time: 0.9, speed: 400 },
		{ direction: "4", turntype: 0, target_time: 1.1, speed: 320 },
		{ direction: "4", turntype: 0, target_time: 1.4, speed: 240 },
		{ direction: "1", turntype: 0, target_time: 1.7, speed: 300 },
		{ direction: "3", turntype: 0, target_time: 2.0, speed: 300 },
		{ direction: "1", turntype: 0, target_time: 2.3, speed: 300 },
		{ direction: "3", turntype: 0, target_time: 2.6, speed: 300 },
	],
	next_sets: ["ag10"],
};


var ag10 = {
	type: "arrow",
	id: "ag10",
	next_time: 3.5,
	arrows: [
		{ direction: "4", turntype: 0, target_time: 0.0, speed: 200 },
		{ direction: "2", turntype: 0, target_time: 0.25, speed: 200 },
		{ direction: "4", turntype: 0, target_time: 0.5, speed: 200 },
		{ direction: "2", turntype: 0, target_time: 0.75, speed: 200 },
		{ direction: "2", turntype: 0, target_time: 0.9, speed: 300 },
		{ direction: "3", turntype: 0, target_time: 1.15, speed: 300 },
		{ direction: "1", turntype: 0, target_time: 1.4, speed: 300 },
		{ direction: "3", turntype: 0, target_time: 1.65, speed: 300 },
		{ direction: "3", turntype: 0, target_time: 2.0, speed: 400 },
		{ direction: "1", turntype: 0, target_time: 2.25, speed: 400 },
		{ direction: "4", turntype: 0, target_time: 2.5, speed: 400 },
		{ direction: "2", turntype: 0, target_time: 2.75, speed: 400 },
	],
	next_sets: ["sp1"],
};



var sp1 = {
	type: "spear",
	next_time: 10,
	spear_interval: 0.6,
	next_sets: ["ag7"],
};
