player.onTravelled(WALK, function () {
    blocks.fill(
    GRASS,
    pos(0, 0, 0),
    pos(0, 0, 0),
    FillOperation.Replace
    )
})
player.onChat("run", function () {
	
})
