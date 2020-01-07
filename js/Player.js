class Player {
	constructor(name, id, color, active = false) {
		this.name = name;
		this.id = id;
		this.color = color;
		this.active = active;
		this.tokens = this.createToken(21);
	}

	/**
	 * Creates token objects for player
	 * @param     {integer}    num - Number of token objects to be created
	 * @returns   {Array}     An array of the newly created token objects
	 */
	createToken(num) {
		const tokenArray = [];

		for (let i = 0; i < num; i++) {
			let token = new Token(this, i);
			tokenArray.push(token);
		}

		return tokenArray;
	}

	/**
	 * Gets all tokens that have not been dropped
	 * @returns {Array} Array of unused tokens
	 */

	get unusedTokens() {
		return this.tokens.filter(token => token.active === false);
	}

	/**
	 * Gets the active token by returning the first token in the array of unused tokens
	 * @returns {Object} First token object in the array of unused tokens
	 */

	get activeToken() {
		return this.unusedTokens[0];
	}
}
