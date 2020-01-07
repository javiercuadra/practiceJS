class Space {
	constructor(row, column) {
		this.row = row;
		this.column = column;
		this.id = `space-${row}-${column}`;
		this.token = null;
		this.diameter = 76;
		this.radius = this.diameter / 2;
	}

	/**
	 * Renders the space object using an svg
	 */
	drawSVGSpace() {
		const svgSpace = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'circle'
		);

		svgSpace.setAttributeNS(null, 'id', this.id);
		svgSpace.setAttributeNS(null, 'cx', this.row * this.diameter + this.radius);
		svgSpace.setAttributeNS(
			null,
			'cy',
			this.column * this.diameter + this.radius
		);
		svgSpace.setAttributeNS(null, 'r', this.radius - 8);
		svgSpace.setAttributeNS(null, 'fill', 'black');
		svgSpace.setAttributeNS(null, 'stroke', 'none');

		document.getElementById('mask').appendChild(svgSpace);
	}
}
