class Board {
	constructor() {
		this.rows = 6;
		this.columns = 7;
		this.spaces = this.createSpaces(this.rows, this.columns);
	}

	/**
	 * Creates a 2D Array of all the spaces on the board
	 *
	 * @returns {Array}     An array of all the spaces on the board
	 */

	createSpaces() {
		const spaceArray = [];

		for (let i = 0; i < this.rows; i++) {
			const column = [];
			for (let j = 0; j < this.columns; j++) {
				const space = new Space(i, j);
				column.push(space);
			}
			spaceArray.push(column);
		}

		return spaceArray;
	}

	/**
	 * Renders the board object using HTML
	 */
	drawHTMLBoard() {
		for (let column in this.spaces) {
			for (let space in column) {
				space.drawSVGSpace();
			}
		}
	}
}
