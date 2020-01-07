class Board {
	constructor() {
		this.rows = 6;
		this.columns = 7;
		this.spaces = this.createSpaces(rows, columns);
	}

	/**
	 * Creates a 2D Array of all the spaces on the board
	 *
	 * @returns {Array}     An array of all the spaces on the board
	 */

	createSpaces() {
		const spaceArray = [];

		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				let space = new Space(i, j);
				spaceArray.push(space);
			}
		}

		return spaceArray;
	}
}
