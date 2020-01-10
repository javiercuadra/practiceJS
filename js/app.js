const game = new Game();

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
document.getElementById('begin-game').addEventListener('click', function() {
	game.startGame();
	this.style.display = 'none';
	document.getElementById('play-area').style.opacity = '1';
});
<<<<<<< HEAD
=======

/**
 * Listens for keyboard presses
 */
document.addEventListener('keydown', function(event) {
	game.handleKeydown(event);
});
>>>>>>> a8bebc9dc9740fe0ea54d66349b1179f84d19547
