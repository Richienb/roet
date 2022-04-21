import test from 'ava';
import roet from './index.js';

test('main', t => {
	t.is(roet(16), 4);
	t.is(roet(16, 4), 2);
	t.is(roet(-16, 4), -2);
	t.deepEqual(roet(-27, 3), Number.NaN);
});

test('errors', t => {
	t.throws(() => roet('foo'), {message: 'Invalid number provided'});

	t.throws(() => roet(16, 0), {message: 'Invalid root provided'});
	t.throws(() => roet(16, -50), {message: 'Invalid root provided'});

	t.throws(() => roet(16, 'foo'), {message: 'Invalid root provided'});
});
