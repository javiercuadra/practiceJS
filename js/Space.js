class Space {
	constructor(row, column) {
		this.row = row;
		this.column = column;
		this.id = `space-${row}-${column}`;
		this.token = null;
	}
}
