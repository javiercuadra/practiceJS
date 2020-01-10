class Board {
	constructor() {
		this.rows = 6;
		this.columns = 7;
<<<<<<< HEAD
		this.spaces = this.createSpaces(this.rows, this.columns);
=======
		this.spaces = this.createSpaces();
>>>>>>> a8bebc9dc9740fe0ea54d66349b1179f84d19547
	}

	/**
	 * Creates a 2D Array of all the spaces on the board
	 *
	 * @returns {Array}     An array of all the spaces on the board
	 */

	createSpaces() {
		const spaceArray = [];

		for (let x = 0; x < this.columns; x++) {
			const column = [];
			for (let y = 0; y < this.rows; y++) {
				const space = new Space(x, y);
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
		for (let column of this.spaces) {
			for (let space of column) {
				space.drawSVGSpace();
			}
		}
	}
}
