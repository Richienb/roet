const test = require("ava")
const roet = require(".")

test("main", (t) => {
	t.is(roet(16), 4)
	t.is(roet(16, 4), 2)
	t.is(roet(-16, 4), -2)
})
