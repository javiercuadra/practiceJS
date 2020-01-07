class Game {
	constructor() {
		this.players = this.createPlayers();
		this.board = new Board();
		this.ready = false;
	}

	/**
	 * Creates an array of two players
	 *
	 * @returns An array of the two players
	 */

	createPlayers() {
		const playerArray = [
			new Player('Player 1', 1, '#e15258', true),
			new Player('Player 2', 2, '#e59a13')
		];
		return playerArray;
	}

	/**
	 * Begins the game
	 */
	startGame() {}

	/**
	 * Gets the active player
	 * @returns {Object} The active player
	 */
	get activePlayer() {
		return this.players.find(player => player.active === true);
	}
}
