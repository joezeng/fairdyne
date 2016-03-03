// graphics

var graphics_loader = new PIXI.loaders.Loader();

graphics_loader
	.add("arrow", "img/arrow.png")
	.add("heart", "img/heart.png")
	.add("shield", "img/shield.png")
	.add("undyne", "img/undyne.gif")
	.add("spear", "img/spear.png")
	.on("complete", function(loader, resources) {
		process_graphics(resources);
	})
;

function process_graphics(resources) {
	arrow_texture = resources["arrow"].texture;
	spear_texture = resources["spear"].texture;

	heart_texture = resources["heart"].texture;
	heart_texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

	shield_texture = resources["shield"].texture;
	undyne_texture = resources["undyne"].texture;

	markAssetLoaded("graphics");
}
