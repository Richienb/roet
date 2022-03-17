const { test } = require("uvu")
const { is, throws } = require("uvu/assert")
const roet = require(".")

test("main", () => {
	is(roet(16), 4)
	is(roet(16, 4), 2)
	is(roet(-16, 4), -2)
})

test("errors", () => {
	throws(() => roet("foo"), ({ message }) => message === "Invalid number provided")

	throws(() => roet(16, 0), ({ message }) => message === "Invalid root provided")
	throws(() => roet(16, -50), ({ message }) => message === "Invalid root provided")

	throws(() => roet(16, "foo"), ({ message }) => message === "Invalid root provided")
})

test.run()
