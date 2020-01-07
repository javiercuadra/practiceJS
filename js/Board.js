class Board {
	constructor() {
		this.rows = 6;
		this.columns = 7;
		this.spaces = this.createSpaces(rows, columns);
	}

	/**
	 * Creates all the spaces on the board
	 *
	 * @param   {integer}   rows number of rows on the board
	 * @param   {integer}   columns number of columns on the board
	 * @returns {Array}     An array of all the spaces on the board
	 */

	createSpaces(rows, columns) {
		const spaceArray = [];

		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < columns; j++) {
				let space = new Space(i, j);
				spaceArray.push(space);
			}
		}

		return spaceArray;
	}
}
