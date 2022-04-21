export default function roet(number, root = 2) {
	if (typeof number !== 'number') {
		throw new TypeError('Invalid number provided');
	}

	if (typeof root !== 'number' || root <= 0) {
		throw new Error('Invalid root provided');
	}

	if (number < 0) {
		if (root % 2 !== 0) {
			return Number.NaN;
		}

		return 0 - (Math.abs(number) ** (1 / root));
	}

	return number ** (1 / root);
}
