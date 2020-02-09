"use strict"

const { default: ow } = require("ow")

module.exports = (number, root = 2) => {
	ow(number, ow.number)
	ow(root, ow.number.positive)

	const normalized = Math.abs(number)
	const answer = normalized ** (1 / root)

	return number < 0 ? -answer : answer
}
