class Token {
	constructor(owner, index) {
		this.owner = owner;
		this.id = `token-${index}-${owner.id}`;
		this.dropped = false;
	}

	/**
	 * Renders a token object using HTML
	 */
	drawHTMLToken() {
		const token = document.createElement('div');
		document.getElementById('game-board-underlay').appendChild(token);
		token.setAttribute('class', 'token');
		token.setAttribute('id', this.id);
		token.style.backgroundColor = this.owner.color;
	}

	/**
	 * Gets the HTML Token element associated with the Token object
	 */
	get htmlToken() {
		return document.getElementById(this.id);
	}
}
