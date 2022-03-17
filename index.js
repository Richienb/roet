"use strict"

module.exports = (number, root = 2) => {
	if (typeof number !== "number") {
		throw new TypeError("Invalid number provided")
	}

	if (typeof root !== "number" || root <= 0) {
		throw new Error("Invalid root provided")
	}

	const normalized = Math.abs(number)
	const answer = normalized ** (1 / root)

	return number < 0 ? -answer : answer
}
